<template>
  <div class="greetings">
    <div class="greetings-name">
      <strong>{{ groom }}</strong>
      <span>그리고</span>
      <strong>{{ bridal }}</strong>
    </div>

    <p class="message" v-html="messageBreak(message)" />

    <div class="info">
      <p class="info-date">{{ dday(year, month, date, day, hour) }}</p>
      <div class="info-place">
        <p>{{ city }}</p>
        <p>{{ weddingHall }}</p>
        <p>{{ hall }}</p>
      </div>
    </div>

    <div class="parents">
      <p>
        <strong>{{ groomFather }}</strong>
        <strong>{{ groomMother }}</strong>
        <em>의 장남</em>
        <strong>{{ groom }}</strong>
      </p>

      <p>
        <strong>{{ bridalFather }}</strong>
        <strong>{{ bridalMother }}</strong>
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
import Fraction from '@/components/Fraction.vue'

export default {
  name: 'Greetings',
  components: {
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
  methods: {
    dday (year, month, date, day, hour) {
      if (hour > 12) hour = `오후 ${hour - 12}`
      return `${year}년 ${month}월 ${date}일 (${day}) ${hour}시`
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
    &-name {
      margin-left: $left-gap;
      > strong {
        display: block;
        margin-top: 15px;
        font-size: $font-lar;
      }
      > span {
        display: block;
        margin-top: 15px;
        font-size: $font-s;
      }
    }
  }

  .message {
    display: flex;
    margin: #{$top-gap-2x}px 0 0 $left-gap;
    justify-content: flex-end;
    font-size: $font-xs;
    line-height: 1.6;
  }

  .info {
    font-size: $font-xs;
    margin: #{$top-gap}px 0 0 $left-gap-center;
    &-place {
      margin-top: 20px;
      line-height: 1.4;
      font-size: $font-s;
    }
  }

  .parents {
    margin: #{$top-gap-2x}px 0 0 $left-gap-center;
    > p {
      > strong {
        display: block;
        margin-top: 10px;
        font-size: $font-mid;
      }
      > em {
        display: block;
        margin-top: 15px;
        font-size: $font-xs;
        & + strong {
          margin-top: 40px;
          font-size: $font-mid-lar;
        }
      }
      & + p {
        margin-top: #{$top-gap}px;
      }
    }
  }
</style>