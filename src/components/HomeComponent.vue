<template>
<div class="page home-component cards">
  <div
      v-for="item in giveAways"
      :key="item.id"
  >
    <CardComponent
        :item="item"
    />
  </div>
</div>
</template>

<script>
import CardComponent from "./CardComponent";

export default {
  name: "HomeComponent",
  components: {
    CardComponent
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

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>