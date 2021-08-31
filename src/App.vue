<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/sort">Sort</router-link>
    </div>

    <router-view/>

    <div class="footer">
      <p> Evaldas Tuleikis &copy; All rights reserved </p>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  background: #626161;
}

#app {
  font-family: 'Jura', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #494949;
  position: relative;
}

#nav {
  display: flex;
  justify-content: center;
  background: #494949;
  border-bottom: 1px solid white;
  padding: 1em 0;
}

#nav a {
  color: silver;
  text-decoration: none;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: silver;
  font-weight: bold;
  text-shadow: -1px -1px 4px rgba(255, 255, 255, 0.5);
}

.my-page {
  min-height: calc(100vh - 51px - 51px);
}

.footer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  color: silver;
  background: #494949;
  border-top: 1px solid white;
  position: absolute;
  bottom: -51px;
}

.footer p {
  margin: 0;
  padding: 1em 0;
}

.active {
  color: white;
  background: #313131;
  text-shadow: -1px -1px 4px rgba(255, 255, 255, 1);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.pagination {
  display: flex;
  justify-content: center;
}
</style>
