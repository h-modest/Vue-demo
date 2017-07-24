<template>
    <div class="notice">
      <goback-header :title="title"></goback-header>
      <div class="news-list" v-show="$route.path=='/setting/notice'">
        <ul>
          <li v-for="(vo, index) in list" :key="index">
            <router-link :to="{ path: 'notice/' + vo.id + '/detail' }">
              <p class="name">{{ vo.name }}</p>
              <p class="description">{{ vo.description }}</p>
              <span class="date">{{ vo.date }}</span>
            </router-link>
          </li>
        </ul>
        <div class="load-more">{{ loadMore ? '加载更多' : '没有更多' }}</div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>

  import gobackHeader from '@/components/common/gobackHeader'

  export default {
      name: 'notice',
      data(){
        return {
          title: '通知',
          newsList: [
            { id: '1', name: '系统消息', description: '恭喜你注册用户成功...', content: '恭喜你注册用户名成功，欢迎使用百家新闻！', date: '2017-7-24 11:00'},
            { id: '2', name: '系统消息', description: '恭喜你注册用户成功...', content: '恭喜你注册用户名成功，欢迎使用百家新闻！', date: '2017-7-24 11:00'},
            { id: '3', name: '系统通知', description: '你在作者推薦榜中被關注', content: '你在作者推薦榜中被關注成功，您当前的关注度为XXX', date: '2017-7-24 11:00'},
            { id: '4', name: '系统通知', description: '你在作者推薦榜中被關注', content: '你在作者推薦榜中被關注成功，您当前的关注度为XXX', date: '2017-7-24 11:00'},
            { id: '5', name: '系统通知', description: '你在作者推薦榜中被關注', content: '你在作者推薦榜中被關注成功，您当前的关注度为XXX', date: '2017-7-24 11:00'},
            { id: '6', name: '系统通知', description: '你在作者推薦榜中被關注', content: '你在作者推薦榜中被關注成功，您当前的关注度为XXX', date: '2017-7-24 11:00'},
          ],
          page: 1,
          loadMore: true,
          increment: 5,
        }
      },
      created(){
        document.addEventListener('scroll',()=>{
          let scrollTop = document.body.scrollTop;
          let maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          if (scrollTop == maxScroll && this.loadMore )
            this.loadMoreNews()
        },false);
      },
      computed: {
        list() {
          let increase = this.increment*this.page;
          return this.newsList.slice(0, increase);
        }
      },
      methods: {
        loadMoreNews(){
          let length = this.newsList.length;
          this.page++;
          if (this.page*this.increment >= length)
            this.loadMore = false
        }
      },
      components: {
        gobackHeader,
      }
  }
</script>
