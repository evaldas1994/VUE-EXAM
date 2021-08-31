<template>
  <div class="filter-component">
    <div class="platforms">
      <div class="platform" v-for="(item, index) in platforms" :key="index">
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
    }
  },
  watch: {
    giveAways() {
      this.$store.dispatch('getAllPlatforms');
      this.$store.dispatch('getAllTypes');
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
  margin-top: 20px;
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