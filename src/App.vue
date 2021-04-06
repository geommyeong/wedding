<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <router-link to="/">Home</router-link>
    <router-link to="/card">Card</router-link> -->
    <Hello />
    <router-view />
    <Photos />
    <Maps />
    <Visitor />
</template>

<script>
import Visitor from './components/Visitor.vue'
import Hello from '@/components/Hello.vue'
import Photos from '@/components/Photos.vue'
import Maps from '@/components/Maps.vue'
// import Account from '@/components/Account.vue'
export default {
  name: 'App',
  components: {
    Hello,
    Photos,
    Maps,
    // Account,
    Visitor
  }
}
</script>

<style lang="scss">
@import '@/assets/css/reset.scss';
@import '@/assets/css/variables.scss';
@import '@/assets/css/common.scss';
</style>
