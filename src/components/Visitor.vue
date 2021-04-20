<template>
  <div class="visitor">
    <ContentsTitle
      title="축하 메세지"
      description="<span class='tt'>축하 메시지로</span> <span class='tt'>마음을 전해주세요.</span>"
    />
    <div class="visitor-inner">

      <div class="forms">
        <form
          @submit.prevent="onSubmit(name, mypassword, mytextarea)"
          method="post"
        >
          <!-- 이름 -->
          <div
            :class="[
              'fm-field',
              {'fm-filled' : nameFilled},
              {'fm-focused' : nameFocused},
              {'fm-error': nameError}
            ]"
          >
            <label for="name">이름</label>
            <input
              id="name"
              v-model="name"
              type="text"
              name="name"
              @focus="nameFocused = true"
              @blur="nameFocused = false"
              :minlength="2"
              :maxlength="5"
              required
            />
            <button
              type="button"
              class="btn-submit btn-dup-check"
              @click="checkDuplicateName(name)"
            >
              중복확인
            </button>
            <div class="fld-notice-wrap">
              <p
                :class="[
                  'fld-notice',
                  {'checked' : name.length >= 2}
                ]"
              >{{ name.length }} / 5</p>
              <p
                :class="['fld-notice', {'checked' : name.length >= 1}]"
              >한글과 숫자만 입력 가능합니다.</p>
            </div>
          </div>

          <!-- 비밀번호 -->
          <div
            :class="[
              'fm-field',
              {'fm-filled' : pswdFilled},
              {'fm-focused' : pswdFocused},
              {'fm-error': pswdError}
            ]"
          >
            <label for="mypassword">비밀번호</label>
            <input
              id="password"
              v-model="mypassword"
              type="password"
              name="mypassword"
              @focus="pswdFocused = true"
              @blur="pswdFocused = false"
              :minlength="4"
              :maxlength="4"
              required
            />
            <div class="fld-notice-wrap">
              <p
                :class="[
                  'fld-notice',
                  {'checked' : mypassword.length === 4 }
                ]"
              >{{ mypassword.length }} / 4</p>
              <p
                :class="[
                  'fld-notice',
                  {'checked' : mypassword.length === 4 }
                ]"
              >
                비밀번호를 입력해주세요 (숫자 4자리)
              </p>
              <p
                :class="[
                  'fld-notice',
                  {'checked' : mypassword.length >= 1 }
                ]"
              >
                숫자만 입력 가능합니다.
              </p>
            </div>
          </div>


          <!-- <h4>텍스트 필드</h4> -->
          <div
            :class="[
              'fm-field',
              {'fm-filled' : txfdFilled},
              {'fm-focused' : txfdFocused}
            ]"
          >
            <label for="mytextarea">축하 메시지</label>
            <textarea
              v-model="mytextarea"
              name="mytextarea"
              id="mytextarea"
              :minlength="1"
              :maxlength="200"
              cols="30"
              rows="10"
              @focus="txfdFocused = true"
              @blur="txfdFocused = false"
              required
            />
            <div class="fld-notice-wrap">
              <p
                :class="[
                  'fld-notice',
                  {'checked' : mytextarea.length >= 1 }
                ]"
              >{{ mytextarea.length }} / 200</p>
              <p
                :class="[
                  'fld-notice',
                  {'checked' : mytextarea.length >= 1 }
                ]"
              >
                최대 200자 까지 입력 가능합니다.
              </p>
            </div>
          </div>


          <button
            type="submit"
            class="btn-submit"
          >
            <!-- @click="submit(name, mypassword, mytextarea)" -->
            축하 메시지 남기기
          </button>
        </form>
      </div>

      <div class="msg-list">
        <ul class="data-list text-int">
          <li
            class="tt"
            v-for="(item) in reply"
            :key="item.name"
          >
            <div class="ms">
              <div class="ms-name">{{ item.name }}</div>
              <p class="ms-date">{{ item.date }}</p>
            </div>
            <p class="ms-contents">{{ item.contents }}</p>

            <button
              type="button"
              class="btn-auth-check"
              @click="authCheck(item)"
            >
              삭제 또는 수정 할까요
            </button>
            <div class="del-popup" :class="{'open' : item.isPopOpen }">
              <p>비밀번호를 입력하세요</p>
              <input v-model="erpassword" type="password">
              <button type="button" @click="deleteUser(item.name, item.password, erpassword)">삭제하기</button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="toast-pop"
      :class="{'up' : isToastUp }"
    >
      {{ popupMsg }}
    </div>
    <!-- <div id="disqus_thread"></div> -->

  </div>
