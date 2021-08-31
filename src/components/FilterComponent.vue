<template>
  <div class="filter-component">
    <div class="platforms">
      <div class="platform" v-for="(item, index) in allPlatforms" :key="index">
        <p>{{ item.platform }}</p>
      </div>
    </div>

    <div class="types">
      <div class="type" v-for="(item, index) in types" :key="index">
        <p>{{ item.type }}</p>
      </div>
    </div>

    <div class="sort-by">
      <div class="sort" v-for="(item, index) in sorts" :key="index">
        <p>{{ item.sortBy }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  data: () => {
    return {
      allPlatforms: [],
    }
  },
  computed: {
    platforms() {
      return this.$store.state.allPlatforms;
    },
    types() {
      return this.$store.state.allTypes;
    },
    sorts() {
      return this.$store.state.allSortBy;
    }
  },
  watch: {
    platforms(newValue) {
      this.allPlatforms = newValue;
      console('watch')
    }
  },
  beforeCreate() {
    this.$store.dispatch('getAllData');
    console.log('begoreCreate')
  },
  created() {
    this.allPlatforms = this.$store.state.allPlatforms;
    console.log('created')
  },
  beforeDestroy() {
    this.$store.commit('setAllPlatforms', null);
    console.log('before destroy')
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
}

p {
  padding: 0;
  margin: 0;
}
</style>