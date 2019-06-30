import Vue from 'vue'
// 1. 引入
import Router from 'vue-router'
// 2. 注册
Vue.use(Router)
// 3-1. 引入视图组件
const welcome = r => require.ensure([], () => r(require('@/views/site/welcome')), 'welcome')
const adminLogin = r => require.ensure([], () => r(require('@/views/admin/adminLogin')), 'adminLogin')
const manage = r => require.ensure([], () => r(require('@/views/admin/manage')), 'manage')
const addStaff = r => require.ensure([], () => r(require('@/views/admin/user/addStaff')), 'addStaff')
const goodsList = r => require.ensure([], () => r(require('@/views/admin/user/goodsList')), 'goodsList')
const addGood = r => require.ensure([], () => r(require('@/views/admin/user/addGood')), 'addGood')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    }, {
      path: '/adminLogin',
      name: 'adminLogin',
      component: adminLogin
    }, {
      path: '/manage',
      name: 'manage',
      component: manage,
      children: [
        {
          path: 'addStaff',
          component: addStaff,
          meta: ['员工管理', '添加员工']
        }, {
          path: 'goodsList',
          component: goodsList,
          meta: ['商品管理', '商品列表']
        }, {
          path: 'addGood',
          component: addGood,
          meta: ['商品管理', '添加商品']
        }
      ]
    }
  ]
})
