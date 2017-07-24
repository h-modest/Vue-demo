<template>
  <div class="topic">
    <goback-header :title="title"></goback-header>
    话题专题部分 {{ $route.params.pointId }}
  </div>
</template>

<script>

import gobackHeader from '@/components/common/gobackHeader'

export default {
  name: 'topic',
  data(){
    return {
      title: '专题栏目',
    }
  },
  components: {
    gobackHeader
  }
}
</script>
