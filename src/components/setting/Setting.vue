<template>
  <div class="setting">
    <ul class="list" v-show="$route.path=='/setting'">
      <li v-for="(vo, index) in list" :key="index">
        <router-link :to="vo.url">
          <span class="name">{{ vo.name }}</span>
          <span class="icon"><i class="fa fa-angle-right"></i></span>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data() {
    return {
      list: [
        { name: '个人信息', url: '/setting/info' },
        { name: '通知', url: '/setting/notice' },
        { name: '缓存', url: '/setting/catch' },
        { name: '关于我们', url: '/setting/aboutus' },
        { name: '退出登录', url: '/setting/logout' },
        { name: 'vuex计算', url: '/counter' },
      ],
    }
  },
}
</script>
