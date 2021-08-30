<template>
  <div class="card-component">
    <div class="card">
      <div class="image">
        <img :src="item.thumbnail" alt="image">
      </div>

      <div class="title">
        <h3>{{ item.title }}</h3>
      </div>

      <div class="price">
        <p>{{ item.worth }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ['item']
}
</script>

<style scoped>
.card {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: gray;
  color: silver;
  border: 1px solid white;
  margin: 10px;
  cursor: pointer;
}

.image {
  width: 200px;
}

img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

h3, p {
  margin: 0;
  padding: 0 5px;
}

.title {
  height: 5em;
  overflow: hidden;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  display: none;
}

.price {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>