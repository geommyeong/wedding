<template>
    <router-view />
    <GoodBye />
</template>

<script>
import GoodBye from '@/components/GoodBye.vue'

export default {
  name: 'App',
  components: {
    GoodBye
  }
}
</script>

<style lang="scss">
@import '@/assets/css/reset.scss';
@import '@/assets/css/variables.scss';
@import '@/assets/css/common.scss';
</style>
