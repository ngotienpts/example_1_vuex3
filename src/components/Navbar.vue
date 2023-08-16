<script>
import { mapMutations, mapGetters } from "vuex";
export default {
    name: "Navbar",
    computed: mapGetters(["auth", "todos"]),
    methods: mapMutations(["TOGGLE_AUTH"]),
};
</script>
<template>
    <div class="navbar">
        <h1>Todo List</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li v-if="auth.isAuthenticated">
                Total: {{ todos.length }}
                <button @click="TOGGLE_AUTH">Logout</button>
            </li>
            <li v-else><button @click="TOGGLE_AUTH">Login</button></li>
        </ul>
    </div>
</template>

<style>
.navbar {
    padding: 5px;
    text-align: center;
    color: #000;
    background: rgb(240, 240, 240);
}

.navbar ul {
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
