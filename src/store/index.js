import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    perPage: 10,
    giveAways: null,
    page: 1,
    oneItem: null,
    allPlatforms: null,
    allTypes: null,
    allSortBy: [
      { sortBy: 'Date' },
      { sortBy: 'Value' },
      { sortBy: 'Popularity' }
    ]
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
    },
    setAllTypes(state, types) {
      state.allTypes = types;
    },
    setAllPlatforms(state, platforms) {
      state.allPlatforms = platforms;
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


    getAllPlatforms(context) {
      let allPlatforms = [];
      const data = context.state.giveAways;

      data.forEach(e => {
        let platforms = e.platforms.split(', ');

        platforms.forEach(el => {
          if (allPlatforms.some(x => x.platform === el)) {
            console.log('found');
          } else {
            allPlatforms.push({platform: el});
          }
        })
      })

      context.commit('setAllPlatforms', allPlatforms);
    },
    getAllTypes(context) {
      let allTypes = [];
      const data = context.state.giveAways;

      data.forEach(e => {
        if (allTypes.some(x => x.type === e.type)) {
          console.log('found type');
        } else {
          allTypes.push({type: e.type});
        }
      })

      context.commit('setAllTypes', allTypes);
    }
  },
  modules: {
  }
})
