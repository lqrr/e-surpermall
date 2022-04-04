<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="showActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <slot :style="activeStyle" name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // showActive: true
    };
  },
  computed: {
    showActive() {
      return this.$route.path.indexOf(this.path) === -1;
    },
    activeStyle() {
      return this.showActive ? { color: this.activeColor } : {};
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "pink"
    }
  },
  methods: {
    itemClick() {
      // console.log("itemClick");
      this.$router.replace(this.path);
      console.log(this.path);
      console.log(this.activeColor);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-icon {
  height: 27px;
  width: 27px;
  vertical-align: middle;
  /* 去掉图片默认三像素 */
}
</style>
