import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    giveAways: null
  },
  mutations: {
    setGiveAways(state, giveAways) {
      state.giveAways = giveAways;
    }
  },
  actions: {
    async getAllData(context) {
      const res = await  fetch('http://167.99.138.67:4545/giveaways/all');
      const data = await  res.json();

      context.commit('setGiveAways', data);
    }
  },
  modules: {
  }
})
