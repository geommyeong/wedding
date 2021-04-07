<template>
  <div class="visitor">
    <p>댓글란</p>
    <div class="log-in">
      <!-- <div class="log" style="display: none;">
      <h4>아이디</h4>
      <input v-model="email" type="text" />

      <h4>패스워드</h4>
      <input v-model="password" type="password" />

      <button
        type="button"
        @click="SignUp()"
      >가입하기</button>
      </div> -->

      <div>
        <form
          @submit.prevent="onSubmit(name, mypassword, mytextarea)"
          method="post"
        >
          <!-- <h4>이름</h4> -->
              <!-- name.length > 0 ? 'fm-filled' : '', -->
          <div
            :class="[
              'fm-field',
              {'fm-filled' : nameFilled},
              {'fm-focused' : nameFocused}
            ]"
          >
            <label for="name">이름</label>
            <input
              id="name"
              v-model="name"
              type="text"
              name="name"
              placeholder="이름을 입력해주세요"
              @focus="nameFocused = true"
              @blur="nameFocused = false"
              :maxlength="5"
              required
            />
              <!-- @blur="name.length > 0 ? nameFocused = true : nameFocused = false" -->
            <button
              type="button"
              class="btn-submit"
              @click="checkDuplicateName(name)"
            >
              중복확인
            </button>
            <p
              :class="[
                'fld-notice',
                {'checked' : name.length >= 2}
              ]"
            >{{ name.length }} / 5</p>
            <p>한글과 숫자만 입력 가능합니다.</p>
            <p>이름을 입력해주세요 (한글 2 ~ 4 자리만 가능합니다.)</p>
          </div>

          <!-- <h4>비밀번호</h4> -->
          <label for="mypassword">비밀번호</label>
          <input
            v-model="mypassword"
            type="password"
            name="mypassword"
            id="mypassword"
            placeholder="비밀번호를 입력해주세요"
            maxlength="4"
            required
          />
          <p
            :class="[
              'fld-notice',
              {'checked' : mypassword.length === 4 }
            ]"
          >{{ mypassword.length }} / 4</p>
          <p>비밀번호를 입력해주세요 (숫자 4자리)</p>
          <p>숫자만 입력 가능합니다.</p>

          <!-- <h4>텍스트 필드</h4> -->
          <label for="mytextarea">텍스트 필드</label>
          <textarea
            v-model="mytextarea"
            name="mytextarea"
            id="mytextarea"
            placeholder="메세지를 써 주세요"
            maxlength="100"
            cols="30"
            rows="10"
          />
          <p
            :class="[
              'fld-notice',
              {'checked' : mytextarea.length >= 1 }
            ]"
          >{{ mytextarea.length }} / 200</p>
          <p>최대 200자 까지 입력 가능합니다.</p>


          <button
            type="submit"
            class="btn-submit"
          >
            <!-- @click="submit(name, mypassword, mytextarea)" -->
            등록하기
          </button>
        </form>
      </div>

      <div>
        <!-- <button type="button" @click="read()">데이터 읽기</button> -->
        <p class="readData">축하 메시지</p>
        <ul class="data-list">
          <li
            v-for="(item) in reply"
            :key="item.name"
          >
            <div>{{item.name ? item.name : 'hello'}}</div>
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
import { db } from '@/main.js'

