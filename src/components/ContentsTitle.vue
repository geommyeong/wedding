<template>
  <div
    ref="contentsTtile"
    class="contents-title"
    :class="{'is-right' : isRight}"
  >
    <h2 class="text-int">
      <strong class="tt">{{ title }}</strong>
    </h2>
    <p
      class="text-int"
      v-if="description"
      v-html="description" />
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
    // descriptionBreak (desc) {
    //   let aaa = desc.split('\n').join('</span>')
    //   return aaa
    // }
  }
}
</script>
<style lang="scss">
  .contents-title {
    position: relative;
    z-index: $z-bg;
    margin: 0 0 34px $left-gap;
    color: $col-key;
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
          background-color: $col-key;
        }
      }
    }
    p {
      margin-top: 20px;
      font-size: $font-xs;
      line-height: 1.6;
    }
  }
</style>