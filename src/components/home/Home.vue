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
      <ul>
        <li v-for="(vo, index) in loadNewsList" :key="index">
          <img :src="vo.src" />
          <div class="description">
            <p class="title">{{ vo.title }}</p>
            <p class="detail">{{ vo.description }}</p>
          </div>
        </li>
      </ul>
      <span class="load-more" v-if="loadMore" @click="load">加载更多</span>
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
          { src: require('@/assets/image/select/beijing.jpg'), title: '标题1', description: '简介1简介1简介1简介1简介1简介1简介1简介1简介1简介1' },
          { src: require('@/assets/image/select/beijing.jpg'), title: '标题2', description: '简介1简介1简介1简介1简介1简介1简介1简介1简介1简介1' },
          { src: require('@/assets/image/select/beijing.jpg'), title: '标题3', description: '简介1简介1简介1简介1简介1简介1简介1简介1简介1简介1' },
          { src: require('@/assets/image/select/beijing.jpg'), title: '标题4', description: '简介1简介1简介1简介1简介1简介1简介1简介1简介1简介1' },
          { src: require('@/assets/image/select/beijing.jpg'), title: '标题5', description: '简介1简介1简介1简介1简介1简介1简介1简介1简介1简介1' },
          { src: require('@/assets/image/select/beijing.jpg'), title: '标题6', description: '简介1简介1简介1简介1简介1简介1简介1简介1简介1简介1' },
          { src: require('@/assets/image/select/beijing.jpg'), title: '标题7', description: '简介1简介1简介1简介1简介1简介1简介1简介1简介1简介1' }
        ],
        loadMore: true,
        page: 1,
        increment: 3,
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
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
