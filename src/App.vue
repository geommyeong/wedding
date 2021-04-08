<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <router-link to="/">Home</router-link>
    <router-link to="/card">Card</router-link> -->
    <Hello />
    <router-view />
    <Visitor />
    <VisitorRealTime />
</template>

<script>
import VisitorRealTime from '@/components/VisitorRealTime.vue'
import Visitor from '@/components/Visitor.vue'
import Hello from '@/components/Hello.vue'

export default {
  name: 'App',
  components: {
    Hello,
    VisitorRealTime,
    Visitor
  }
}
</script>

<style lang="scss">
@import '@/assets/css/reset.scss';
@import '@/assets/css/variables.scss';
@import '@/assets/css/common.scss';
</style>
