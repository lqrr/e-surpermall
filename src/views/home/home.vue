<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">推荐</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control"/>
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

import HomeSwiper from './childComponents/HomeSwiper.vue'
import RecommendView from './childComponents/RecommendView.vue'
import FeatureView from './childComponents/FeatureView.vue'

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
    FeatureView,
    TabControl
  },
  created() {
    //请求多个数据
    getHomeMultiData().then(res => {
      console.log(res);
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
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
