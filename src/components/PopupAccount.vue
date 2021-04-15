<template>
  <div class="popup-account">
    <div class="account-pop">
      <p class="title">계좌번호</p>
      <h3>{{ who }}</h3>
      <p class="bank">{{ accountBank}}</p>
      <p class="acc-num">{{ accountNum }}</p>
      <button
        type="button"
        class="btn-close-pop"
        @click="$emit('close-account-pop')"
        >Close</button>
    </div>
  </div>
</template>
<script>

export default {

  props: {
    who: String,
    accountBank: String,
    accountNum: String
  },
  methods: {
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
    font-size: $font-xs;
    line-height: 1.4;
    background-color: $bg-color;
    color: $col-key;
    .title {
      font-size: $font-s;
    }
    h3 {
      margin-top: 20px;
    }
    .bank {
      margin-top: 10px;
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