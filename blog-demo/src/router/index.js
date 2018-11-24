import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '../store';

Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: HelloWorld,
    meta:{
      name: "首页"
    }
  }
]

const router = new Router({
  routes
})

// router.beforeEach((to, from, next) => {
//   //除了登陆页面，其余页面均需要登陆
//   if(to.path != '/login'){
//     return next({ path: '/' })
//   }
// })

export default router
