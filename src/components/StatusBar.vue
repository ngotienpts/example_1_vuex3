<script>
import { mapGetters } from "vuex";
export default {
    name: "StatusBar",
    computed: mapGetters(["doneTodos", "auth"]),
};
</script>
<template>
    <div class="status-bar" v-if="auth.isAuthenticated">
        <p>Done</p>
        <ul>
            <li v-for="todo in doneTodos" :key="todo.id">
                {{ todo.title }}
            </li>
        </ul>
    </div>
</template>
<style>
.status-bar {
    padding: 5px;
    text-align: center;
    color: #000;
    background: rgb(240, 240, 240);
}
</style>
