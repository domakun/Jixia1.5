import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserEntrance from '@/components/home/user/UserEntrance'
import Login from '@/components/home/user/Login'
import Regist from '@/components/home/user/Regist'
import Admin from '@/components/admin/Admin'
import Gl from '@/components/admin/Gl/Gl'
import Jd from '@/components/admin/Jd/Jd'
import User from '@/components/admin/User/User'
import Scenic from '@/components/scenic/Scenic'
import Me from '@/components/me/Me'
import Strategy from '@/components/strategy/Strategy'
import StrategyDetails from '@/components/strategy/StrategyDetails'

import About from '@/components/home/About'
import Community from '@/components/home/Community'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'UserEntrance',
      component: UserEntrance,
      children: [
        {
          path: '/showRegist',
          name: 'Regist',
          component: Regist
        },
        {
          path: '/showLogin',
          name: 'Login',
          component: Login
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: '/Gl',
          name: 'Gl',
          component: Gl
        }, {
          path: '/Self',
          name: 'User',
          component: User
        }, {
          path: '/Jd',
          name: 'Jd',
          component: Jd
        }
      ]
    },
    //景点路由
    {
      path:'/scenic',
      name:'Scenic',
      component: Scenic
    },
    //攻略路由
    {
      path:'/strategy',
      name:'Strategy',
      component: Strategy
    },
    //个人中心路由
    {
      path:'/me',
      name:'Me',
      component: Me
    },
		{
			path: '/StrategyDetails',
			name: 'StrategyDetails',
			component: StrategyDetails
		},
    {
      //关于我们--路由
      path:'/About',
      name:'About',
      component: About
    },
    {
      //社区--路由
      path:'/Community',
      name:'Community',
      component: Community
    }
  ]
})
