<template>
<div>
  home
</div>
</template>

<script>
export default {
  name: "HomeComponent",
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

</style>