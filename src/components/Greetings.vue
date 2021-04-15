<template>
  <div class="greetings">
    <div class="greetings-name text-int">
      <strong class="tt">{{ groom }}</strong>
      <span class="tt">그리고</span>
      <strong class="tt">{{ bridal }}</strong>
    </div>

    <ContentsTitle
      title="초대합니다."
      :is-right="true"
    />

    <p class="message text-int" v-html="messageBreak(message)" />

    <div class="info text-int">
      <p class="info-date" v-html="dday(year, month, date, day, hour)" />
      <div class="info-place">
        <p>{{ city }}</p>
        <p>{{ weddingHall }}</p>
        <p>{{ hall }}</p>
      </div>
    </div>

    <div class="parents">
      <p>
        <strong class="parents-name">{{ groomFather }}</strong>
        <strong class="parents-name">{{ groomMother }}</strong>
        <em>의 장남</em>
        <strong>{{ groom }}</strong>
      </p>

      <p>
        <strong class="parents-name">{{ bridalFather }}</strong>
        <strong class="parents-name">{{ bridalMother }}</strong>
        <em>의 장녀</em>
        <strong>{{ bridal }}</strong>
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
          top: -126,
          right: 150
        },
        {
          shape: 'circle',
          color: 'brown',
          top: -150,
          right: 140
        },
        {
          shape: 'triangle',
          color: 'red',
          top: 207,
          left: 58
        },
        {
          shape: 'triangle',
          color: 'blue',
          top: 587,
          right: 108
        }
      ]
    }
  },
  mounted () {
    setTimeout( () => {
      [...document.querySelectorAll('.text-int')].forEach(item => {
        item.classList.add('hello')
      })
    }, 100)
  },
  methods: {
    dday (year, month, date, day, hour) {
      if (hour > 12) hour = `오후 ${hour - 12}`
      return `${year}년 ${month}월 ${date}일 (${day}) <br /> ${hour}시`
    },
    messageBreak (msg) {
      return msg.split('\n').join('<br />')
    }
  }
}
</script>
<style lang="scss" scoped>
  .greetings {
    position: relative;
    margin-top: #{$top-gap-3x}px;
    color: $col-key;
    &-name {
      position: relative;
      z-index: $z-bg;
      margin-left: $left-gap;
      > strong {
        display: block;
        margin-top: 25px;
        font-size: $font-lar;
      }
      > span {
        display: block;
        margin-top: 25px;
        font-size: $font-s;
      }
    }
  }

  .message {
    display: flex;
    position: relative;
    z-index: $z-bg;
    margin: 0 0 0 $left-gap;
    justify-content: flex-end;
    font-size: $font-xs;
    line-height: 1.6;
    text-align: right;
  }

  .info {
    position: relative;
    z-index: $z-bg;
    margin: #{$top-gap}px 0 0 $left-gap-center;
    font-size: $font-s;
    &-place {
      margin-top: 20px;
      line-height: 1.4;
      font-size: $font-s;
    }
  }

  .parents {
    position: relative;
    z-index: $z-bg;
    margin: #{$top-gap-2x}px 0 0 $left-gap-center;
    > p {
      .parents-name {
        display: inline-block;
        font-size: $font-s;
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
        display: block;
        margin-top: 15px;
        font-size: $font-xs;
        & + strong {
          display: block;
          margin-top: 40px;
          font-size: $font-mid-lar;
        }
      }
      & + p {
        margin-top: #{$top-gap}px;
      }
    }
  }

  .contents-title {
    margin-top: #{$top-gap-2x}px;
  }
</style>