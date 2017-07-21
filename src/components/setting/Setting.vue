<template>
  <div class="setting">
    <ul>
      <li v-for="(vo, index) in list" :key="index">
        <router-link :to="vo.url">
          <span class="name">{{ vo.name }}</span>
          <span class="icon"><i class="fa fa-angle-right"></i></span>
        </router-link>
      </li>
    </ul>
    <div class="logout">退出登录</div>
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
      ]
    }
  }
}
</script>
