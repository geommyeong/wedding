<template>
  <div class="maps">
    <ContentsTitle
      title="오시는 길"
      description="<span class='tt'>부산광역시 연제구 명륜로 3</span> <span class='tt'>한양프라자</span>"
      :is-right="true"
    />
    <div class="map-wrap text-int">
      <div id="map" class="tt short"></div>
    </div>
    <ul class="way text-int">
      <li
        class="tt short"
        v-for="(item, index) in transfortation"
        :key="index"
      >
        <dl>
          <dt>{{ item.title }}</dt>
          <dd v-html="descBreak(item.desc)" />
        </dl>
      </li>
    </ul>

    <Fraction
      :fractions="fractions"
    />
  </div>
</template>
<script>
import ContentsTitle from '@/components/ContentsTitle.vue'
import Fraction from '@/components/Fraction.vue'
export default {
  name: 'Maps',
  props: {
    mapDraggable: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ContentsTitle,
    Fraction
  },
  data: () => {
    return {
      appKey: process.env.VUE_APP_API_KEY,
      map: null,
      transfortation: [
        {
          title: '지하철',
          desc: '1호선 교대역  ⑥번 출구 바로 연결'
        },
        {
          title: '버스',
          desc: '일반: 10, 29, 31, 43, 51, 52, 77,\n 100-1, 179, 189, 506\n\n 마을: 동래구 10'
        },
        {
          title: '주차',
          desc: '한양프라자 자체 주차장 만차시, \n인근 외부 주차장 (델리, 통일, 국제, 덕수)\n및 교육대학교 주차장 \n이용 가능 (2시간 무료) \n대중교통을 이용하시면 더욱 편리합니다.'
        }
      ],

      fractions: [
        {
          shape: 'circle',
          color: 'brown',
          top: -10,
          right: 26
        },
        {
          shape: 'circle-small',
          color: 'orange',
          top: -10,
          right: 29
        },
        {
          shape: 'triangle',
          color: 'red',
          bottom: 4,
          left: 5
        },
        {
          shape: 'triangle',
          color: 'blue',
          bottom: 20,
          right: -14
        }
      ]
    }
  },
  // setup() {
  //   onMounted(() => {
  //     if (window.kakao && window.kakao.maps) {
  //       this.initMap()
  //     } else {
  //       const script = document.createElement('script')
  //       script.onload = () => kakao.maps.load(this.initMap);
  //       script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${this.appKey}`
  //       document.head.appendChild(script)
  //     }
  //   })
  // },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap()
    } else {
      const script = document.createElement('script')
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${this.appKey}`
      document.head.appendChild(script)
    }

  },
  methods: {
    initMap() {
      const container = document.querySelector('#map')
      const options = {
        center: new kakao.maps.LatLng(35.19656853772262, 129.0807270648317),
        level: 3,
        draggable: this.mapDraggable
      }
      const map = new kakao.maps.Map(container, options)
      this.map = map
      this.pickMarkers(map)
      this.parkingMarkers(map)
    },

    // 마커 정보
    pickMarkers(map) {
      const markerPosition = new kakao.maps.LatLng(35.19656853772262, 129.0807270648317);
      const marker = new kakao.maps.Marker({
        position: markerPosition
      });

      marker.setMap(map)

      const iwContent = '<div style="padding: 20px; text-align:center;">' +
      ' 2021년 6월 5일 오후 2시 크리스탈홀<br>황검명❤️한나영</div>',
        iwRemoveable = true

      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable : iwRemoveable
      })

      kakao.maps.event.addListener(marker, 'click', () => {
        infowindow.open(map, marker)
      })
    },

    parkingMarkers(map) {
      const carParkPositions = [
        {
          content: '<div>델리</div>',
          latlng: new kakao.maps.LatLng(35.19641856071457, 129.07949093831164)
        },
        {
          content: '<div>통일</div>',
          latlng: new kakao.maps.LatLng(35.19636566637182, 129.07916024455582),
        },
        {
          content: '<div>국제</div>',
          latlng: new kakao.maps.LatLng(35.19627645805834, 129.07884509289644),
        },
        {
          content: '<div>삼성</div>',
          latlng: new kakao.maps.LatLng(35.196219255663614, 129.0783715742983),
        },
        {
          content: '<div>교대</div>',
          latlng: new kakao.maps.LatLng(35.195778136787546, 129.07650777989633)
        }
      ]

      const markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png';
      const imageSize = new kakao.maps.Size(22, 26)
      const imageOptions = {
        spriteOrigin: new kakao.maps.Point(10, 72),
        spriteSize: new kakao.maps.Size(36, 98)
      }
     const markerImage = new kakao.maps.MarkerImage(markerImageSrc, imageSize, imageOptions)

     carParkPositions.forEach( pos => {
       var marker = new kakao.maps.Marker({
         map: map,
         position: pos.latlng,
         image: markerImage
       })
     })

    },
    descBreak (desc) {
      return desc.split('\n').join('<br />')
    }
  }
}
</script>
<style lang="scss">
.maps {
  position: relative;
  margin-top: #{$top-gap-2x}px;
  color: $col-key;
}
.map-wrap {
  position: relative;
  margin: 0 -#{$side-padding};
  z-index: $z-bg;
}
#map {
  left: #{-$side-padding};
  width: calc(100% + #{$side-padding * 2});
  height: 400px;
  background-color: pink;
}
.way {
  margin: 32px 0 0 20px;
  > li {
    margin-top: 22px;
    font-size: $font-xxs;
    line-height: 1.6;
    dl {
      display: flex;
      dt {
        width: 75rem;
      }
      dd {
        width: calc(100% - 75rem);
      }
    }
  }
}
</style>