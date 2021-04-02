<template>
  <Hello />
  <Greetings
    groom-father="황두영"
    groom-mother="윤현"
    bridal-father="강용강"
    bridal-mother="이미숙"
    groom="검명"
    bridal="나영"
  />
  <Connect />
  <Maps />
  <Photos />
</template>
<script>
import Hello from '../components/Hello.vue'
import Greetings from '../components/Greetings.vue'
import Photos from '../components/Photos.vue'
import Maps from '../components/Maps.vue'
import Connect from '../components/Connect.vue'


export default {
  name: 'App',
  components: {
    Hello,
    Greetings,
    Connect,
    Photos,
    Maps
  }
}
</script>
<style lang="scss" scoped>
  
</style>