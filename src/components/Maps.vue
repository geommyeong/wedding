<template>
  <div class="maps">
    <h3>오시는 길</h3>
    <div id="map" style="width:500px;height:400px;background-color: pink;"></div>
    <ul>
      <li><span>지하철</span><p>1호선 교대역  ⑥번 출구 바로 연결</p></li>
      <li><span>버스</span><p>일반: 10, 29, 31, 43, 51, 52, 77, 100-1, 179, 189, 506
        <br>마을: 동래구 10
        </p></li>
      <li><span>자가용</span><p>부산광역시 연제구 거제 1동 129-5번지 (명륜로 3) 한양프라자</p></li>
      <li><span>주차 안내</span><p>한양프라자 자체 주차장 만차시, 인근 외부 주차장 및 교육대학교 주차장 이용 가능 (2시간 무료) <br>대중교통을 이용하시면 더욱 편리합니다.</p></li>
    </ul>
  </div>
</template>
<script>
export default {
  // data: () => {
  // },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap()
    } else {
      const script = document.createElement('script')
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_API_KEY}`
      document.head.appendChild(script)
    }
  },
  methods: {
    initMap () {
      const container = document.querySelector('#map')
      const options = {
        center: new kakao.maps.LatLng(35.19656853772262, 129.0807270648317),
        level: 3
      }
      const map = new kakao.maps.Map(container, options)
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

    //   const carParkPositions = [
    //     new kakao.maps.LatLng(35.19641856071457, 129.07949093831164), //델리
    //     new kakao.maps.LatLng(35.19636566637182, 129.07916024455582), //통일
    //     new kakao.maps.LatLng(35.19627645805834, 129.07884509289644), //국제
    //     new kakao.maps.LatLng(35.196219255663614, 129.0783715742983), //삼성
    //     new kakao.maps.LatLng(35.195778136787546, 129.07650777989633) //교대
    //   ]

    //   const markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png';
    //   const imageSize = new kakao.maps.Size(22, 26)
    //   const imageOptions = {
    //     spriteOrigin: new kakao.maps.Point(10, 72),
    //     spriteSize: new kakao.maps.Size(36, 98)
    //   }
    //  const markerImage = new kakao.maps.MarkerImage(markerImageSrc, imageSize, imageOptions)

    //  carParkPositions.forEach( pos => {
    //    var marker = new kakao.maps.Marker({  // eslint-disable-line no-unused-vars
    //      map: map,
    //      position: pos.latlng,
    //      image: markerImage
    //    })
    //  })


    },
    parkingMarkers() {

    }
  }
}
</script>