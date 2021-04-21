<template>
  <Hello
    :key-visual="keyVisual"
    :groom="groom"
    :bridal="bridal"
  />
  <Greetings
    :groom-father="groomFather"
    :groom-mother="groomMother"
    :bridal-father="bridalFather"
    :bridal-mother="bridalMother"
    :groom="groom"
    :bridal="bridal"
    :city="city"
    :wedding-hall="weddingHall"
    :hall="hall"
    :year="2021"
    :month="6"
    :date="5"
    :day="'토'"
    :hour="14"
    :message="message"
  />
  <Photos
    :photo-list="ourPhoto"
    @open-modal="callModalOpen"
  />
  <Maps
    :map-draggable="false"
  />
  <Connect
    :parents-pop="parentsPop"
    :is-parents="true"
    :connect-parents="connectParents"
  />
  <!-- <Account
    :is-parents-ver="true"
    @open-popup="callAccountPopOpen"
  /> -->
  <PopupPhoto
    v-if="isModalViewed"
    :photo-list="ourPhoto"
    :active-index="myIndex"
    @close-modal="callModalClose()"
  />
  <PopupAccount
    v-if="isAccPopOpen"
    :who="who"
    :account-bank="accountBank"
    :account-num="accountNumber"
    :parents-account-holder="parentsAccountHolder"
    :parents-bank="parentsBank"
    :parents-account-num="parentsAccountNum"
    :parents-account-holder-sec="parentsAccountHolderSec"
    :parents-bank-sec="parentsBankSec"
    :parents-account-num-sec="parentsAccountNumSec"
    @close-account-pop="callAccountPopClose()"
  />
</template>
<script>
import Hello from '@/components/Hello.vue'
import Greetings from '@/components/Greetings.vue'
import Connect from '@/components/Connect.vue'
// import Account from '@/components/Account.vue'
import Photos from '@/components/Photos.vue'
import Maps from '@/components/Maps.vue'
import PopupPhoto from '@/components/PopupPhoto.vue'
import PopupAccount from '@/components/PopupAccount.vue'


import { gsap, ScrollTrigger } from 'gsap/all'
gsap.registerPlugin( ScrollTrigger);

