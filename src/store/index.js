import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isCollapse: false
    },
    getters: {},
    mutations: {
        CollapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        }
    },
    actions: {},
    modules: {}
});
