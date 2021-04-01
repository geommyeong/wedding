<template>
  <h1>Home</h1>
  <h2>hoehoehoehoehoehoehoehome!!</h2>
  <Greetings />
  <Connect />
  <Maps />
  <Photos />
  <Visitor />
</template>
<script>
import Greetings from '../components/Greetings.vue'
import Photos from '../components/Photos.vue'
import Maps from '../components/Maps.vue'
import Connect from '../components/Connect.vue'
import Visitor from '../components/Visitor.vue'

export default {
  name: 'App',
  components: {
    Greetings,
    Connect,
    Photos,
    Maps,
    Visitor
  }
}
</script>