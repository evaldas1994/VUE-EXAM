<template>
<div class="my-page single-component">
  <div class="container">
    <div class="title">
      <h2>{{ item.title }}{{ getYear(item.end_date) }}</h2>
    </div>

    <div class="about">
      <div class="image">
        <img :src="item.thumbnail" alt="image">
      </div>

      <div class="info">
        <div class="description">
          {{ item.description}}
        </div>

        <div class="instructions">
          {{ item.instructions}}
        </div>
      </div>
    </div>

    <div class="others">
      <div class="other price">
        <i class="fas fa-coins"></i>{{ getPrice(item.worth) }}
      </div>

      <a :href="item.open_giveaway_url">
        <div class="other open-link">
          <i class="fas fa-download"></i>
        </div>
      </a>

      <div class="other type">
        {{ item.type }}
      </div>

      <div class="other users">
        <i class="fas fa-users"></i>{{ item.users }}
      </div>

      <div class="other status">
        <i class="fas fa-check"></i>{{ item.status }}
      </div>

      <a :href="item.gamerpower_url">
        <div class="other url">
          <i class="fas fa-info"></i>
        </div>
      </a>
    </div>

    <div class="platforms">
      <div class="platform">
        Windows
      </div>

      <div class="platform">
        Linux
      </div>

      <div class="platform">
        PS4
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "SingleComponent",
  methods: {
    getYear(date) {
      if (date !== 'N/A') {
        return '('+ parseInt(date) + ')';
      } else {
        return '';
      }
    },
    getPrice(price) {
      return  (price === 'N/A') ? 'free' : price;
    }
  },
  created() {
    this.$store.dispatch('getDataById', this.$route.params.id);
  },
  computed: {
    item() {
      return this.$store.state.oneItem;
    }
  }
}
</script>

<style scoped>

.single-component {
  color: silver;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about {
  display: flex;
  justify-content: space-around;
}

.image {
  width: 40%;
}

img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.info {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.description, .instructions {
  padding: 0 5px 10px 5px;
}

.others, .platforms {
  display: flex;
  margin-top: 20px;
}

.other, .platform {
  padding: 5px 15px;
  margin: 0 10px;
  border: 1px solid white;
  cursor: pointer;
}

a {
  color: silver;
}

.platforms {
  display: flex;
}
</style>