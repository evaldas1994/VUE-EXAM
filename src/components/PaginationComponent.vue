<template>
<div class="pagination-component">
  <div class="pages">
    <div class="page" v-for="(item, index) in pageNumbers" :key="index">
      <p :class="(page === item) ? 'active' : ''" @click="changePage(item)">{{item}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: ['pageNumbers'],
  methods: {
    changePage(page) {
      this.$store.commit('changePage', page);
    }
  },
  computed: {
    page() {
      return this.$store.state.page;
    }
  }
}
</script>

<style scoped>

.pages {
  display: flex;
}

.page {
  cursor: pointer;
}

p {
  margin: 5px 0;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: silver;
  border: 1px solid white;
  border-collapse: collapse;
}

.active {
  font-weight: bold;
  color: white;
  background: #525151;
}
</style>