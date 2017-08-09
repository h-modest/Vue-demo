import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Point from '@/components/point/Point'
import Author from '@/components/author/Author'
import Topic from '@/components/point/component/topic/Topic'
import Setting from './components/setting'

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
      component: Point,
      children: [
        {
          path: ':pointId/topic',
          component: Topic
        }
      ]
    },
    {
      path: '/author',
      component: Author
    },
    Setting
  ]
})
