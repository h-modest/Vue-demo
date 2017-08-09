// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/less/index.less'
import './assets/less/home.less'
import './assets/less/point.less'
import './assets/less/author.less'
import './assets/less/setting.less'
import createHistory from 'history/createBrowserHistory'
import config from './config'
import APIHandler from './lib/api'
import store from './store'
// 引入echarts
import echarts from 'echarts'

global.browserHistory = createHistory()
global.API = new APIHandler(config)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
