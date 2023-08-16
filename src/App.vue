<script>
import Navbar from "./components/Navbar.vue";
import TodoList from "./components/TodoList.vue";
import StatusBar from "./components/StatusBar.vue";
import ProgressBar from "./components/ProgressBar.vue";
import AddTodo from "./components/AddTodo.vue";
export default {
    name: "App",
    components: { TodoList, Navbar, StatusBar, ProgressBar, AddTodo },
};
</script>
<template>
    <div id="app">
        <Navbar />
        <AddTodo />
        <TodoList />
        <StatusBar />
        <ProgressBar />
    </div>
</template>

<style></style>
