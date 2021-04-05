<template>
  <div class="fraction">
    <span
      v-for="(item, index) in fractions"
      :key="index"
      :class="[
        `fraction-type-${item.shape}`,
        `fraction-num-${index}`,
        `fraction-col-${item.color}`]"
      >
        fractions
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
    }
  }
</script>
<style lang="scss" scoped>
.fraction {
  > span {
    display: block;
    text-indent: -9999px;
  }
  &-type-circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
	&-type-circle-small {
		width: 7px;
    height: 7px;
    border-radius: 50%;
	}
  &-type-triangle {
		width: 15px;
		height: 15px;
		border-radius: 0;
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
}
</style>
