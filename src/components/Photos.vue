<template>
  <div class="photos">
    <h3>사진첩</h3>
    <swiper
      class="photo-wrap"
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="(item, index) in items"
        :key="item.id"
      >
        {{ `slide${index}` }}{{ item.id }}
        <div class="photo">
          <img :src="require(`@/assets/images/${item.img}.jpg`)" alt="">
        </div>

      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'swiper/vue'
import 'swiper/swiper.scss';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => {
    return {
      swiperOptions: {

      },
      items: [
        {
          id: '하하하하',
          img: '@temp-img'
        },
        {
          id: '하하하하',
          img: '@temp-img'
        },
        {
          id: '하하하하',
          img: '@temp-img'
        },
        {
          id: '하하하하',
          img: '@temp-img'
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
    },
  }
}
</script>

<style lang="scss" scoped>
  .photo-wrap {
    width: 700px;
    height: 500px;
  }
</style>