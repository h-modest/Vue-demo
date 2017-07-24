<template>
  <div class="aboutus">
    <goback-header :title="title"></goback-header>
    <div class="detail">
      <img :src="companyInfo.logo" class="logo" />
      <p class="title">{{ companyInfo.name }}</p>
      <p class="description">{{ companyInfo.description }}</p>
    </div>
  </div>
</template>

<script>

import gobackHeader from '@/components/common/gobackHeader'

export default {
  name: 'aboutus',
  data(){
    return {
      title: '关于我们',
      companyInfo: {
        name: '百家新闻',
        logo: require('@/assets/image/head/logo-baijia.png'),
        description: '收集各类趣事，网罗各类最新资讯，为用户提供第一实况',
      }
    }
  },
  components: {
    gobackHeader
  }
}
</script>
