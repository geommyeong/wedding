<template>
  <!-- <Hello /> -->
  <Greetings
    groom-father="황두영"
    groom-mother="윤현"
    bridal-father="강용강"
    bridal-mother="이미숙"
    groom="황검명"
    bridal="한나영"
    city="부산"
    wedding-hall="더리안웨딩홀"
    hall="크리스탈홀"
    :year="2021"
    :month="6"
    :date="5"
    day="토"
    :hour="14"
    :message="'서로에게 가장 좋은 친구인 두 사람이\n 이제 서로 하나가 되어\n소중한 날들을 함께 걸어가려고 합니다.\n그 약속의 자리에 귀한 걸음 하시어\n따뜻한 마음을 담아 축하해주시면\n더 없는 기쁨으로 간직하겠습니다.'"
  />
  <Connect
    :connect="[
      {
        name: '황검명',
        phone: '010-9496-7424'
      },
      {
        name: '한나영',
        phone: '010-8669-2180'
      }
    ]"
    :is-parents="true"
    :connect-parents="[
      {
        father: {
          name: '황두영',
          phone: '010-5162-7424'
        },
        mother: {
          name: '윤현',
          phone: '010-0520-2360'
        }
      },
      {
        father: {
          name: '강용강',
          phone: '010-5162-7424'
        },
        mother: {
          name: '이미숙',
          phone: '010-0520-2360'
        }
      }
    ]"
  />
  <Account
    :accounts="[
      {
        kakaoPay: '281006011000003822061763',
        bank: '기업은행',
        accountNum: '092-085908-01-015'
      },
      {
        kakaoPay: '281006011000060860445104',
        bank: '기업은행',
        accountNum: '11111111111111'
      }
    ]"
  />
</template>
<script>
import Greetings from '@/components/Greetings.vue'
import Connect from '@/components/Connect.vue'
import Account from '@/components/Account.vue'


export default {
  name: 'App',
  components: {
    Greetings,
    Connect,
    Account
  }
}
</script>
