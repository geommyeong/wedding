<template>
  <div class="visitor">
    <p>댓글란</p>
    <div class="log-in">
      <h4>아이디</h4>
      <input v-model="email" type="text" />

      <h4>패스워드</h4>
      <input v-model="password" type="password" />

      <button
        type="button"
        @click="SignUp()"
      >가입하기</button>

      <div>
        <h4>이름</h4>
        <input v-model="name" type="text" />

        <h4>비밀번호</h4>
        <input v-model="mypassword" type="password" name="mypassword" id="mypassword" />

        <h4>텍스트 필드</h4>
        <textarea v-model="mytextarea" name="mytextarea" id="mytextarea" cols="30" rows="10" />

        <button
          type="button"
          @click="submit()"
        >
          등록하기
        </button>


      </div>
    </div>

    이름 / validation 필요
    비밀번호 / validation 필요 숫자만 가능
    텍스트 에어리어 + 등록 버튼


    댓글 리스트 -> 작성 시간 , 삭제 버튼

    -> 삭제버튼 클릭시 비밀번호 input 생성
    비밀번호 input === 비밀번호 비교
    ? 삭제 되었습니다.
    : 비밀번호가 다릅니다.

    <!-- <div id="disqus_thread"></div> -->
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  data: () => {
    return {
      email: '',
      password: '',
      name: '',
      mypassword: '',
      mytextarea: ''
    }
  },
  methods: {
    SignUp() {
      console.log('sign up')
      console.log('email:', this.email)
      console.log('password:', this.password)
    

      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
        })
        .catch((error) => {
          console.error(error)
        })
    },

    submit() {
      console.log(this.name, this.mypassword, this.mytextarea)
    }
  },
  mounted() {
    console.log(this.firebase)
  }
  // created () {
  //   var disqus_config = function () {
  //   this.page.url = 'https://geommyeong.github.io/wedding';
  //   this.page.identifier = 'https://geommyeong.github.io/wedding';
  //   };

  //   (function() { // DON'T EDIT BELOW THIS LINE
  //   var d = document, s = d.createElement('script');
  //   s.src = 'https://weddingcard-1.disqus.com/embed.js';
  //   s.setAttribute('data-timestamp', +new Date());
  //   (d.head || d.body).appendChild(s);
  //   })();
  // }
}
</script>
<style lang="scss">

</style>
<style lang="scss" scoped>
  
</style>