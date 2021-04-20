<template>
  <div class="greetings" ref="greeting">
    <ContentsTitle
      title="초대합니다."
      :description="message"
    />
    <div
      class="info"
    >
      <p class="info-date text-int" v-html="dday(year, month, date, day, hour)" />
      <div class="info-place text-int">
        <p class="tt">{{ city }}</p>
        <p class="tt">{{ weddingHall }}</p>
        <p class="tt">{{ hall }}</p>
      </div>
    </div>

    <div class="parents">
      <p class="text-int">
        <strong class="parents-name tt">{{ groomFather }}</strong>
        <strong class="parents-name tt">{{ groomMother }}</strong>
        <em class="tt">의 장남</em>
        <strong class="tt">{{ groom }}</strong>
      </p>

      <p class="text-int">
        <strong class="parents-name tt">{{ bridalFather }}</strong>
        <strong class="parents-name tt">{{ bridalMother }}</strong>
        <em class="tt">의 장녀</em>
        <strong class="tt">{{ bridal }}</strong>
      </p>
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
  name: 'Greetings',
  components: {
    ContentsTitle,
    Fraction
  },
  props: {
    groomFather: String,
    groomMother: String,
    bridalFather: String,
    bridalMother: String,
    groom: String,
    bridal: String,
    year:  Number,
    month: Number,
    date: Number,
    day: String,
    hour: Number,
    city: String,
    weddingHall: String,
    hall: String,
    message: String
  },
  data: () => {
    return {
      fractions: [
        {
          shape: 'circle-small',
          color: 'orange',
          top: -6,
          right: 41
        },
        {
          shape: 'circle',
          color: 'brown',
          top: -7.2,
          right: 37
        },
        {
          shape: 'triangle',
          color: 'red',
          top: 63,
          left: 80
        },
        {
          shape: 'triangle',
          color: 'blue',
          top: 28,
          right: 88
        }
      ]
    }
  },
  // mounted () {
  //   window.addEventListener('scroll', this.scrollEvt)
  // },
  // unmounted() {
  //   window.removeEventListener('scroll', this.scrollEvt)
  // },
  methods: {
    // scrollEvt (e) {
    //   let targetTop = this.$refs.greeting.getBoundingClientRect().y
    //   let sectionEnd = targetTop + this.$refs.greeting.offsetHeight

    //   // Array.prototype.slice.call(document.querySelectorAll('.text-int')).forEach( item => {
    //   //   console.log(item, item.getBoundingClientRect().y)
    //   // })

    //   // if(window.innerHeight * 0.6 > targetTop) this.isTitleHello = true
    //   // if(window.innerHeight * 0.2 > targetTop) this.isDescHello = true
    //   if (sectionEnd <= 0) window.removeEventListener('scroll', this.scrollEvt)
    //   // console.log(targetTop, window.innerHeight * 0.6, sectionEnd)
    // },
    // scrollEvt (e) {
    //   let targetTop = this.$refs.greeting.getBoundingClientRect().y
    //   let sectionEnd = targetTop + this.$refs.greeting.offsetHeight

    //   if(window.innerHeight * 0.6 > targetTop) this.isTitleHello = true
    //   if(window.innerHeight * 0.2 > targetTop) this.isDescHello = true
    //   if (sectionEnd <= 0) window.removeEventListener('scroll', this.scrollEvt)
    //   console.log(targetTop, window.innerHeight * 0.6, sectionEnd)
    // },
    dday (year, month, date, day, hour) {
      if (hour > 12) hour = `오후 ${hour - 12}`
      return `<span class="tt">${year}년 ${month}월 ${date}일 (${day})</span> <span class="tt"> ${hour}시</span>`
    },
    // messageBreak (msg) {
      // return msg.split('\n').join('<br />')
      // let aaa = 
      // return msg.split('\n').join('<br />')
    // }
  }
}
</script>
<style lang="scss" scoped>
  .greetings {
    position: relative;
    color: $col-key;
    // padding-top: 260px;
  }

  .message {
    display: block;
    position: relative;
    z-index: $z-bg;
    margin: 0 0 0 $left-gap;
    justify-content: flex-end;
    font-size: $font-xs;
    line-height: 1.6;
  }

  .info {
    position: relative;
    z-index: $z-bg;
    margin: #{$top-gap}px 0 0 $left-gap;
    font-size: $font-s;
    line-height: 1.6;
    &-place {
      margin-top: 20px;
      line-height: 1.4;
      font-size: $font-s;
    }
  }

  .parents {
    position: relative;
    z-index: $z-bg;
    margin: #{$top-gap}px 0 0 $left-gap;
    > p {
      .parents-name {
        display: inline-block;
        font-size: $font-xs;
        & + .parents-name {
          position: relative;
          margin-left: 30rem;
          &::before {
            content: '';
            position: absolute;
            top: 10rem;
            left: -16rem;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: $col-key;
          }
        }
      }
      > em {
        display: inline-block;
        margin-left: 5px;
        font-size: $font-xxs;
        & + strong {
          display: block;
          margin-top: 10px;
          font-size: $font-xs;
          font-weight: bold;
        }
      }
      & + p {
        margin-top: 40px;
      }
    }
  }
</style>