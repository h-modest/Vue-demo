<template>
  <div class="topic">
    <goback-header :title="title"></goback-header>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
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
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  },
  components: {
    gobackHeader
  }
}
</script>
