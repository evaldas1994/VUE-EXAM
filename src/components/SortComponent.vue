<template>
<div class="my-page sort-component">
  <FilterComponent/>
</div>
</template>

<script>
import FilterComponent from "./FilterComponent";

export default {
  name: "SortComponent",
  components: {
    FilterComponent
  }
}
</script>

<style scoped>
.sort-component {
  color: silver;
}
</style>