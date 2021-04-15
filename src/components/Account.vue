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
            <em :class="index !== 1 ? 'col-gr' : 'col-br'">{{ str(index) }}</em>에게 송금하기
          </a>
          <button
            type="button"
            @click="showAccount(item)"
          >
            혹은, {{ str(index) }}계좌번호 보기
          </button>

          <div
            v-if="isAccPopOpen"
            class="accout-pop"
          >
            {{ str(index) }}!!!
          </div>
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
      isAccPopOpen: false,
      fractions: [
        {
          shape: 'circle',
          color: 'brown',
          top: 76,
          left: 4
        },
        {
          shape: 'circle-small',
          color: 'orange',
          top: 75,
          left: 6
        },
        {
          shape: 'triangle',
          color: 'red',
          top: 28,
          right: 13
        },
        {
          shape: 'triangle',
          color: 'blue',
          bottom: 28,
          right: -23
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
      isAccPopOpen = true
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
    color: $col-key;
    &-person {
      margin-top: #{$top-gap}px;
      ul {
        li {
          a {
            display: block;
            text-align: center;
            font-size: $font-s;
            color: $col-key;
          }
          button {
            display: block;
            margin: 10px auto 0;
            border: none;
            background-color: transparent;
            font-family: 'Noto-Serif';
            font-size: $font-xxs;
            text-decoration: underline;
            color: $col-key;
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