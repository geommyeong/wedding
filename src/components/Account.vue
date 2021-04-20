<template>
  <div class="account">
    <ContentsTitle
      title="마음 전하기"
    />
      <!-- description="<span class='tt inline'>카카오페이</span><span class='tt inline'>는 언제나 열려 있습니다.</span><span class='tt'>아, 물론 계좌번호도 있습니다.</span>" -->

    <div class="account-person">
      <ul>
        <li
          class="text-int"
          v-for="(item, index) in accounts" :key="item+index"
        >
          <a
            :href="`https://qr.kakaopay.com/${item.kakaoPay}`"
            target="_blank"
            class="tt"
          >
            <span class="send"><em :class="index !== 1 ? 'col-gr' : 'col-br'">{{ str(index) }}</em>에게 송금하기</span>
            (<span class="kakaopay">KakaoPay</span>)
          </a>
          <span class="tt">혹은, </span>
          <button
            type="button"
            class="tt"
            @click="$emit('open-popup', item, index)"
          >
            {{ str(index) }}{{ isParentsVer ? '측' : '' }} 계좌번호 보기
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
    accounts: Array,
    isParentsVer: {
      type: Boolean,
      default: false
    }
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
    }
  }
}
</script>
<style lang="scss" scoped>
  .account {
    position: relative;
    z-index: 10;
    margin-top: #{$top-gap}px;
    color: $col-key;
    &-person {
      margin-top: #{$top-gap}px;
      ul {
        li {
          a {
            display: block;
            text-align: center;
            font-size: $font-xs;
            color: $col-key;
            text-decoration: none;
            .send {
              text-decoration: underline;
            }
            .kakaopay {
              display: inline-block;
              vertical-align: top;
              width: 50px;
              height: 40px;
              background: url('~@/assets/images/icon-kakaopay.png') no-repeat 0 5px / contain;
              text-indent: -9999px;
            }
          }
          > span {
            display: block;
            margin: 10px auto 0;
            font-size: $font-xxs;
            line-height: 1.4;
            text-align: center;
          }
          button {
            display: block;
            margin: 5px auto 0;
            border: none;
            background-color: transparent;
            font-family: 'Noto-Serif';
            font-size: $font-xxs;
            line-height: 1.4;
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