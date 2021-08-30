<template>
  <div class="card-component">
    <div class="card" @click="showSingle(item.id)">
      <div class="image">
        <img :src="item.thumbnail" alt="image">
      </div>

      <div class="title">
        <h3>{{ item.title }}</h3>
      </div>

      <div class="price">
        <p :class="getPrice(item.worth).class">{{ getPrice(item.worth).value  }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ['item'],
  methods: {
    showSingle(id) {
      this.$router.push(`/single/${id}`);
    },
    getPrice(price) {
      if (price === 'N/A') {
        return { isFree: true, value: 'free', class:'green'};
      } else if (parseInt(price.substring(1)) > 10){
        return { isFree: false, value: price, class: 'yellow'};
      } else {
        return { isFree: false, value: price, class: 'green'};
      }
    }
  }
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
  font-weight: bold;
  text-shadow: -1px -1px 4px rgba(255, 255, 255, 0.5);
}

.green {
  color: #01c201;
}

.yellow {
  color: yellow;
}
</style>