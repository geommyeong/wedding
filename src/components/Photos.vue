<template>
  <div class="photos">
    <ContentsTitle
      title="우리의 순간"
      :description="'스와이프 또는 \n 터치하여 \n이미지를 확대 해보세요.'"
    />
    <swiper
      class="photo-wrap"
      ref="mySwiper"
      :slides-per-view="'auto'"
      :space-between="20"
    >

      <swiper-slide
        class="photo-frame"
        v-for="(item, index) in photoList"
        :key="index"
      >
        {{ `slide${index}` }}{{ item.id }}
        <button
          type="button"
          @click="$emit('open-modal', index)"
        >
          <div class="photo">
            <img :src="require(`@/assets/images/${item.img}.jpg`)" alt="">
          </div>
        </button>

      </swiper-slide>
    </swiper>

    <Fraction
      :fractions="fractions"
    />
  </div>
</template>
<script>
import ContentsTitle from '@/components/ContentsTitle.vue'
import Fraction from '@/components/Fraction.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss';

export default {
  components: {
    Swiper,
    SwiperSlide,
    ContentsTitle,
    Fraction
  },
  props: {
    photoList: Array
  },
  data: () => {
    return {
      fractions: [
        {
          shape: 'triangle',
          color: 'blue',
          top: 230,
          left: -10
        },
        {
          shape: 'triangle',
          color: 'red',
          top: -47,
          right: 61
        }
      ]
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    }
    // callPhotoPop() {
    //   this.isPopupCalled = true
    //   console.log('pop up')
    // },
    // aaa() {
    //   console.log('aaa')
    // }
  }
}
</script>

<style lang="scss" scoped>
  .photos {
    position: relative;
    margin-top: #{$top-gap-2x}px;
  }
  .photo-wrap {
    margin: 30px -15px 0;
    padding-left: 40px;
    height: 500px;

    .photo-frame {
      width: 68%;
      .photo {
        img {
          width: 100%;
        }
      }
    }
  }
</style>