<template>
  <div
    class="popup-photo"
  >
    <button
      class="btn-close-pop"
      type="button"
      @click="$emit('close-modal')"
    >Close</button>
    <swiper
      class="popup-photo-wrap"
      ref="popupSwiper"
      :slides-per-view="1"
      :space-between="20"
      :initial-slide="activeIndex"
      @init="thisOn()"
    >
      <!-- :on="thisOn()" -->
      <swiper-slide
        class="photo-frame"
        v-for="(item, index) in photoList"
        :key="index"
      >
        <img
          class="pop-photo"
          :src="require(`@/assets/images/${item.img}.jpg`)" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    photoList: Array,
    activeIndex: Number,
  },
  data: () => {
    return {
    }
  },
  mounted() {
    // this.$refs.popupSwiper.swiper.activeIndex
    // console.log(this.$refs.popupSwiper.swiper.activeIndex)
  },
  methods: {
    thisOn() {
    },
    closePopup () {
      this.$emit('pop-close-click')
    },
    callPhotoPop () {
      console.log('pop up')
    }
  }
}
</script>

<style lang="scss" scoped>
  .popup-photo {
    // display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: #fff;
    &.pop-open {
      display: block;
    }
  }
  .pop-photo {
    width: 100%;
  }
</style>