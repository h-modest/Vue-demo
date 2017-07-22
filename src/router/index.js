import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Point from '@/components/point/Point'
import Author from '@/components/author/Author'
import Topic from '@/components/topic/Topic'
import Setting from '@/components/setting/Setting'
import Info from '@/components/setting/component/Info'
import Notice from '@/components/setting/component/Notice'

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
      path: '/point',
      component: Point
    },
    {
      path: '/author',
      component: Author
    },
    {
      path: '/setting',
      component: Setting,
      children: [
        {
          path: 'info',
          component: Info,
        },
        {
          path: 'notice',
          component: Notice,
        }
      ]
    },
    {
      path: '/topic',
      component: Topic
    }
  ]
})
