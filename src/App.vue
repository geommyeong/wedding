<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <router-link to="/">Home</router-link>
    <router-link to="/card">Card</router-link> -->
    <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import './assets/style/_variables.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: $bg-color;
}
</style>
