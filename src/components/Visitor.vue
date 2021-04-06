<template>
  <div class="visitor">
    <p>댓글란</p>
    <div class="log-in">
      <div class="log" style="display: none;">
      <h4>아이디</h4>
      <input v-model="email" type="text" />

      <h4>패스워드</h4>
      <input v-model="password" type="password" />

      <button
        type="button"
        @click="SignUp()"
      >가입하기</button>
      </div>

      <div>
        <h4>이름</h4>
        <input v-model="name" type="text" />

        <h4>비밀번호</h4>
        <input v-model="mypassword" type="password" name="mypassword" id="mypassword" />

        <h4>텍스트 필드</h4>
        <textarea v-model="mytextarea" name="mytextarea" id="mytextarea" cols="30" rows="10" />

        <button
          type="button"
          @click="submit(name, mypassword, mytextarea)"
        >
          등록하기
        </button>
      </div>

      <div>
        <button type="button" @click="read()">데이터 읽기</button>
        <p class="readData">축하 메시지</p>
        <ul class="data-list">
          <li
            v-for="(item) in reply"
            :key="item.id"
          >
            <div>{{item.id ? item.id : 'hello'}}</div>
            <div>이름: {{ item.name }}</div>
            <p>내용: {{ item.contents }}</p>
            <p>작성 시간: {{ item.date }}</p>

            <button type="button" @click="authCheck(item)"> 삭제 또는 수정 할까요</button>
            <div class="del-popup" :class="{'open' : item.isPopOpen }">
              <p>비밀번호를 입력하세요</p>
              <input v-model="erpassword" type="password">
              <button type="button" @click="updateText()">수정하기</button>
              <button type="button" @click="deleteUser(item.name, item.password, erpassword)">삭제하기</button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <p class="info">
      이름 / validation 필요
      비밀번호 / validation 필요 숫자만 가능
      텍스트 에어리어 + 등록 버튼


      댓글 리스트 -> 작성 시간 , 삭제 버튼

      -> 삭제버튼 클릭시 비밀번호 input 생성
      비밀번호 input === 비밀번호 비교
      ? 삭제 되었습니다.
      : 비밀번호가 다릅니다.
    </p>

    <div class="toast-pop" :class="{'up' : isToastUp }">{{ popupMsg }}</div>
    <!-- <div id="disqus_thread"></div> -->

  </div>
</template>
<script>
import firebase from 'firebase'
import { db } from '../main.js'

export default {
  data: () => {
    return {
      email: '',
      password: '',
      name: '',
      mypassword: '',
      mytextarea: '',
      erpassword: '',
      popupMsg: '기본 토스트 팝업 메시지',
      isPopOpen: false,
      isToastUp: false,
      reply: []
    }
  },
  methods: {
    swalError(msg) {
      console.error('서버 에러입니다.', msg)
    },
    SignUp() {
      console.log('sign up')
      console.log('email:', this.email)
      console.log('password:', this.password)
      // firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      //   .then((user) => {
      //     console.log(user)
      //   })
      //   .catch((error) => {
      //     console.error(error)
      //   })
    },

    submit(name, paswrd, contns) {
      console.log(name, paswrd, contns)

      db.collection('visitors')
        .doc(name)
        .set({
          name: name,
          pasword: paswrd,
          contents: contns,
          date: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
          this.name = '',
          this.mypassword = '',
          this.mytextarea = '',
          this.callToastPopup('등록되었습니다!')
          console.log('document written with name')
        })
        .catch((err) => {
          console.error('error adding document', err)
        })

      // db.collection('visitors').add({
      //   name: name,
      //   pasword: paswrd,
      //   contents: contns,
      //   date: firebase.firestore.FieldValue.serverTimestamp()
      // })
      // .then((docRef) => {
      //   console.log('document written with name', docRef.id)
      // })
      // .catch((err) => {
      //   console.error('error adding document', err)
      // })

    //   db.collection("cities").doc("SF")
    // .onSnapshot((doc) => {
    //     console.log("Current data: ", doc.data());
    // });

    },
    read(name) {
      db.collection('visitors').get()
        .then((res) => {
          console.log(res.data)
          this.reply = []

          res.forEach( doc => {
            let stringdate = doc.data().date
            stringdate = new Date().toISOString()
            this.reply.push({
              key: doc.id,
              name: doc.data().name,
              contents: doc.data().contents,
              date: stringdate,
              password: doc.data().pasword,
              isPopOpen: false
            })
            console.log(doc.id, '=>', doc.data(), doc.data().pasword)
          })
        })
        .catch((err) => {
          this.swalError(err)
        })
    },

    // 메시지 수정
    updateText () {

    },

    // 메세지 삭제
    deleteUser(name, dbPassword, inputPassword) {
      // if (item.password)
      console.log(dbPassword, inputPassword)
      if (dbPassword === inputPassword) {
        db.collection('visitors')
        .doc(name)
        .delete()
        .then(() => {
          this.erpassword = ''
          this.callToastPopup('지워짐')
          console.log('지워짐')
        })
        .catch((err) => {
          console.err(err)
        })
      } else {
        this.callToastPopup('안지워짐 - 비밀번호가 틀렸음')
        console.log('access denied')
        this.erpassword = ''
      }
    },

    // 메세지 삭제 팝업 띄우기
    authCheck (itm) {
      itm.isPopOpen = !itm.isPopOpen
    },
    callToastPopup (msg) {
      this.popupMsg = msg
      this.isToastUp = true
      setTimeout(() => {
        this.popupMsg = ''
        this.isToastUp = false
      },1000)
    }
    // read() {
      // firebase.firestore().collection('visitors').get()
      //   .then((querySnapshot) => {
      //     querySnapshot.forEach( doc => {
      //       console.log(`${doc.id} => ${doc}`)
      //     })
      //   })
    // }
  },
  mounted() {
    
    // console.log(firebase)
  },
  async created () {
    await this.read()

  ///--- disqus -----///
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
  ///--- disqus -----///
  }
}
</script>
<style lang="scss" scoped>
  .visitor {
    margin-top: #{$top-gap-2x}px;
  }
  .data-list {
    padding-top: 50px;
  }
  .info {
    padding-top: 100px;
  }
  .del-popup {
    display: none;
    &.open {
      display: block;
    }
  }

  .toast-pop {
    position: fixed;
    bottom: -50px;
    left: calc(50% - 70px);
    width: 140px;
    height: 20px;
    padding: 20px;
    background-color: #ccc;
    transition: all .3s ease-in-out;
    &.up {
      transform: translate(0, -200%);
    }
  }
</style>