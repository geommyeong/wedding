<template>
    <router-view />
    <Visitor />
</template>

<script>
import Visitor from '@/components/Visitor.vue'

export default {
  name: 'App',
  components: {
    Visitor
  }
}
</script>

<style lang="scss">
@import '@/assets/css/reset.scss';
@import '@/assets/css/variables.scss';
@import '@/assets/css/common.scss';
</style>
