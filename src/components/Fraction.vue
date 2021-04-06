<template>
  <div class="fraction">
    <span
      v-for="(item, index) in fractions"
      :key="index"
      :class="[
        `fraction-type-${item.shape}`,
        `fraction-num-${index}`,
        `fraction-col-${item.color}`]"
      :style="[
        `top:${item.top ? item.top + 'px' : 'auto'};
         right:${item.right ? item.right + 'px' : 'auto'};
         bottom:${item.bottom ? item.bottom + 'px' : 'auto'};
         left:${item.left ? item.left + 'px' : 'auto'};
        `
      ]"
      >
        <svg
          v-if="item.shape === 'triangle'"
          width="21"
          height="22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.413 3.688l13.216 11.195-16.303 5.849L8.413 3.688z" :fill="fillColor(item.color)"/>
        </svg>
        <span class="blind">fractions</span>
      </span>
  </div>
</template>
<script>
  export default {
    name: 'Fration',
    props: {
      fractions: {
        type: Array,
        default: null
      }
    },
    methods: {
      fillColor(val) {
        if (val === 'red') {
          return '#F89185'
        } else if (val === 'blue') {
          return '#84A6FF'
        }
      }
    },
  }
</script>
<style lang="scss" scoped>
.fraction {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // z-index: -1;
  > span {
    position: absolute;
    display: block;
    text-indent: -9999px;
    > svg {
      display: block;
    }
    .blind {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
    }
  }
  &-col-red {
    background-color: $col-red;
  }
  &-col-blue {
    background-color: $col-blue;
  }
  &-col-brown {
    background-color: $col-brown;
  }
  &-col-orange {
    background-color: $col-orange;
  }
  &-type-circle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }
	&-type-circle-small {
		width: 12px;
    height: 12px;
    border-radius: 50%;
	}
  &-type-triangle {
		width: 20px;
		height: 20px;
    background-color: transparent;
	}
}
</style>
