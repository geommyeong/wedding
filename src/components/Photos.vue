<template>
  <div class="photos">
    <h3>사진첩</h3>
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="(item, index) in items"
        :key="item.id"
      >
        {{ `slide${index}` }}{{ item.id }}

      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'swiper/vue'
// import 'swiper/css/swiper.css'


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
          id: '하하하하'
        },
        {
          id: '하하하하'
        },
        {
          id: '하하하하'
        },
        {
          id: '하하하하'
        }
      ]
      // transfortation: [
      //   {
      //     title: '지하철',
      //     desc: '1호선 교대역  ⑥번 출구 바로 연결'
      //   },
      //   {
      //     title: '버스',
      //     desc: '일반: 10, 29, 31, 43, 51, 52, 77, 100-1, 179, 189, 506\n 마을: 동래구 10'
      //   },
      //   {
      //     title: '자가용',
      //     desc: '부산광역시 연제구 거제 1동 129-5번지 (명륜로 3) 한양프라자'
      //   },
      //   {
      //     title: '주차 안내',
      //     desc: '한양프라자 자체 주차장 만차시, 인근 외부 주차장 및 교육대학교 주차장 이용 가능 (2시간 무료) \n 대중교통을 이용하시면 더욱 편리합니다.'
      //   }
      // ]
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
  // created () {
    
  // }
}
</script>

<style lang="scss" scoped>
  // @import 'swiper/css/swiper.css'
  
</style>