</template>
<script>
import ContentsTitle from '@/components/ContentsTitle.vue'
import firebase from 'firebase'
import { db } from '@/main.js'

export default {
  components: {
    ContentsTitle
  },
  data: () => {
    return {
      email: '',
      password: '',
      name: '',
      isNameExist: 'tr',
      checkDupName: false,

      nameFilled: false,
      nameFocused: false,
      nameError: false,

      pswdFilled: false,
      pswdFocused: false,
      pswdError: false,

      txfdFilled: false,
      txfdFocused: false,

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

    // 유효성검사 이름
    name () {
      let isNameFilled = this.name.length > 0
      let isNamePass = this.name.length >= 2

      if ( isNameFilled ) {
        this.nameFilled = true
        if ( isNamePass ) {
          this.nameError = false
        } else {
          this.nameError = true
        }
      } else {
        this.nameFilled = false
      }

      return this.name = this.name.replace(/[^가-힣ㄱ-ㅎ0-9]/g, '')
    },

    // 유효성검사 패스워드
    mypassword () {
      let isPasswordFilled = this.mypassword.length > 0
      let isPasswordPass = this.mypassword.length === 4

      if ( isPasswordFilled ) {
        this.pswdFilled = true
        if ( isPasswordPass ) {
          this.pswdError = false
        } else {
          this.pswdError = true
        }
      } else {
        this.pswdFilled = false
      }

      return this.mypassword = this.mypassword.replace(/[^0-9]/g, '')
    },

    // 유효성 검사 컨텐츠
    mytextarea () {
      this.mytextarea.length >= 1
        ? this.txfdFilled = true
        : this.txfdFilled = false
    }
  },
  methods: {
    swalError(msg) {
      console.error('서버 에러입니다.', msg)
    },

    // 텍스트 필드 리셋
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
            this.callToastPopup('등록되었습니다! 😘')
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
            const datedata = new Date(doc.data().date.seconds * 1000).toLocaleString()

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


    // 메세지 삭제
    deleteUser(name, dbPassword, inputPassword) {
      // if (item.password)
      if (dbPassword === inputPassword) {
        db.collection('visitors')
        .doc(name)
        .delete()
        .then(() => {
          this.erpassword = ''
          this.callToastPopup('댓글이 삭제되었습니다! 😱')
          this.reply.forEach( item => {
            item.isPopOpen = false
          })
        })
        .catch((err) => {
          console.err(err)
        })
      } else {
        this.callToastPopup('비밀번호가 다릅니다! 😵')
        console.log('access denied')
        this.erpassword = ''
        this.reply.forEach( item => {
          item.isPopOpen = false
        })
      }
    },

    // 메세지 삭제 팝업 띄우기
    authCheck (itm) {
      this.reply.forEach( item => {
        item.isPopOpen = false
      })
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
    .visitor-inner {
      margin-left: $left-gap;
      .forms {

      }
    }
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
    p {
      margin-top: 20px;
      color: $col-key;
    }
    input {
      display: inline-block;
      width: 36%;
      margin-top: 10px;
      border: none;
      border-radius: 0;
      background: transparent;
      border-bottom: 1px solid $col-key;
      font-size: $font-input;
      color: $col-key;
      -webkit-appearance: none;
      &:focus {
        outline: none;
      }
    }
    button {
      display: inline-block;
      color: $col-key;
    }
  }

  .toast-pop {
    position: fixed;
    bottom: -60px;
    left: calc(50% - 90px);
    width: 140px;
    height: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: #333;
    color: #fff;
    transition: all .3s ease-in-out;
    text-align: center;
    line-height: 1.5;
    z-index: 9999;
    &.up {
      transform: translate(0, -200%);
    }
  }


  // filed
  .fm-field {
    position: relative;
    width: 80%;
    max-width: 380px;
    padding: 30px 0 0;
    &.fm-error {
      label {
        color: $col-err;
      }
      .fld-notice:not(.checked) {
        color: $col-err;
      }
    }
    &.fm-focused {
      label {
        top: 18px;
        color: $col-key;
        opacity: 1;
        font-size: 12px;
      }
      input {
        border-color: $col-key;
      }
      .fld-notice:not(.checked) {
        color: inherit;
      }
    }
    &.fm-filled {
      label {
        top: 18px;
        opacity: 1;
        font-size: 12px;
      }
    }
    label {
      position: absolute;
      top: 38px;
      left: 0;
      font-size: 14px;
      color: #ccc;
      opacity: 0;
      opacity: 1;
      transition: .4s cubic-bezier(.25,.8,.25,1);
      transition-duration: .3s;
      &:after {
        content:'*';
        font-size: 10;
      }
    }
    input, textarea {
      display: block;
      width: 100%;
      height: 32px;
      border: none;
      border-radius: 0;
      background: transparent;
      border-bottom: 1px solid #ccc;
      transition: .4s cubic-bezier(.25,.8,.25,1);
      transition-property: font-size,padding-top,color;
      font-size: $font-input;
      color: $col-key;
      font-family: 'Noto-Serif';
      -webkit-appearance: none;
      &:focus {
        outline: none;
      }
    }
    textarea {
      height: 64px;
      margin-top: 10px;
    }
  }
  .fld-notice-wrap {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.5;
    .fld-notice {
      display: block;
      position: relative;
      width: calc(100%  - 24px);
      font-size: 11px;
      &.checked {
        color: $col-key;
        &:before {
          content:'';
          position: absolute;
          top: 6px;
          right: -18px;
          width: 6px;
          height: 2px;
          background-color: $col-key;
          transform: rotate(45deg);
        }
        &:after {
          content:'';
          position: absolute;
          top: 5px;
          right: -26px;
          width: 11px;
          height: 2px;
          background-color: $col-key;
          transform: rotate(-46deg);
        }
      }
    }
  }
  .btn-submit {
    display: block;
    margin: 30px 0 0 0;
    padding: 10px;
    font-size: $font-s;
    color: $col-key;
    text-decoration: underline;

    // border: 1px solid $col-key;
  }
  .btn-dup-check {
    display: none;
  }

  // 메시지 리스트
  .msg {
    &-list {
      margin-right: $left-gap;
      .data-list {
        width: 100%;
        > li {
          $top-gap : 30px;
          position: relative;
          padding-top: $top-gap;
          & + li {
            margin-top: 20px;
            border-top: 1px solid $col-key;
          }
          .ms {
            display: flex;
            align-items: flex-end;
            &-name {
              font-size: $font-xs;
              color: $col-key;
            }
            &-date {
              margin-left: 10px;
              font-size: 10px;
              color: #ccc;
            }
            &-contents {
              margin-top: 10px;
              font-size: $font-xxs;
              color: $col-key;
              line-height: 1.4;
            }
          }
          .btn-auth-check {
            position: absolute;
            top: $top-gap;
            right: 0;
            width: 20px;
            height: 20px;
            text-indent: -9999px;
            &:before, &:after {
              content: '';
              position: absolute;
              top: 10px;
              left: 5px;
              width: 10px;
              height: 1px;
              background-color: $col-key;
              transform: rotate(-45deg);
            }
            &:after {
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  }
</style>