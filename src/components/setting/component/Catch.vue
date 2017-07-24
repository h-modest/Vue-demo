<template>
  <div class="catch">
    <goback-header :title="title"></goback-header>
    <dl class="group">
      <dd v-for="(vo, index) in group" :key="index" @click="clear(vo.func)">{{ vo.title }}</dd>
    </dl>
  </div>
</template>

<script>
  import gobackHeader from '@/components/common/gobackHeader'

  export default {
    name: 'catch',
    data(){
      return {
        title: '缓存',
        group: [
          { title: '图片缓存', func: 'image' },
          { title: '用户信息缓存', func: 'userInfo' },
        ]
      }
    },
    methods: {
      clear(key){
        console.log(' '+key+' catch has clear!');
      },
    },
    components: {
      gobackHeader
    }
  }
</script>
