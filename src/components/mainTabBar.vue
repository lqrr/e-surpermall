<template>
  <div>
    <tab-bar>
      <!-- activeColor未起作用？？？ -->
      <!-- 在dom中使用别名符号需加～ -->
      <tab-bar-item path="/home" activeColor="red">
        <img
          slot="item-icon"
          src="../assets/img/tabbar/菜单.svg"
          alt=""
          class="tab-icon"
        />
        <img
          slot="item-icon-active"
          src="../assets/img/tabbar/晴.svg"
          alt=""
          class="tab-icon"
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="purple">
        <img
          slot="item-icon"
          src="../assets/img/tabbar/菜单.svg"
          alt=""
          class="tab-icon"
        /><img
          slot="item-icon-active"
          src="../assets/img/tabbar/晴.svg"
          alt=""
          class="tab-icon"
        />
        <div slot="item-text">菜单</div></tab-bar-item
      >
      <tab-bar-item path="/cart">
        <img
          slot="item-icon"
          src="../assets/img/tabbar/喜欢.svg"
          alt=""
          class="tab-icon"
        /><img
          slot="item-icon-active"
          src="../assets/img/tabbar/晴.svg"
          alt=""
          class="tab-icon"
        />
        <div slot="item-text">喜欢</div></tab-bar-item
      >
      <tab-bar-item path="/profile">
        <img
          slot="item-icon"
          src="../assets/img/tabbar/我的.svg"
          alt=""
          class="tab-icon"
        /><img
          slot="item-icon-active"
          src="../assets/img/tabbar/晴.svg"
          alt=""
          class="tab-icon"
        />
        <div slot="item-text">我的</div></tab-bar-item
      >
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "mainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style></style>
