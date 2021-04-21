<template>
  <div class="popup-account">
    <div class="account-pop">
      <div class="gb-account">
        <p class="title">계좌번호</p>
        <h3>{{ who }}</h3>
        <p
          class="bank"
          :class="accountBankLogo"
        >
          <em>{{ accountBank }}</em>
          <span></span>
        </p>
        <p class="acc-num">{{ accountNum }}</p>
        <button
          type="button"
          class="btn-copy"
          @click="copyAccount(accountNum)"
        >
          복사하기
        </button>
      </div>

      <button
        type="button"
        class="btn-close-pop"
        @click="$emit('close-account-pop')"
      >
        Close
      </button>
    </div>
  </div>
</template>
<script>

export default {

  props: {
    who: String,
    accountBank: String,
    accountBankLogo: String,
    accountNum: String,
  },
  methods: {
    copyAccount (num) {
      let tempElem = document.createElement('textarea');

      tempElem.value = num
      document.body.appendChild(tempElem)
      tempElem.select()
      document.execCommand('copy')
      document.body.removeChild(tempElem)
      window.alert('복사 되었습니다. 😁')
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
    height: auto;
    padding: $side-padding * 2;
    border-radius: 8px;
    z-index: 9999;
    transform: translate(-50%, -50%);
    background: #fff;
    font-size: $font-xxs;
    line-height: 1.4;
    background-color: $bg-color;
    color: $col-key;
    .parens-account {
      margin-top: 40px;
    }
    .title {
      font-size: $font-xs;
      padding-bottom: 10px;
      border-bottom: 1px solid $col-key;
    }
    h3 {
      margin-top: 20px;
    }
    .bank {
      display: flex;
      align-items: center;
      margin-top: 10px;
      em {

      }
      span {
        display: inline-block;
        width: 45px;
        height: 22px;
        margin-left: 5px;
        position: relative;
        text-indent: -9999px;
        &:before {
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain
        }
      }
      &.ibk {
        span:before {
          background-image: url('~@/assets/images/icon-bank_ibk.png');
        }
      }
      &.sh {
        span:before {
          background-image: url('~@/assets/images/icon_bank-sh.png');
        }
      }
    }
    .acc-num {
      display: inline-block;
      margin-top: 10px;
    }
    .btn-copy {
      display: inline-block;
      margin: 10px 0 0 20px;
      padding: 0;
      color: $col-key;
      text-decoration: underline;
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
        height: 1px;
        background-color: $col-key;
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
      }
    }
  }
</style>