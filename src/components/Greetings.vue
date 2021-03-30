<template>
  <div class="greetings">
    <p>{{ `${year}. ${month}. ${date}` }}</p>
    <h1>황검명 한나영</h1>
    <div class="invite">
      <h2>결혼식에 초대합니다.💍</h2>
      <p>{{ `${year}년 ${month}월 ${date}일 (${day}) 오후 2시`}}</p>
      <p>더리안웨딩홀 크리스탈홀</p>
    </div>
    <p class="message">
      {{ message }}
    </p>

    <div class="info">
      <p>두영 &#183; 현 <em>의 장남</em> 검명</p>
      <p>용강 &#183; 미숙 <em>의 장녀</em> 나영</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Greetings',
  props: {
  },
  data: () => {
    return {
      year: '2021',
      month: '6',
      date: '5',
      day: '토',
      message: '서로에게 가장 좋은 친구인 두 사람이\n 이제 서로 하나가 되어\n소중한 날들을 함께 걸어가려고 합니다.\n그 약속의 자리에 귀한 걸음 하시어\n따뜻한 마음을 담아 축하해주시면\n더 없는 기쁨으로 간직하겠습니다.'
    }
  }
}
</script>
<style lang="scss">
  
</style>