<template>
  <div class="hello">
    <div class="title">
      <div class="letter-wrap text-int">
        <!-- w주석 -->
        <h1 class="tt">초대합니다</h1>
        <p class="tt">6월5일</p>
        <span class="tt">더리안 웨딩홀</span>
      </div>
      <span class="letter-bg">Wedding</span>
    </div>
    <div class="frames">
      <div class="frame-fracture">
        <span class="save">Save</span>
        <span class="our">
          <span class="our-bg">our</span>
        </span>
        <span class="date">Date</span>
      </div>
      <figure>
        <img src="@/assets/images/img-wed-16.jpg" alt="">
      </figure>
    </div>
    <Fraction
      :fractions="fractions"
    />

  </div>
</template>
<script>
import Fraction from '@/components/Fraction.vue'
export default {
  name: 'Hello',
  components: {
    Fraction
  },
  props: {
    groomFather: String,
    groomMother: String,
    bridalFather: String,
    bridalMother: String,
    groom: String,
    bridal: String
  },
  data: () => {
    return {
      fractions: [
        {
          shape: 'circle-small',
          color: 'orange',
          top: 77,
          right: 77
        },
        {
          shape: 'circle',
          color: 'brown',
          top: 91,
          right: 65
        },
        {
          shape: 'triangle',
          color: 'red',
          top: 147,
          left: 43
        },
        {
          shape: 'triangle',
          color: 'blue',
          top: 427,
          right: 108
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.hello {
  position: relative;
  color: $col-key;
}
.title {
  position: relative;
  height: 80vh;
  .letter-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 10;
    h1 {
      font-size: $font-lar;
    }
    p {
      margin-top: 25rem;
      font-size: $font-mid;
    }
    span {
      display: block;
      margin-top: 25rem;
      font-size: $font-xs;
    }
  }
  .letter-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-8deg);
    font-size: $font-max;
    opacity: 0.2;
    color: #FFC08F;
  }
}

.frames {
  position: relative;
  display: flex;
  width: 92.30%;
  margin: 20vh -15px 0 auto;
  .frame-fracture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: $col-key;
    > span {
      position: absolute;
      top: 0;
      left: 0;
      font-size: $font-fracture;
    }
    .save {
      left: 15px;
      top: -20px;
    }
    .our {
      top: 50%;
      left: 50%;
      width: 100px;
      transform: translate(-50%, -50%);
      text-indent: -9999px;
      .our-bg {
        display: block;
        position: relative;
        background: url('~@/assets/images/icon-our.png') no-repeat center / cover;
      }
    }
    .date {
      top: auto;
      right: 15px;
      bottom: -20px;
      left: auto;
    }
  }
  figure {
    width: 100%;
    img {
      width: 100%;
    }
  }
}


</style>