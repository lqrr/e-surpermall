<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">推荐</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行', '新款', '精选']"
                 class="tab-control"
                 @tabClick="tabClick"
    />
    <!-- 此处无需传值这是子组件向父组件传值， 监听的是自定义事件， 默认会把值传入到你父组件定义的方法中 -->
    <goods-list :goods="showGoods"/>
     <ul>
       <li>1</li>
       <li>2</li>
       <li>3</li>
       <li>4</li>
       <li>5</li>
       <li>6</li>
       <li>7</li>
       <li>8</li>
       <li>9</li>
       <li>10</li>
       <li>11</li>
       <li>12</li>
       <li>13</li>
       <li>14</li>
       <li>15</li>
       <li>16</li>
       <li>17</li>
       <li>18</li>
       <li>19</li>
       <li>20</li>
       <li>21</li>
       <li>22</li>
       <li>23</li>
       <li>24</li>
       <li>25</li>
       <li>26</li>
       <li>27</li>
       <li>28</li>
       <li>29</li>
       <li>30</li>
       <li>31</li>
       <li>32</li>
       <li>33</li>
       <li>34</li>
       <li>35</li>
       <li>36</li>
       <li>37</li>
       <li>38</li>
       <li>39</li>
       <li>40</li>
     </ul>
  </div>
</template>

<script>

import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'

import HomeSwiper from './childComponents/HomeSwiper.vue'
import RecommendView from './childComponents/RecommendView.vue'
import FeatureView from './childComponents/FeatureView.vue'

import { getHomeMultiData, getHomeGoods } from '../../network/home.js'

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop'
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('sell')
    this.getHomeGoods('new')

  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      console.log(index);
      // this.cuttentIndex = Object.keys(this.goods)[index]
      this.currentType = index == 1 ? "pop" : index == 2 ? "new" : "sell"; 
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultiData() {
      //请求多个数据
      getHomeMultiData().then(res => {
        console.log(res);
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // 数组响应式的方法push，pop，shift,unshift,splice,sort,reverse
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
        console.log(res);
    })
    }
  }
};
</script>

<style>
  #home {
    padding-bottom: 40px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    /* position: sticky;
    top: 0px;
    z-index:999;  */
    /* overflow-y: scroll */
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    /* 未到达预定高度时 position相当于fixed 到达即变成sticky */
  }
</style>
