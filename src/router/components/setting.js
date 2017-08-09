import Setting from '@/components/setting/Setting'
import Info from '@/components/setting/component/Info'
import Notice from '@/components/setting/component/Notice'
import NoticeDetail from '@/components/setting/component/NoticeDetail'
import Catch from '@/components/setting/component/Catch'
import Aboutus from '@/components/setting/component/Aboutus'
import Counter from '@/components/setting/component/Counter'

const Router = {
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
    },
    {
      path: 'counter',
      component: Counter
    }
  ]
}

export default Router
