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
      if (this.giveAways !== null) {
        return this.giveAways.slice((this.page * this.perPage) - this.perPage, this.page * this.perPage);
      }
    },
    getNumberOfPage() {
      if (this.giveAways !== null) {
        return Math.ceil(this.giveAways.length / this.perPage);
      }
    },
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
  }
}
</script>

<style scoped>
.home-component {
  display: flex;
  flex-direction: column;
}
</style>