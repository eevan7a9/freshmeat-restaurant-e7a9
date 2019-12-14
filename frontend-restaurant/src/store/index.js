import Vue from 'vue';
import Vuex from 'vuex';
import Dishes from './dishes';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navbar_colored: 0
  },
  getters: {
    navbar_colored: (state) => state.navbar_colored
  },
  mutations: {
    setNavColor: (state, value) => state.navbar_colored = value
  },
  actions: {
    withColor: ({ commit }) => commit("setNavColor", true),
    withoutColor: ({ commit }) => commit("setNavColor", false)
  },
  modules: {
    Dishes
  }
})
