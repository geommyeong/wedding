<template>
    <router-view />
    <Visitor />
    <GoodBye />
</template>

<script>
import Visitor from '@/components/Visitor.vue'
import GoodBye from '@/components/GoodBye.vue'

export default {
  name: 'App',
  components: {
    Visitor,
    GoodBye
  }
}
</script>

<style lang="scss">
@import '@/assets/css/reset.scss';
@import '@/assets/css/variables.scss';
@import '@/assets/css/common.scss';
</style>
