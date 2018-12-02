import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from "@/pages/Index"
import Login from "@/pages/Login"
import store from '../store';

Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: Index,
    meta:{
      name: "首页"
    }
  },
  {
    path: '/login',
    component: Login,
    meta:{
      name: "登陆"
    }
  }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  //除了登陆页面，其余页面均需要登陆
  if(to.path != '/login' && !localStorage.getItem('token')){
    return router.push({ path: '/login' })
  }
  next()
})

export default router
