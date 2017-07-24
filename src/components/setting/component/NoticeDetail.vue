<template>
  <div class="notice-detail">
    <p class="name">{{ newsDetail.name }}</p>
    <p class="date">{{ newsDetail.date }}</p>
    <p class="detail">{{ newsDetail.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'notice-detail',
  data(){
    return {
      newsList: [
        { id: '1', name: '系统消息', description: '恭喜你注册用户成功...', content: '恭喜你注册用户名成功，欢迎使用百家新闻！', date: '2017-7-24 11:00'},
        { id: '2', name: '系统消息', description: '恭喜你注册用户成功...', content: '恭喜你注册用户名成功，欢迎使用百家新闻！', date: '2017-7-24 11:00'},
        { id: '3', name: '系统通知', description: '你在作者推薦榜中被關注', content: '你在作者推薦榜中被關注成功，您当前的关注度为XXX', date: '2017-7-24 11:00'},
        { id: '4', name: '系统通知', description: '你在作者推薦榜中被關注', content: '你在作者推薦榜中被關注成功，您当前的关注度为XXX', date: '2017-7-24 11:00'},
        { id: '5', name: '系统通知', description: '你在作者推薦榜中被關注', content: '你在作者推薦榜中被關注成功，您当前的关注度为XXX', date: '2017-7-24 11:00'},
        { id: '6', name: '系统通知', description: '你在作者推薦榜中被關注', content: '你在作者推薦榜中被關注成功，您当前的关注度为XXX', date: '2017-7-24 11:00'},
      ],
    }
  },
  computed: {
    newsDetail(){
      const { newsId } = this.$router.history.current.params;
      return this.newsList.filter((k) => { return k.id === newsId })[0]
    }
  },
}
</script>
