<template>
<div class="page home-component">
  <div class="pagination">
    <PaginationComponent/>
  </div>

  <div class="cards">
  <div v-for="item in giveAways" :key="item.id">
    <CardComponent :item="item"/>
  </div>
  </div>
</div>
</template>

<script>
import CardComponent from "./CardComponent";
import PaginationComponent from "./PaginationComponent";

export default {
  name: "HomeComponent",
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
    }
  },
  watch: {
    giveAways() {
      console.log(this.giveAways);
    }
  }
}
</script>

<style scoped>
.page {
  min-height: calc(100vh - 51px - 51px);
}

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