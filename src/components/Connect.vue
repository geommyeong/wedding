<template>
  <div class="connect">
    <Fraction
      :fractions="fractions"
    />

    <ContentsTitle
      title="연락하기"
      description="<span class='tt'>전화나 문자</span><span class='tt'>모두 가능합니다.</span>"
    />
    <div class="connect-person">
      <ul>
        <li
          class="text-int"
          v-for="(item, index) in connect"
          :key="index"
        >
          <p class="tt">
            <em>{{ str(index) }}</em>
            <strong>{{ item.name }}</strong>
          </p>
          <a :href="`tel:${item.phone}`" class="tt">전화 하기</a>
          <a :href="`sms:${item.phone}`" class="tt">문자 하기</a>
        </li>
      </ul>
    </div>

    <!-- parents -->
    <div
      v-if="isParents"
      :class="[
        'connect-to-parents',
        {'is-open' : parentsPop}
      ]"
    >
      <div class="text-int">
        <button
          class="btn-parents tt"
          type=" button"
          @click="toggleParents()"
        >
          혼주에게 연락하기
        </button>
      </div>
      <div
        v-if="parentsPop"
        class="connect-parents"
      >
        <ul>
          <li v-for="(item,index) in connectParents" :key=item+index>
            <em>{{ str(index) }}측</em>
            <div class="parts">
              <strong>{{ str(index) }} 아버지 ({{ item.father.name }})</strong>
              <a :href="`tel:${item.father.phone}`">전화 하기</a>
              <a :href="`sms:${item.father.phone}`">문자 하기</a>
            </div>
            <div class="parts">
              <strong>{{ str(index) }} 어머니 ({{ item.mother.name }})</strong>
              <a :href="`tel:${item.mother.phone}`">전화 하기</a>
              <a :href="`sms:${item.mother.phone}`">문자 하기</a>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
import ContentsTitle from '@/components/ContentsTitle.vue'
import Fraction from '@/components/Fraction.vue'
export default {
  name: 'Connect',
  components: {
    ContentsTitle,
    Fraction
  },
  props: {
    connect: Array,
    connectParents: Array,
    isParents: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      parentsPop: false,
      fractions: [
        {
          shape: 'circle-small',
          color: 'orange',
          top: 11,
          right: 17
        },
        {
          shape: 'circle',
          color: 'brown',
          top: 14,
          right: 13
        },
        {
          shape: 'triangle',
          color: 'red',
          top: -105,
          left: 86
        },
        {
          shape: 'triangle',
          color: 'blue',
          top: -71,
          right: 80
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
    toggleParents () {
      this.parentsPop = !this.parentsPop
    }
  }
}
</script>
<style lang="scss" scoped>
  .connect {
    position: relative;
    margin-top: #{$top-gap-2x}px;
    color: $col-key;
  }
  .connect-person {
    position: relative;
    z-index: 10;
    margin-top: #{$top-gap-h}px;
    ul {
      li {
        text-align: center;
        font-size: $font-xs;
        strong {
          margin-left: 10px;
        }
        a {
          display: inline-block;
          width: 52%;
          margin: 10px auto 0;
          color: $col-key;
          font-size: $font-xxs;
          text-decoration: underline;
          & + a {
            margin-top: 10px;
          }
        }
        & + li {
          margin-top: 40px;
        }
      }
    }
  }
  .connect-to-parents {
    position: relative;
    z-index: 10;
    margin-top: #{$top-gap-h}px;
    color: $col-key;
    .btn-parents {
      position: relative;
      display: block;
      margin: 0 auto;
      text-decoration: underline;
      font-size: $font-xs;
      color: $col-key;
      &:before {
        content: '';
        position: absolute;
        top: 8px;
        right: -18px;
        width: 0px;height: 0px;
        border-top: 7px solid none;
        border-bottom: 7px solid $col-key;
        border-right: 7px solid transparent;
        border-left: 7px solid  transparent;
        transform: rotate(-180deg);
      }
    }
    .connect-parents {
      margin-top: 50px;
      ul {
        li {
          margin-top: 50px;
          text-align: center;
          font-size: $font-s;
          > em {
            display: block;
            margin-bottom: 20px;
            text-align: center;
          }
          .parts {
            margin-top: 30px;
            & + .parts {
              margin-top: 25px;
            }
            > strong {
              display: block;
              margin-bottom: 20px;
              font-size: $font-xs;
            }
            a {
              display: inline-block;
              width: 52%;
              margin: 10px auto 0;
              color: $col-key;
              font-size: $font-xxs;
              text-decoration: underline;
            }
          }
          & + li {
            margin-top: 100px;
          }
        }
      }
    }
    &.is-open {
      .btn-parents {
        &:before {
          transform: rotate(0);
        }
      }
    }
  }
</style>