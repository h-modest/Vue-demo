<template>
  <div>
    <div class="point" v-show="$route.path=='/point'">
      <div class="question">
        <p class="title">热点城市房价会否持续上升</p>
        <p class="periods">610期</p>
        <div class="debate">
          <div class="square">
            <p>正方</p>
            <div class="percent snum"></div>
            <p>75%</p>
          </div>
          <div class="conside">
            <p>反方</p>
            <div class="percent cnum"></div>
            <p>25%</p>
          </div>
        </div>
        <router-link :to="{ path: 'point/' + topicId + '/topic' }" class="topic">进入专题></router-link>
      </div>
      <div class="gambit">
        <ul>
          <li v-for="(vo, index) in points" :key="index">
            <div class="time">{{ vo.times }}</div>
            <p class="title">{{ vo.title }}</p>
            <p class="message">{{ vo.msg }}</p>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'point',
  data(){
    return {
      topicId: '1',
      points: [{
        times: '609期',
        title: '提高个税起征点真能减负嘛？',
        msg: '3月7日，财政部部长肖捷在发布会上表示，个人所得税免征额将根据消费水平综合测算，...'
      }, {
        times: '609期',
        title: '提高个税起征点真能减负嘛？',
        msg: '3月7日，财政部部长肖捷在发布会上表示，个人所得税免征额将根据消费水平综合测算，...'
      }, {
        times: '609期',
        title: '提高个税起征点真能减负嘛？',
        msg: '3月7日，财政部部长肖捷在发布会上表示，个人所得税免征额将根据消费水平综合测算，...'
      }]
    }
  }
}
</script>
