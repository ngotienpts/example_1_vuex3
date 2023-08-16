import axios from "axios";

const todosModule = {
    state: {
        todos: [],
    },
    getters: {
        todos: (state) => state.todos,
        doneTodos: (state) => {
            return state.todos.filter((todo) => todo.completed);
        },
        progress: (state, getters) => {
            const result = Math.round(
                (getters.doneTodos.length / state.todos.length) * 100
            );
            return result;
        },
    },
    mutations: {
        TOOGLE_CHECK: (state, checkId) => {
            state.todos.map((todo) => {
                if (todo.id === checkId) {
                    todo.completed = !todo.completed;
                }

                return todo;
            });
        },
        DELETE_TODO(state, todoId) {
            const newTodo = state.todos.filter((todo) => todo.id !== todoId);
            state.todos = newTodo;
        },
        ADD_TODO(state, newTodo) {
            state.todos = [...state.todos, newTodo];
        },
        SET_TODO(state, todos) {
            state.todos = todos;
        },
    },
    actions: {
        deleteTodo: async (context, todoId) => {
            try {
                await axios.delete(
                    `https://jsonplaceholder.typicode.com/todos/${todoId}`
                );
                context.commit("DELETE_TODO", todoId);
            } catch (error) {
                throw new Error(error);
            }
        },
        addTodo: async (context, newTodo) => {
            try {
                const response = await axios.post(
                    "https://jsonplaceholder.typicode.com/todos",
                    newTodo
                );
                if (response.data) {
                    context.commit("ADD_TODO", response.data);
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        setTodo: async (context) => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos?_limit=5"
                );
                if (response.data) {
                    context.commit("SET_TODO", response.data);
                }
            } catch (error) {
                throw new Error(error);
            }
        },
    },
};

export default todosModule;
