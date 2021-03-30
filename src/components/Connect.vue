<template>
  <div>
    <a :href="`tel:${groom.phone}`">🤵🏻📱 신랑에게 연락하기 (전화)</a><br>
    <a :href="`sms:${groom.phone}`">🤵🏻 ✉️ 신랑에게 연락하기 (문자)</a><br>
    <a :href="`tel:${bridal.phone}`">👰🏻‍♀️📱 신부에게 연락하기 (전화)</a><br>
    <a :href="`sms:${bridal.phone}`">👰🏻‍♀️ ✉️ 신부에게 연락하기 (문자)</a><br>
    <br>
    <a :href="`https://qr.kakaopay.com/${groom.account}`">🤵🏻 신랑에게 송금하기</a><br>
    <a :href="`https://qr.kakaopay.com/${bridal.account}`">👰🏻‍♀️ 신부에게 송금하기</a>
  </div>
</template>
<script>
export default {
  name: 'Connect',
  props: {
  },
  data: () => {
    return {
      bridal: {
        phone: '010-8669-2180',
        account: '281006011000060860445104'
      },
      groom: {
        phone: '010-9496-7424',
        account: '281006011000003822061763'
      }
    }
  }
}
</script>
<style lang="scss">
  
</style>