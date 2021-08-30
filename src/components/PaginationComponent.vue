<template>
<div class="pagination-component">
  <div class="pages">
    <div class="page" v-for="(item, index) in pageNumbers" :key="index">
      <p @click="changePage(item)">{{item}}</p>
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
</style>