<template>
<div class="my-page home-component">
  <div class="pagination">
    <PaginationComponent :pageNumbers="getNumberOfPage()"/>
  </div>

  <div class="cards">
    <div v-for="(item, index) in getPaginatedData()" :key="index">
      <CardComponent :item="item"/>
    </div>
  </div>

  <div class="pagination">
    <PaginationComponent :pageNumbers="getNumberOfPage()"/>
  </div>
</div>
</template>

<script>
import CardComponent from "./CardComponent";
import PaginationComponent from "./PaginationComponent";

export default {
  name: "HomeComponent",
  data: () => {
    return {
      perPage: 10
    }
  },
  methods: {
    getPaginatedData() {
      return this.giveAways.slice((this.page * this.perPage) - this.perPage, this.page * this.perPage);
    },
    getNumberOfPage() {
      return Math.ceil(this.giveAways.length / this.perPage);
    },

    getAllPlatforms(data) {
      let allPlatforms = [];

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

      this.$store.commit('setAllPlatforms', allPlatforms);
    },

    getAllTypes(data) {
      let allTypes = [];

      data.forEach(e => {
        if (allTypes.some(x => x.type === e.type)) {
          console.log('found type');
        } else {
          allTypes.push({type: e.type});
        }
      })

      this.$store.commit('setAllTypes', allTypes);
    }

  },
  components: {
    CardComponent,
    PaginationComponent
  },
  beforeCreate() {
    this.$store.dispatch('getAllData');
  },
  computed: {
    giveAways() {
      return this.$store.state.giveAways;
    },
    page() {
      return this.$store.state.page;
    }
  },
  watch: {
    giveAways(newValue) {
      this.getAllPlatforms(newValue);
      this.getAllTypes(newValue);
    }
  }
}
</script>

<style scoped>
.home-component {
  display: flex;
  flex-direction: column;
}

.pagination {
  display: flex;
  justify-content: center;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>