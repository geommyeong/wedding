<template>
  <div class="popup-photo">
    <div class="wrap">
      <button
        class="btn-close-pop"
        type="button"
        @click="$emit('close-modal')"
      >Close</button>
      <swiper
        class="popup-photo-swiper"
        ref="popupSwiper"
        :slides-per-view="1"
        :space-between="20"
        :initial-slide="activeIndex"
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
  methods: {
    callPhotoPop () {
      console.log('pop up')
    }
  }
}
</script>

<style lang="scss" scoped>
  .popup-photo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: #000;
    .wrap {
      position: relative;
      .btn-close-pop {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 20px;
        height: 20px;
        z-index: 10;
        // background: red url('/assets/images/btn_pop_close') no-repeat center / cover;
        text-indent: -9999px;
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 1px;
          background-color: #fff;
        }
      }
      // .popup-photo-swiper {
      //   position: absolute;
      //   top: 50%;
      //   left: 50%;
      //   transform: translate(-50%, -50%);
      // //   position: relative;
      // //   width: 100%;
      // //   height: 100vh;
      // //   .photo-frame {
      // //     position: absolute;
      // //     top: 50%;
      // //     left: 50%;
      // //     transform: translate(-50%, -50%);
      // //   }
      // }
    }
  }
  .pop-photo {
    width: 100%;
  }
</style>