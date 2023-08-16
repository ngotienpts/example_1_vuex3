import Vue from "vue";
import Vuex from "vuex";

import authModule from "../modules/auth";
import todosModule from "../modules/todos";

Vue.use(Vuex);

const storeData = {
    modules: {
        authModule,
        todosModule,
    },
};

const store = new Vuex.Store(storeData);

export default store;
