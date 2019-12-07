import Restaurant from '@/assets/restaurant.json';

const state = {
    signature_dishes: []
}
const getters = {
    signature_dishes: state => state.signature_dishes
}
const mutations = {
    setSignatureDish: (state, value) => state.signature_dishes = value
}
const actions = {
    getSignatureDish: ({ commit }) => {
        if (Restaurant.hasOwnProperty("signature_dish")) {
            commit("setSignatureDish", Restaurant["signature_dish"]);
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}