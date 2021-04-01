<template>
  <div class="hello">
    <div class="title">
      <h1>초대합니다.</h1>
      <p>6월5일</p>
      <span class="letter-bg">Wedding</span>
    </div>
    <div class="frames">
      <div class="frame-fracture">
        <span>Save</span>
        <span>Our</span>
        <span>Date</span>
      </div>
      <figure>
        <img src="@/assets/images/@temp-img.jpg" alt="">
      </figure>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Hello',
  props: {
    groomFather: String,
    groomMother: String,
    bridalFather: String,
    bridalMother: String,
    groom: String,
    bridal: String
  },
}
</script>
<style lang="scss" scoped>
  .hello {
    }
    .title {
      h1 {
        font-size: 34px;
      }
    }
  .frames {
    width: 100%;
    figure {
      img {
        width: 100%;
      }
    }
  }
</style>