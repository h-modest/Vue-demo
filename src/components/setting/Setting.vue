<template>
  <div class="setting">
    <ul class="list">
      <li v-for="(vo, index) in list" :key="index">
        <router-link :to="vo.url">
          <span class="name">{{ vo.name }}</span>
          <span class="icon"><i class="fa fa-angle-right"></i></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data() {
    return {
      list: [
        { name: '个人信息', url: '/info' },
        { name: '通知', url: '/notice' },
        { name: '缓存', url: '/catch' },
        { name: '关于我们', url: '/about' },
        { name: '退出登录', url: '/logout' },
      ]
    }
  }
}
</script>
