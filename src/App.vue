<template>
  <img alt="Vue logo" src="./assets/logo.png">
    <router-link :to="`${baseUrl}`">Home!</router-link>
    <router-link :to="`${baseUrl}card`">Card</router-link>
    <router-view />
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      baseUrl: process.env.BASE_URL
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
