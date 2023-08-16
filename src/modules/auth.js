const authModule = {
    state: {
        auth: {
            isAuthenticated: false,
        },
    },
    getters: {
        auth: (state) => state.auth,
    },
    mutations: {
        TOGGLE_AUTH: (state) =>
            (state.auth.isAuthenticated = !state.auth.isAuthenticated),
    },
    actions: {},
};

export default authModule;