export default {
  name: 'App',
  components: {
    Hello,
    Greetings,
    Connect,
    Photos,
    Maps,
    // Account,
    PopupPhoto,
    PopupAccount
  },
  data() {
    return {
      myIndex: null,
      isModalViewed: false,
      isAccPopOpen: false,
      isBackgroundChange: false,
      who: '',
      accountBank: '',
      accountNumber: '',
      parentsAccountHolder: '',
      parentsBank: null,
      parentsAccountNum: null,
      parentsAccountHolderSec: null,
      parentsBankSec: null,
      parentsAccountNumSec: null,
      parentsPop: true,

      keyVisual: 'img-wed-17',
      groomFather: '황두영',
      groomMother: '윤현',
      bridalFather: '강용강',
      bridalMother: '이미숙',
      groom: '검명',
      bridal: '나영',
      city: '부산',
      weddingHall: '더리안웨딩홀',
      hall: '크리스탈홀',
      message: '<span class="tt">서로에게 가장 좋은 친구인 두 사람이</span> <span class="tt">이제 서로 하나가 되어</span> <span class="tt">소중한 날들을 함께 걸어가려고 합니다.</span> <span class="tt">그 약속의 자리에 귀한 걸음 하시어</span> <span class="tt">따뜻한 마음을 담아 축하해주시면</span> <span class="tt">더 없는 기쁨으로 간직하겠습니다.</span>',
      // connect: [
      //   {
      //     name: '검명',
      //     phone: '010-9496-7424'
      //   },
      //   {
      //     name: '나영',
      //     phone: '010-8669-2180'
      //   }
      // ],
      connectParents: [
        {
          parents: [
            {
              name: '황두영',
              phone: '010-5162-7424',
              bank: 'SC',
              bankLogo: 'sc',
              accNumber: '517-20-071473',
            },
            {
              name: '윤현',
              phone: '010-0520-2360',
              bank: '농협',
              bankLogo: 'nh',
              accNumber: '301-0009-2567-11'
            }
          ]
        },
        {
          parents: [
            {
              name: '강용강',
              phone: '010-5162-7424',
              bank: '농협',
              bankLogo: 'nh',
              accNumber: '356-1191-2223-83'
            },
            {
              name: '이미숙',
              phone: '010-0520-2360',
              bank: '농협',
              bankLogo: 'nh',
              accNumber: '356-1191-2223-83'
            }
          ]
        }
      ],
      ourPhoto: [
        {img: 'img-wed-1'},
        {img: 'img-wed-2'},
        {img: 'img-wed-3'},
        {img: 'img-wed-4'},
        {img: 'img-wed-5'},
        {img: 'img-wed-6'},
        {img: 'img-wed-7'},
        {img: 'img-wed-8'},
        {img: 'img-wed-9'},
        {img: 'img-wed-10'},
        {img: 'img-wed-11'},
        {img: 'img-wed-12'},
        {img: 'img-wed-13'},
        {img: 'img-wed-14'},
        {img: 'img-wed-15'},
        {img: 'img-wed-16'},
        {img: 'img-wed-17'}
      ],
      accounts: [
        {
          // kakaoPay: '281006011000003822061763',
          bank: '기업은행',
          accountNum: '092-085908-01-015'
        },
        {
          // kakaoPay: '281006011000060860445104',
          bank: '수협',
          accountNum: '101010-690630',

          // 혼주 계좌
          parentsAccountHolder: '강용강 (부)',
          parentsBank: '농협(NH)',
          parentsAccountNum: '815084-56-281088',

          parentsAccountHolderSec: '이미숙 (모)',
          parentsBankSec: '농협(NH)',
          parentsAccountNumSec: '356-1191-2223-83'
        }
      ],
      parentAccount: [
        {
          holder: [
            {
              accountHolder: '황두영 (부)',
              bank: '농협(NH)',
              accNumber: '815084-56-281088',
            },
            {
              accountHolder: '윤현 (모)',
              bank: '농협(NH)',
              accNumber: '356-1191-2223-83'
            }
          ]
        },
        {
          holder: [
            {
              accountHolder: '강용강 (부)',
              bank: '농협(NH)',
              accNumber: '815084-56-281088',
            },
            {
              accountHolder: '이미숙 (모)',
              bank: '농협(NH)',
              accNumber: '356-1191-2223-83'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.gsaps()
    window.addEventListener('scroll', this.scrollEvt)
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollEvt)
  },
  methods: {
    gsaps () {
      const sections = ['.hello-kv', '.greetings', '.photos', '.maps', '.connect', '.account', '.visitor', '.goodbye']
      sections.reduce((acc, cur) => {
        const texts = `${cur} .text-int`
        ScrollTrigger.create({
          trigger: cur,
          start: "top-=90% center",
          onEnter: () => {
            gsap.utils.toArray(texts).forEach( text => {
              ScrollTrigger.create({
                trigger: text,
                start: "top 90%",
                onEnter: () => {
                  text.classList.add('hello')
                }
              });
            })
          }
        })
      })
    },
    scrollEvt (e) {
      let targetTop = document.querySelector('.photos').getBoundingClientRect().y - (window.innerHeight * 0.5)
      if (targetTop < -document.querySelector('.photos').offsetHeight*2) {
        document.querySelector('body').classList.remove('col')
      } else if (targetTop < 0) {
        document.querySelector('body').classList.add('col')
      } else {
        document.querySelector('body').classList.remove('col')
      }
    },
    callModalOpen (idx) {
      this.isModalViewed = true
      this.myIndex = idx
      document.querySelector('body').classList.add('scroll-lock')

      console.log(idx, this.myIndex)
    },
    callModalClose () {
      this.isModalViewed = false
      console.log(this.$refs.photoSwiper)
      document.querySelector('body').classList.remove('scroll-lock')
    },
    callAccountPopOpen (itm, idx) {
      this.isAccPopOpen = true
      this.accountBank = itm.bank
      this.accountNumber = itm.accountNum
      this.parentsAccountHolder = itm.parentsAccountHolder
      this.parentsBank = itm.parentsBank
      this.parentsAccountNum = itm.parentsAccountNum
      this.parentsAccountHolderSec = itm.parentsAccountHolderSec
      this.parentsBankSec = itm.parentsBankSec
      this.parentsAccountNumSec = itm.parentsAccountNumSec
      this.who = (idx === 0 ? `신랑 (${this.groom})` : `신부 (${this.bridal})`)
      document.querySelector('body').classList.add('dimmed')
    },
    callAccountPopClose () {
      this.isAccPopOpen = false;
      this.parentsAccountHolder = null,
      document.querySelector('body').classList.remove('dimmed')
    }
  }
}
</script>
