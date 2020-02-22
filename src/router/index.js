import Vue from 'vue'
import VueRouter from 'vue-router'
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

  // 登陆
  {
    path: '/toLogin',
    component: () => import('@/foreviews/login/index')
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
    path: '/books/:bid',
    component: ForeLayout,
    children: [{
      path: '',
      component: () => import('@/foreviews/bookdetails/index'),
      meta: {
        requireAuth: true
      }
    }]
  },

  {
    path: '/tags/:tid',
    component: ForeLayout,
    children: [{
      path: '',
      component: () => import('@/foreviews/tagdetails/index'),
      meta: {
        requireAuth: true
      }
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
    path: '/movies/:mid',
    component: ForeLayout,
    children: [{
      path: '',
      component: () => import('@/foreviews/moviedetails/index'),
      meta: {
        requireAuth: true
      }
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
      component: () => import('@/foreviews/dynamic/index'),
      meta: {
        requireAuth: true
      }
    }]
  },

  {
    path: '/homepage',
    component: ForeLayout,
    children: [{
      path: '',
      component: () => import('@/foreviews/homepage/index')
    }]
  },

  {
    path: '/favorites',
    component: ForeLayout,
    children: [{
      path: '',
      component: () => import('@/foreviews/favorites/index')
    }]
  },

  {
    path: '/account',
    component: ForeLayout,
    children: [{
      path: '',
      component: () => import('@/foreviews/account/index')
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

// 路由变化跳转页面回到顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
export default router
