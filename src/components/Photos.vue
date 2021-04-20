<template>
  <div class="photos" ref="photo">
    <ContentsTitle
      title="우리의 순간"
      description="<span class='tt'>스와이프 또는</span> <span class='tt'>터치하여</span><span class='tt'>이미지를 확대 해보세요.</span>"
    />

    <div class="swiper-wps text-int">
      <swiper
        class="photo-wrap tt short"
        ref="mySwiper"
        :slides-per-view="'auto'"
        :space-between="20"
        :pagination="{el: '.swiper-pagination', type: 'fraction'}"
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
        <div class="swiper-pagination paginations" />
      </swiper>
    </div>

    <Fraction
      :fractions="fractions"
    />
  </div>
</template>
<script>
import ContentsTitle from '@/components/ContentsTitle.vue'
import Fraction from '@/components/Fraction.vue'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination]);

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
      isSectionPassed: false,
      fractions: [
        {
          shape: 'triangle',
          color: 'blue',
          top: 106,
          left: 10
        },
        {
          shape: 'triangle',
          color: 'red',
          top: -12,
          right: 18
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .photos {
    position: relative;
    margin-top: #{$top-gap-2x}px;
    color: $col-key;
  }
  .swiper-wps {
    margin: 0 -15px 0;
  }
  .photo-wrap {
    position: relative;
    margin: 30px -15px 0;
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 30px;

    .photo-frame {
      width: 85%;
      .btn-call-pop {
        padding: 0;
      }
      .photo {
        img {
          width: 100%;
        }
      }
    }
    .paginations {
      position: absolute;
      top: 0;
      right: 30px;
      font-size: $font-xs;
    }
  }
</style>