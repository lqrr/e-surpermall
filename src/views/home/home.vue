<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">推荐</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import HomeSwiper from './childComponents/HomeSwiper.vue'
import RecommendView from './childComponents/RecommendView.vue'
import { getHomeMultiData } from '../../network/home.js'

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  created() {
    //1.请求多个数据
    getHomeMultiData().then(res => {
      console.log(res);
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
  }
};
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>
