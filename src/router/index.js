import Vue from 'vue'
import Router from 'vue-router'
import Home from '/components/home/Home'
import News from '/components/news/News'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      component: News
    }
  ]
})
