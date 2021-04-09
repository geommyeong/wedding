<template>
  <div class="account">
    <ContentsTitle
      title="마음을 전해 볼까요"
      :description="'마음은 언제나 옳죠.\n카카오페이는 언제나 열려 있습니다.\n아, 물론 계좌번호도 있습니다.'"
    />

    <div class="account-person">
      <ul>
        <li v-for="(item, index) in accounts" :key="item+index">
          <a
            :href="`https://qr.kakaopay.com/${item.kakaoPay}`"
            target="_blank"
          >
            {{ str(index) }}에게 송금하기
          </a>
          <button
            type="button"
            @click="showAccount(item)"
          >
            혹은, {{ str(index) }}계좌번호 보기
          </button>
        </li>
      </ul>
    </div>

    <Fraction
      :fractions="fractions"
    />
  </div>
</template>
<script>
import ContentsTitle from '@/components/ContentsTitle.vue'
import Fraction from '@/components/Fraction.vue'
export default {
  name: 'Account',
  components: {
    ContentsTitle,
    Fraction
  },
  props: {
    accounts: Array
  },
  data: () => {
    return {
      fractions: [
        {
          shape: 'circle',
          color: 'brown',
          top: 150,
          left: 70
        },
        {
          shape: 'circle-small',
          color: 'orange',
          top: 150,
          left: 66
        },
        {
          shape: 'triangle',
          color: 'red',
          top: -60,
          right: 60
        },
        {
          shape: 'triangle',
          color: 'blue',
          bottom: 87,
          right: 108
        }
      ]
    }
  },
  methods: {
    str (idx) {
      if (idx === 0) {
        return '신랑'
      } else {
        return '신부'
      }
    },
    showAccount (itm) {
      console.log(itm)
    }
  }
}
</script>
<style lang="scss" scoped>
  .account {
    position: relative;
    z-index: 10;
    margin-top: #{$top-gap-2x}px;
    &-person {
      margin-top: #{$top-gap}px;
      ul {
        li {
          a {
            display: block;
            text-align: center;
            font-size: $font-s;
            color: #000;
          }
          button {
            display: block;
            margin: 10px auto 0;
            border: none;
            background-color: transparent;
            font-family: 'Noto-Serif';
            font-size: $font-xxs;
            text-decoration: underline;
          }
          & + li {
            margin-top: 60px;
          }
        }
      }
    }
    .fraction {
      z-index: -1;
    }
  }
</style>