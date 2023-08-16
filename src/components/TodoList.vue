<script>
import { mapMutations, mapGetters } from "vuex";

export default {
    name: "TodoList",
    created() {
        this.setTodo();
    },
    computed: mapGetters(["todos", "auth"]),
    // c2 computed: mapState({
    //     todos: (state) => state.todos,
    //     isAuthenticated: (state) => state.auth.isAuthenticated,
    // }),
    // c3 computed: {
    //     todos() {
    //         return this.$store.state.todos;
    //     },
    //     isAuthenticated() {
    //         return this.$store.state.auth.isAuthenticated;
    //     },
    // },
    methods: {
        ...mapMutations(["TOOGLE_CHECK"]),
        //...mapActions(["deleteTodo"]),
        deleteTodo(id) {
            this.$store.dispatch("deleteTodo", id);
        },
        // ...mapActions(["setTodo"]),
        setTodo() {
            this.$store.dispatch("setTodo");
        },
    },
};
</script>
<template>
    <div class="todo-list">
        <ul v-if="auth.isAuthenticated">
            <li
                v-for="todo in todos"
                :key="todo.id"
                :class="['todo-item', todo.completed ? 'is_completed' : '']"
            >
                <label :for="todo.id" class="todo-label">{{
                    todo.title
                }}</label>
                <input
                    type="checkbox"
                    :name="todo.title"
                    :id="todo.id"
                    class="todo-input"
                    :checked="todo.completed"
                    @change="TOOGLE_CHECK(todo.id)"
                />
                <button class="btn-delete" @click="deleteTodo(todo.id)">
                    Delete
                </button>
            </li>
        </ul>
        <p v-else>Not</p>
    </div>
</template>

<style scoped>
.todo-list {
    background: #646464;
}
.todo-list ul {
    padding: 0 10px 10px 10px;
    list-style-type: none;
}
.todo-list li {
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    color: #000;
    background: rgb(240, 240, 240);
}
.todo-list li.is_completed {
    background: aquamarine;
}
.todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.todo-label {
    flex: 1;
}
.btn-delete {
    cursor: pointer;
    margin-left: 20px;
}
</style>
