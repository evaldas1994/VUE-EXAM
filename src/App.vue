<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
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
  color: #2c3e50;
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
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: silver;
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
</style>
