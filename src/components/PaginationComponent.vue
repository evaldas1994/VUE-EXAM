<template>
<div class="pagination-component">
  <div class="pages">
    <div class="page">
      <p><i class="fas fa-caret-left"></i></p>
    </div>

    <div class="page">
      <p>1</p>
    </div>

    <div class="page">
      <p>2</p>
    </div>

    <div class="page">
      <p>3</p>
    </div>

    <div class="page">
      <p>4</p>
    </div>

    <div class="page">
      <p>5</p>
    </div>

    <div class="page">
      <p><i class="fas fa-caret-right"></i></p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PaginationComponent"
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