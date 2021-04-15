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
      :pagination="myPagination"
    >

      <swiper-slide
        class="photo-frame"
        v-for="(item, index) in photoList"
        :key="index"
      >
        <button
          type="button"
          class="btn-call-pop"
          @click="$emit('open-modal', index)"
        >
          <div class="photo">
            <img :src="require(`@/assets/images/${item.img}.jpg`)" alt="">
          </div>
        </button>

      </swiper-slide>
      <!-- <div class="swiper-pagination">1</div> -->
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
      myPagination: {
        el: '.swiper-pagination'
      },
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
  }
}
</script>

<style lang="scss" scoped>
  .photos {
    position: relative;
    margin-top: #{$top-gap-2x}px;
    color: $col-key;
  }
  .photo-wrap {
    margin: 30px -15px 0;
    padding-left: 40px;
    // height: 500px;

    .photo-frame {
      width: 68%;
      .btn-call-pop {
        padding: 0;
      }
      .photo {
        img {
          width: 100%;
        }
      }
    }
  }
</style>