<template>
<div class="page home-component">
  <div class="pagination">
    <PaginationComponent :pageNumbers="getNumberOfPage()"/>
  </div>

  <div class="cards">
    <div v-for="(item, index) in getPaginatedData()" :key="index">
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