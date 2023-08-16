<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "AddTodo",
    computed: mapGetters(["auth"]),
    data() {
        return {
            inputValue: "",
            inputRef: null,
        };
    },
    methods: {
        ...mapActions(["addTodo"]),
        handleAddTodo(e) {
            e.preventDefault();

            if (this.inputValue.trim() === "") {
                alert("Ko duoc de trong");
                this.$refs.inputRef.focus();
                return;
            }

            this.addTodo({
                title: this.inputValue,
                completed: false,
            });

            this.inputValue = "";
            this.$refs.inputRef.focus();
            return;
        },
    },
};
</script>
<template>
    <div class="add-todo__group" v-if="auth.isAuthenticated">
        <form class="add-todo__form" @submit="handleAddTodo">
            <input
                ref="inputRef"
                type="text"
                class="add-todo__input"
                v-model="inputValue"
            />
            <input type="submit" value="Add" class="add-todo__submit" />
        </form>
    </div>
</template>
<style scoped>
.add-todo__form {
    display: flex;
    align-items: center;
}
.add-todo__input {
    flex: 10;
    height: 48px;
    padding: 10px;
    font-size: 16px;
}
.add-todo__submit {
    flex: 2;
    height: 48px;
}
</style>
