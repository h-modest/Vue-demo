<template>
  <div class="home">
    <section class="banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(vo, index) in bannerList" :key="index">
          <img :src="vo.src" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
    <section class="news">
      <div class="switch-tab">
        <span class="icon" @click="tabChange(1)" :class="{ active: tabList }"><i class="fa fa-th-large"></i></span>
        <span class="icon" @click="tabChange(0)" :class="{ active: !tabList }"><i class="fa fa-desktop"></i></span>
      </div>
      <ul :class=" tabList? 'list' : 'image-text' ">
        <li v-for="(vo, index) in loadNewsList" :key="index">
          <img :src="vo.src" />
          <div class="description">
            <p class="title">{{ vo.title }}</p>
            <p class="detail">{{ vo.description }}</p>
            <p class="date">{{ vo.editor }} | {{ vo.date }}</p>
          </div>
        </li>
      </ul>
      <span class="load-more" v-if="loadMore" @click="load">点击加载更多</span>
      <div v-else class="no-more">没有更多</div>
    </section>
  </div>
</template>

<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'home',
    data() {
      return {
        bannerList: [
          { src: require('@/assets/image/select/a.jpg'), url: '/' },
          { src: require('@/assets/image/select/b.jpg'), url: '/' },
          { src: require('@/assets/image/select/c.jpg'), url: '/' },
          { src: require('@/assets/image/select/d.jpg'), url: '/' },
        ],
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true
        },
        newsList: [
          { src: require('@/assets/image/select/beijing.jpg'), title: '标题1', description: '简介1简介1简介1简介1简介1简介1简介1简介1简介1简介1', date: '2017-05-01 20:28:55', editor: '新浪' },
          { src: require('@/assets/image/select/beijing.jpg'), title: '标题2', description: '简介1简介1简介1简介1简介1简介1简介1简介1简介1简介1', date: '2017-05-01 20:28:55', editor: '凤凰' },
          { src: require('@/assets/image/select/beijing.jpg'), title: '标题3', description: '简介1简介1简介1简介1简介1简介1简介1简介1简介1简介1', date: '2017-05-01 20:28:55', editor: '新浪' },
          { src: require('@/assets/image/select/beijing.jpg'), title: '标题4', description: '简介1简介1简介1简介1简介1简介1简介1简介1简介1简介1', date: '2017-05-01 20:28:55', editor: '凤凰' },
          { src: require('@/assets/image/select/beijing.jpg'), title: '标题5', description: '简介1简介1简介1简介1简介1简介1简介1简介1简介1简介1', date: '2017-05-01 20:28:55', editor: '新浪' },
          { src: require('@/assets/image/select/beijing.jpg'), title: '标题6', description: '简介1简介1简介1简介1简介1简介1简介1简介1简介1简介1', date: '2017-05-01 20:28:55', editor: '凤凰' },
          { src: require('@/assets/image/select/beijing.jpg'), title: '标题7', description: '简介1简介1简介1简介1简介1简介1简介1简介1简介1简介1', date: '2017-05-01 20:28:55', editor: '新浪' }
        ],
        loadMore: true,
        page: 1,
        increment: 3,
        tabList: true,
      }
    },
    computed: {
      loadNewsList(){
        let increase = 1 + this.increment*(this.page - 1);
        return this.newsList.slice(0, increase);
      }
    },
    methods: {
      load(){
        let length = this.newsList.length;
        let total = this.increment*(this.page) + 1;
        if (total > length) {
          this.loadMore = false
        }
        this.page++
      },
      tabChange(key){
        this.tabList = !!key;
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
