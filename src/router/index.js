import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Users from '@/views/Users'
import Orders from '@/views/Orders'
import Contents from '@/views/Contents'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: '首页',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: '商品管理',
          component: Dashboard
        },
        {
          path: 'users',
          name: '用户管理',
          component: Users
        },
        {
          path: 'orders',
          name: '订单管理',
          component: Orders
        },
        {
          path: 'contents',
          name: '内容管理',
          component: Contents
        }

      ]
    }
  ]
})
