import Vue from 'vue'
import Router from 'vue-router'
import Gettask from '@/pages/gettask'
import Accomplish from '@/pages/accomplish'
import Business from '@/pages/business'
import Personal from '@/pages/personal'
// import Taskdetails from '@/pages/taskdetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/gettask',
      name: 'gettask',
      component: Gettask,
      meta: { title: '购物返利 ' }
    },
    {
      path: '/accomplish',
      name: 'accomplish',
      component: Accomplish,
      meta: { title: '完成任务 ' }
    },
    {
      path: '/business',
      name: 'business',
      component: Business,
      meta: { title: '个人信息 ' }
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal,
      meta: { title: '个人简介 ' }
    },
    {
      path: '/taskdetails',
      name: 'taskdetails',
      component: resolve => require([ '@/pages/taskdetails' ], resolve),
      meta: { title: '任务详情 ' }
    }
  ]
})
