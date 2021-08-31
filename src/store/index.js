import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    perPage: 10,
    giveAways: null,
    sortedGiveAways: [],
    page: 1,
    oneItem: null,
    allPlatforms: [
      { platform: 'pc'},
      { platform: 'steam'},
      { platform: 'epic-games-store'},
      { platform: 'ubisoft'},
      { platform: 'gog'},
      { platform: 'itchio'},
      { platform: 'ps4'},
      { platform: 'xbox-one'},
      { platform: 'switch'},
      { platform: 'android'},
      { platform: 'ios'},
      { platform: 'vr'},
      { platform: 'battlenet'},
      { platform: 'origin'},
      { platform: 'drm-free'},
    ],
    allTypes: [
      { type: 'game'},
      { type: 'loot'},
      { type: 'beta'},
    ],
    allSortBy: [
      { sortBy: 'date' },
      { sortBy: 'value' },
      { sortBy: 'popularity' }
    ],
    platform: null,
    type: null,
    sort: null
  },
  mutations: {
    setGiveAways(state, giveAways) {
      state.giveAways = giveAways;
    },
    setSortedGiveAways(state, sortedGiveAways) {
      state.sortedGiveAways = sortedGiveAways;
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
    },
    setPlatform(state, platform) {
      console.log('clicked', platform);
      state.platform = platform;
    },
    setType(state, type) {
      state.type = type;
    },
    setSort(state, sort) {
      state.sort = sort;
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

    async getSortedData(context) {
      const res = await  fetch(`http://167.99.138.67:4545/giveaways/sort/${context.state.platform}/${context.state.type}/${context.state.sort}`);
      const data = await  res.json();

      console.log('type is: ', context.state.type)
      console.log(data)
      context.commit('setSortedGiveAways', data);
    },
  },
  modules: {
  }
})
