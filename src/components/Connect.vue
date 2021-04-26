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
      <div
        v-if="parentsPop"
        class="connect-parents"
      >
        <ul>
          <li
            v-for="(item,index) in connectParents"
            :key=item+index
            class="sides"
          >
            <em>{{ str(index) }} 측</em>
            <ul>
              <li
                v-for="(parentsItem,parentsIndex) in item.parents"
                :key=parentsIndex
                class="parts text-int"
              >
                <strong class="tt">
                  <em>{{ str(index) }} {{ parentsIndex === 0 ? '아버지' : '어머니' }}</em>
                  <span>({{ parentsItem.name }})</span>
                </strong>
                <div class="bank-info tt">
                  <p
                    class="bank"
                    :class="parentsItem.bankLogo"
                  >
                    <em>{{ parentsItem.bank }}</em>
                    <span>Logo</span>
                  </p>
                  <p class="acc-num">{{ parentsItem.accNumber }}</p>
                </div>
                <button
                  type="button"
                  class="btn-copy btn-arrow tt"
                  @click="copyAccount(parentsItem.accNumber)"
                >
                  계좌번호 복사하기
                </button>
                <a
                  :href="`tel:${parentsItem.phone}`"
                  class="tt"
                >
                  <span class="btn-arrow">전화 하기</span>
                  </a>
                <a
                  :href="`sms:${parentsItem.phone}`"
                  class="tt"
                >
                  <span class="btn-arrow">문자 하기</span>
                  </a>
              </li>
            </ul>
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
    parentsPop: {
      type: Boolean,
      default: false
    },
    isParents: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
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
    copyAccount (num) {
      let tempElem = document.createElement('textarea');

      tempElem.value = num
      document.body.appendChild(tempElem)
      tempElem.select()
      document.execCommand('copy')
      document.body.removeChild(tempElem)
      window.alert('계좌번호가 복사 되었습니다. 😁')
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
        margin-left: $left-gap;
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
      margin: 100px 0 0 #{$left-gap};
      ul {
        .sides {
          width: 80%;
          margin-top: 50px;
          font-size: $font-s;
          > em {
            display: block;
            margin-bottom: 20px;
          }
          .parts {
            margin-top: 30px;
            & + .parts {
              margin-top: 60px;
            }
            > strong {
              display: block;
              margin-bottom: 10px;
              font-size: $font-xs;
              > em {
                display: inline-block;
              }
              > span {
                display: inline-block;
                margin-left: 5px;
                font-size: $font-xxs;
              }
            }
            a {
              display: inline-block;
              width: 52%;
              margin: 12px auto 0;
              color: $col-key;
              font-size: $font-xxs;
              text-decoration: underline;
            }
            .bank-info {
              margin: 20px auto 0;
              font-size: $font-xxs;
              .bank {
                display: inline-flex;
                align-items: center;
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
                    top: -2px;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: contain
                  }
                }
                &.nh {
                  span:before {
                    background-image: url('~@/assets/images/icon_bank-nh.png');
                  }
                }
                &.sc {
                  span:before {
                    background-image: url('~@/assets/images/icon_bank-sc.png');
                  }
                }
              }
              .acc-num {
                margin-left: 10px;
                display: inline-block;
              }
            }
            .btn-copy {
              position: relative;
              display: block;
              margin: 10px 0 0 0;
              padding: 0;
              color: $col-key;
              text-decoration: underline;
            }
          }
          & + .sides {
            margin-top: 50px;
            padding-top: 50px;
            border-top: 1px solid $col-key;
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