<template>
  <img alt="Vue logo" src="./assets/logo.png">
    <Greetings />
    <Connect />
    <Maps />
    <Visitor />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Greetings from './components/Greetings.vue'
import Maps from './components/Maps.vue'
import Connect from './components/Connect.vue'
import Visitor from './components/Visitor.vue'

export default {
  name: 'App',
  components: {
    Greetings,
    Connect,
    Maps,
    Visitor
  }
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
