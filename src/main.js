// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import '@/style/index.less'
import App from './App'
import router from './router'

Vue.use(YDUI)
Vue.config.productionTip = false

// // 移动端点击事件300ms延迟
// const FastClick = require('fastclick')
// document.addEventListener('DOMContentLoaded', function () {
//   FastClick.attach(document.body)
// }, false)

// 添加路由导航守卫
router.beforeEach((to, from, next) => {
  // 路由发生改变时修改页面title
  if (to.meta.title) {
    document.title = to.meta.title || '首页'
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
