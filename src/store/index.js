import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    giveAways: null,
    page: 1,
    oneItem: null
  },
  mutations: {
    setGiveAways(state, giveAways) {
      state.giveAways = giveAways;
    },
    changePage(state, page) {
      state.page = page;
    },
    setOneItem(state, item) {
      state.oneItem = item;
    }
  },
  actions: {
    async getAllData(context) {
      const res = await  fetch('http://167.99.138.67:4545/giveaways/all');
      const data = await  res.json();

      context.commit('setGiveAways', data);
    },

    async getDataById(context, id) {
      const res = await  fetch(`http://167.99.138.67:4545/giveaways/id/${id}`);
      const data = await  res.json();

      context.commit('setOneItem', data);
    },
  },
  modules: {
  }
})
