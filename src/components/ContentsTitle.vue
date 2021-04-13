<template>
  <div
    class="contents-title"
    :class="{'is-right' : isRight}"
  >
    <h2>
      <strong>{{ title }}</strong>
    </h2>
    <p
      v-if="description"
      v-html="descriptionBreak(description)" />
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
    position: relative;
    z-index: $z-bg;
    margin-bottom: 34px;
    &.is-right {
      text-align: right;
      h2 strong:before {
        right: auto;
        left: -50px;
      }
    }
    h2 {
      font-size: $font-mid-s;
      strong {
        position: relative;
        &:before {
          content: '';
          position: absolute;
          top: calc(50% - 2px);
          right: -50px;
          width: 40px;
          height: 2px;
          background-color: #000;
        }
      }
    }
    p {
      margin-top: 20px;
      font-size: $font-xs;
      line-height: 1.4;
    }
  }
</style>