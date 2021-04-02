<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <router-link to="/">Home</router-link>
    <router-link to="/card">Card</router-link> -->
    <Visitor />
    <router-view />
</template>

<script>
import Visitor from './components/Visitor.vue'
export default {
  name: 'App',
  components: {
    Visitor
  }
}
</script>

<style>
/* @import './assets/style/_variables.scss';
@import './assets/style/_reset.scss'; */
@import './assets/style/common.scss';
</style>
