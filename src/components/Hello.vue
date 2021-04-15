<template>
  <div class="hello">
    <div class="frames">
      <figure>
        <img :src="require(`@/assets/images/${keyVisual}.jpg`)" alt="key visual">
      </figure>
      <div class="greetings-name text-int">
        <strong class="tt">{{ groom }}</strong>
        <span class="tt">그리고</span>
        <strong class="tt">{{ bridal }}</strong>
      </div>
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
    keyVisual: {
      type: String,
      default: 'img-wed-16'
    },
    groom: String,
    bridal: String,
  },
  data: () => {
    return {
      fractions: [
        {
          shape: 'circle-small',
          color: 'orange',
          top: 7,
          right: 25
        },
        {
          shape: 'circle',
          color: 'brown',
          top: 15,
          right: 6
        },
        {
          shape: 'triangle',
          color: 'red',
          top: 13,
          left: 8
        },
        {
          shape: 'triangle',
          color: 'blue',
          top: 69,
          right: 31
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

.frames {
  display: block;
  width: 100%;
  width: calc(100% + #{$side-padding * 2});
  margin: 0 -15px 0;
  figure {
    display: block;
    position: relative;
    width: 100%;
    &:before {
      content:'';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.3;
    }
    img {
      display: block;
      width: 100%;
    }
  }
}

.greetings-name {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: $z-bg;
  margin-left: $left-gap;
  color: #fff;
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


</style>