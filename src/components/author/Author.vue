<template>
  <div class="author">
    <ul class="business-card">
      <li v-for="(vo, index) in authors" :key="index">
        <img class="head-portrait" :src="vo.image" />
        <p class="title">{{ vo.name }}</p>
        <p class="introduce">{{ vo.introduce }}</p>
        <div class="follow">
          <span class="follower" :class="{ followed: vo.follow }" @click="follow(vo.id)">关注</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'author',
  data(){
    return {
      authors: [
        { id: 1, name: '变革家', image: require('@/assets/image/author/author.jpg'), introduce: '帮股权投资者把资产合理理好', follow: false },
        { id: 2, name: '懂懂笔记', image: require('@/assets/image/author/author.jpg'), introduce: '20年内财经媒体记录者', follow: false },
        { id: 3,  name: '变革家', image: require('@/assets/image/author/author.jpg'), introduce: '帮股权投资者把资产合理理好', follow: false },
        { id: 4, name: '移动硬糖', image: require('@/assets/image/author/author.jpg'), introduce: '有温度的繁逸乐团队', follow: false },
      ]
    }
  },
  methods: {
    follow(id){
      this.authors.map((k) => {
        if(k.id == id) {
          k.follow = !k.follow;
        }
      })
    }
  }
}
</script>
