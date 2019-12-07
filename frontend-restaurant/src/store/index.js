import Vue from 'vue'
import Vuex from 'vuex'
import Restaurant from '@/assets/restaurant.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signature_dish: []
  },
  mutations: {
    setSignatureDish: (state, value) => state.signature_dish = value
  },
  actions: {
    getSignatureDish: () => {

    }
  },
  modules: {
  }
})
