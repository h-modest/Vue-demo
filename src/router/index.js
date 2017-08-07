import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Point from '@/components/point/Point'
import Author from '@/components/author/Author'
import Topic from '@/components/point/component/topic/Topic'
import Setting from '@/components/setting/Setting'
import Info from '@/components/setting/component/Info'
import Notice from '@/components/setting/component/Notice'
import NoticeDetail from '@/components/setting/component/NoticeDetail'
import Catch from '@/components/setting/component/Catch'
import Aboutus from '@/components/setting/component/Aboutus'
import Counter from '@/components/counter/Counter'

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
      path: '/counter',
      component: Counter
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
          children: [
            {
              path: ':newsId/detail',
              component: NoticeDetail
            }
          ]
        },
        {
          path: 'catch',
          component: Catch
        },
        {
          path: 'aboutus',
          component: Aboutus
        }
      ]
    }
  ]
})