export default {
  data: () => {
    return {
      email: '',
      password: '',
      name: '',
      isNameExist: 'tr',
      checkDupName: false,
      nameFilled: false,
      nameFocused: false,
      mypassword: '',
      mytextarea: '',
      erpassword: '',
      popupMsg: '기본 토스트 팝업 메시지',
      isPopOpen: false,
      isToastUp: false,
      reply: []
    }
  },
  watch: {
    name () {
      this.name.length >= 2
        ? this.nameFilled = true
        : this.nameFilled = false
      return this.name = this.name.replace(/[^가-힣0-9]/g, '')
    },
    mypassword () {
      return this.mypassword = this.mypassword.replace(/[^0-9]/g, '')
    }
  },
  methods: {
    swalError(msg) {
      console.error('서버 에러입니다.', msg)
    },
    // SignUp() {
    //   console.log('sign up')
    //   console.log('email:', this.email)
    //   console.log('password:', this.password)
    //   // firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    //   //   .then((user) => {
    //   //     console.log(user)
    //   //   })
    //   //   .catch((error) => {
    //   //     console.error(error)
    //   //   })
    // },

    resetTextfield () {
      this.name = ''
      this.mypassword = ''
      this.mytextarea = ''
    },

    alwaysTrue () {
      // return true
      this.isNameExist
        ? this.checkDupName = false
        : this.checkDupName = true

      console.log('isNameExist', this.isNameExist)
      console.log('checkDupName', this.checkDupName)

      // console.lo
    },

    async checkDuplicateName (n) {
      // let isNameExist = false
      db.collection('visitors').get().then(res => {
        let arr = []
        res.forEach( doc => {
          arr.push(doc.data().name)
        })
        if (arr.indexOf(n) !== -1) {
          this.isNameExis = 'fa'
          console.log('A', this.isNameExist)
        } else {
          console.log('B', this.isNameExist)
        }
        // this.isNameExist = true
      })

      console.log('isNameExist', this.isNameExist)
    },

    onSubmit(name, paswrd, contns) {
      // console.log(name, paswrd, contns)

      // console.log(this.checkDuplicateName(name) , this.checkDuplicateName(name) ? `${name} 사용할 수 없습니다!` : `${name} 으로 사용 가능합니다!`)
      // console.log('bb', this.alwaysTrue())

      // let isNameExist = false
      

      // console.log(isNameExist)


      if (name === '') {
        alert('이름을 입력하세요')
      } else if (paswrd === '') {
        alert('비밀번호를 입력하세요')
      } else if (contns === '') {
        alert('내용을 입력하세요')
      } else {
        db.collection('visitors')
          .doc(name)
          .set({
            name: name,
            pasword: paswrd,
            contents: contns,
            date: firebase.firestore.FieldValue.serverTimestamp()
          })
          .then(() => {
            this.resetTextfield()
            this.callToastPopup('등록되었습니다!')
            console.log('document written with name')
          })
          .catch((err) => {
            console.error('error adding document', err)
          })
      }
    },
    async read() {
      db.collection('visitors')
        .orderBy('date', 'desc')
        .onSnapshot( res => {
          this.reply = []
          res.forEach( (doc) => {
            const datedata = new Date(doc.data().date.seconds * 1000)

            this.reply.push({
              name: doc.data().name,
              contents: doc.data().contents,
              date: datedata,
              password: doc.data().pasword,
              isPopOpen: false
            })
          })
        }, err => {
          this.swalError(err)
        })

      // db.collection('visitors').get()
      //   .then((res) => {
      //     // console.log(res.data)
      //     this.reply = []

      //     res.forEach( doc => {
      //       let stringdate = bewdoc.data().date.seconds * 1000
      //       stringdate = new Date(doc.data().date.seconds * 1000)
      //       this.reply.push({
      //         key: doc.id,
      //         name: doc.data().name,
      //         contents: doc.data().contents,
      //         date: stringdate,
      //         password: doc.data().pasword,
      //         isPopOpen: false
      //       })
      //       // console.log(doc.id, '=>', doc.data(), doc.data().pasword)
      //     })
      //   })
      //   .catch((err) => {
      //     this.swalError(err)
      //   })
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
  created() {
    this.read()
  }
  // async created () {
  //   await this.read()
  // }
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

  .fm-field {
    position: relative;
    padding: 30px 0;
    &.fm-focused {
      label {
        top: 0;
        color: #448aff;
        opacity: 1;
      }
    }
    &.fm-filled {
      label {
        top: 0;
        opacity: 1;
      }
    }
    label {
      position: absolute;
      top: 12px;
      left: 0;
      font-size: 16px;
      color: #ccc;
      opacity: 0;
      transition: .4s cubic-bezier(.25,.8,.25,1);
      transition-duration: .3s;
      &:after {
        content:'*';
        font-size: 10;
      }
    }
    input {
      display: block;
      height: 32px;
      border: none;
      transition: .4s cubic-bezier(.25,.8,.25,1);
      transition-property: font-size,padding-top,color;
    }
  }
  .fld-notice {
    &.checked {
      color: #448aff;
    }
  }
  .btn-submit {
    padding: 10px;
    border: 1px solid #448aff;
  }
</style>