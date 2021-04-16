<template>
  <div class="goodbye">
    <Fraction
      :fractions="fractions"
    />
    <h3 class="text-int">
      <span class="tt inline">감</span>
      <span class="tt inline">사</span>
      <span class="tt inline">합</span>
      <span class="tt inline">니</span>
      <span class="tt inline">다</span>
    </h3>
  </div>
</template>
<script>
import Fraction from '@/components/Fraction.vue'

export default {
  name: 'GoodBye',
  components: {
    Fraction
  },
  data: () => {
    return {
      fractions: [
        {
          shape: 'circle',
          color: 'brown',
          top: 76,
          left: 4
        },
        {
          shape: 'circle-small',
          color: 'orange',
          top: 75,
          left: 6
        },
        {
          shape: 'triangle',
          color: 'red',
          top: 38,
          right: 12
        },
        // {
        //   shape: 'triangle',
        //   color: 'blue',
        //   bottom:64,
        //   right: 38
        // },
        // {
        //   shape: 'circle-small',
        //   color: 'orange',
        //   top: 72,
        //   left: 68
        // },
        // {
        //   shape: 'circle-small',
        //   color: 'red',
        //   top: 62,
        //   left: 42
        // }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .goodbye {
    position: relative;
    padding: #{$top-gap-3x}px 0;
    h3 {
      text-align: center;
      font-size: $font-lar;
      color: $col-key;
    }
  }
</style>