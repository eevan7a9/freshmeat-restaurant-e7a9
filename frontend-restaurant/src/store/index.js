import Vue from 'vue';
import Vuex from 'vuex';
import Dishes from './dishes';


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Dishes
  }
})
