import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../pages/Login/index.vue'
import Home from '../pages/Home/index.vue'
// import 404 from '../pages/404/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      hidden: true,
      component: Login
    },
    {
      path: '/',
      component: Home,
      redirect: '/home',
      name: '',
      iconCls: 'el-icon-s-help',
      leaf: true,
      // children: [
      //   {
      //     path: '/dashboard',
      //     name: '首页',
      //     component: () => import('../views/Dashboard/index.vue')
      //   }
      // ]
    },
    {
      path: '/',
      component: Home,
      name: '',
      iconCls: 'el-icon-star-on',
      leaf: true,
      hidden: true,  // 路由是否在侧边导航栏中显示
      children: [
        {
          name: '404页面',
          path: '/404',
          component: () => import('../pages/404/index.vue')
        }
      ]
    }
  ]
})
