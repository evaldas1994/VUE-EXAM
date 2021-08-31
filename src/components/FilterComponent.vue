<template>
  <div class="filter-component">
    <p class="section-title">Platforms: </p>
    <div class="platforms">
      <div v-for="(item, index) in platforms" :key="index">
        <div :class="platform === item.platform ? 'platform active' : 'platform'" @click="setPlatform(item.platform)">
          <p>{{ getFirstLetterUpperCase(item.platform) }}</p>
        </div>
      </div>
    </div>

    <p class="section-title">Types: </p>
    <div class="types">
      <div v-for="(item, index) in types" :key="index">
        <div :class="type === item.type ? 'type active' : 'type'" @click="setType(item.type)">
          <p>{{ getFirstLetterUpperCase(item.type) }}</p>
        </div>
      </div>
    </div>

    <p class="section-title">Sort By: </p>
    <div class="sort-by">
      <div v-for="(item, index) in sorts" :key="index">
        <div :class="sort === item.sortBy ? 'sort active' : 'sort'" @click="setSort(item.sortBy)">
          <p>{{ getFirstLetterUpperCase(item.sortBy) }}</p>
        </div>
      </div>
    </div>

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
  name: "FilterComponent",
  components: {
    CardComponent,
    PaginationComponent
  },
  methods: {
    getFirstLetterUpperCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    setPlatform(platform) {
      this.$store.commit('setPlatform', platform);
    },
    setType(type) {
      this.$store.commit('setType', type);
    },
    setSort(sort) {
      this.$store.commit('setSort', sort);
    },
    checkIsSortAttributesValid() {
      if (this.platform !== null && this.type !== null && this.sort !== null) {
        this.$store.dispatch('getSortedData');
      }
    },
    getPaginatedData() {
      return this.sortedGiveAways.slice((this.page * this.perPage) - this.perPage, this.page * this.perPage);
    },
    getNumberOfPage() {
      return Math.ceil(this.sortedGiveAways.length / this.perPage);
    },
  },
  computed: {
    giveAways() {
      return this.$store.state.giveAways;
    },
    platforms() {
      return this.$store.state.allPlatforms;
    },
    types() {
      return this.$store.state.allTypes;
    },
    sorts() {
      return this.$store.state.allSortBy;
    },
    platform() {
      return this.$store.state.platform;
    },
    type() {
      return this.$store.state.type;
    },
    sort() {
      return this.$store.state.sort;
    },
    page() {
      return this.$store.state.page;
    },
    perPage() {
      return this.$store.state.perPage;
    },
    sortedGiveAways() {
      return this.$store.state.sortedGiveAways;
    }
  },
  watch: {
    platform() {
      this.checkIsSortAttributesValid();
    },
    type() {
      this.checkIsSortAttributesValid();
    },
    sort() {
      this.checkIsSortAttributesValid();
    }
  },
  beforeCreate() {
    this.$store.dispatch('getAllData');
  }
}
</script>

<style scoped>
.platforms, .types, .sort-by {
  display: flex;
  flex-wrap: wrap;
}

.platform, .type, .sort {
  border: 1px solid white;
  padding: 5px 15px;
  margin: 10px;
  cursor: pointer;
}

.section-title {
  margin-top: 20px;
  padding: 0 10px;
}

p {
  padding: 0;
  margin: 0;
}

</style>