import Vue from 'vue'
import VueRouter from 'vue-router'

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
    {
      path: "",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("views/home/home"),
    },
    {
      path: "/cart",
      component: () => import("views/cart/cart")
    },
    {
      path: "/category",
      component: () => import("views/category/category")
    },
    {
      path: "/profile",
      component: () => import("views/profile/profile")
    }
  ];
  
const router = new VueRouter({
    routes,
    mode: 'history'
})

//3.导出
export default router