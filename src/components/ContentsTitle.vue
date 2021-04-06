<template>
  <div class="contents-title">
    <h2>
      <strong>{{ title }}</strong>
    </h2>
    <p v-html="descriptionBreak(description)" />
  </div>
</template>
<script>
export default {
  name: 'App',
  props: {
    title: String,
    description: String,
    isRight: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    descriptionBreak (desc) {
      return desc.split('\n').join('<br />')
    }
  }
}
</script>
<style lang="scss">
  .contents-title {
    margin-bottom: 34px;
    h2 {
      font-size: $font-s;
    }
    p {
      margin-top: 20px;
      font-size: $font-xs;
      line-height: 1.4;
    }
  }
</style>