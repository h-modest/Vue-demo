<template>
  <div class="counter">
      <goback-header :title="title"></goback-header>
      <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
      Counter is {{ counter }} - {{ number }}
      <button type="button" @click="increment">+5</button>
      <button type="button" @click="decrement">-3</button>
      <button type="button" @click="add">+1</button>
      <button type="button" @click="reduce">-1</button>
      <button type="button" @click="onSearch">-3</button>
  </div>
</template>

<script>
  import gobackHeader from '@/components/common/gobackHeader'
  import { mapGetters, mapActions } from 'vuex';
  export default {
    mame: 'counter',
    data(){
      return {
        title: 'vuex简单计算',
      }
    },
    mounted(){
      this.drawPie();
    },
    computed: {
      ...mapGetters({
        counter: 'count',
        number: 'number'
      })
    },
    methods: {
      ...mapActions([
        'increment',
        'decrement',
        'add',
        'reduce'
      ]),
      onSearch(){
        store.dispatch('decrement').then(count => {
          console.log(count);
        })
      },
      drawPie(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
              // title: { text: '环形图' },
              tooltip: {
                 trigger: 'item',
                 formatter: "{a} <br/>{b}: {c} ({d}%)"
               },
               legend: {
                 orient: 'vertical',
                 x: 'left',
                 data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
               },
               series: [{
                 name:'访问来源',
                 type:'pie',
                 radius: ['50%', '70%'],
                 avoidLabelOverlap: false,
                 label: {
                   normal: {
                     show: false,
                     position: 'center'
                   },
                   emphasis: {
                     show: true,
                     textStyle: {
                       fontSize: '30',
                       fontWeight: 'bold'
                     }
                   }
                 },
                 labelLine: {
                   normal: {
                     show: false
                   }
                 },
                 data:[
                   {value:335, name:'直接访问'},
                   {value:310, name:'邮件营销'},
                   {value:234, name:'联盟广告'},
                   {value:135, name:'视频广告'},
                   {value:1548, name:'搜索引擎'}
                 ]
               }]
          });
      }
    },
    components: {
      gobackHeader
    }
  }
</script>
