<template>
  <div 
    class="popup-toast"
    :class="{'up' : isToastUp }"
  >
    {{ popMessage }}
  </div>
</template>
<script>

export default {

  props: {
    popMessage: String,
    isToastUp: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    callToastPopup (popMessage) {
      this.isToastUp = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .account-pop {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 60%;
    max-width: 380px;
    height: 200px;
    padding: $side-padding * 2;
    border-radius: 8px;
    z-index: 9999;
    transform: translate(-50%, -50%);
    background: #fff;
    font-size: $font-xxs;
    line-height: 1.4;
    background-color: $bg-color;
    color: $col-key;
    .title {
      font-size: $font-xs;
      padding-bottom: 10px;
      border-bottom: 1px solid $col-key;
    }
    h3 {
      margin-top: 20px;
    }
    .bank {
      margin-top: 10px;
    }
    .acc-num {
      margin-top: 10px;
    }
    input {
      display: none;
    }
    .btn-close-pop {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 20px;
      height: 20px;
      z-index: 10;
      text-indent: -9999px;
      &:before, &:after {
        content: '';
        position: absolute;
        top: 10px;
        left: 0;
        width: 20px;
        height: 2px;
        background-color: $col-key;
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
      }
    }
  }
</style>