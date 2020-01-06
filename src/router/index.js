import Vue from 'vue'
import VueRouter from 'vue-router'
// eslint-disable-next-line no-unused-vars
import ForeLayout from '@/foreviews/Layout'

Vue.use(VueRouter)

const routes = [

  // --------网页前台路由-----------
  {
    path: '/',
    component: ForeLayout,
    children: [{
      path: '',
      component: () => import('@/foreviews/books/index')
    }]
  },

  {
    path: '/books',
    component: ForeLayout,
    children: [{
      path: '',
      component: () => import('@/foreviews/books/index')
    }]
  },

  {
    path: '/movies',
    component: ForeLayout,
    children: [{
      path: '',
      component: () => import('@/foreviews/movies/index')
    }]
  },

  {
    path: '/circle',
    component: ForeLayout,
    children: [{
      path: '',
      component: () => import('@/foreviews/circle/index')
    }]
  },

  {
    path: '/dynamic',
    component: ForeLayout,
    children: [{
      path: '',
      component: () => import('@/foreviews/dynamic/index')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 解决两次访问相同路由地址报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
