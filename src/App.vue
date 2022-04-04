<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import mainTabBar from "components/mainTabBar";
export default {
  name: "App",
  components: {
    mainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
/* style中固定格式加@引用 */
</style>
