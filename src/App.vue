<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="home" :class="{'open-search': searchOpen}">
      <div class="wrap" :class="{ fold: menuOpen}">
        <section class="header">
          <div class="logo">
            <router-link to="/"><img :src="logo" /></router-link>
          </div>
          <div class="option">
            <img  class="tool jump" :src="require('@/assets/image/head/logo-baidu.png')" @click="jump" />
            <span class="tool look" @click="search"><i class="fa fa-search"></i></span>
            <span class="tool toggle-menu" @click="toggleMenu">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </span>
          </div>
          <div class="search">
            <div class="head">
              <div class="details">
                <input v-model="keyword" />
                <span class="extend" @click="onSearch"><i class="fa fa-search"></i></span>
              </div>
              <span class="cancel-search" @click="cancelSearch"></span>
            </div>
            <div class="search-content">
              <table v-if="searchContent">
                <thead>
                  <th v-for="(item, index) in searchContent.header" :key="index">{{ item }}</th>
                </thead>
                <tbody>
                  <tr v-for="vo in searchContent.data" :key="vo.id">
                    <td>{{ vo.name }}</td>
                    <td>{{ vo.sex ? '女' : '男' }}</td>
                    <td>{{ vo.age }}</td>
                    <td>{{ vo.tel }}</td>
                  </tr>
                </tbody>
              </table>
              <p class="no-more" v-else>暂无内容</p>
            </div>
          </div>
        </section>
        <section class="content">
          <ul class="navigation" v-show="isNavigationOpen">
            <li v-for="(item, index) in navigation" :key="index">
              <router-link :to="item.url">{{ item.title }}</router-link>
            </li>
          </ul>
          <router-view></router-view>
        </section>
        <section class="footer">
          <img :src="logo" class="logo" />
          <div class="contact">
            <p>联系我们：Baijia@baidu.com</p>
            <p>百家新闻独家出品</p>
          </div>
        </section>
      </div>
      <section :class="{open: menuOpen}" class="menu">
        <ul class="list">
          <li v-for="(vo, index) in menuList" :key="index">{{ vo }}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>

import { filterList } from '@/lib/utils'
import _ from 'lodash'

export default {
  name: 'app',
  data() {
    return {
      menuOpen: false,
      logo: require('@/assets/image/head/logo-baijia.png'),
      menuList: [
        '京州市...',
        '巨头',
        '人物',
        '电商',
        '创投',
        '智能硬件',
        '互联网+',
        'P2P',
        '前沿技术',
        '游戏',
      ],
      navigation: [
        { title: '精选', url: '/' },
        { title: '争鸣', url: '/point' },
        { title: '作者', url: '/author' },
        { title: '设置', url: '/setting' },
      ],
      keyword: '',
      searchOpen: false,
      isNavigationOpen: true,
      dataList: {
        header: ['姓名', '性别', '年龄', '电话'],
        data: [
          {id: 1, name: 'huangxueqian', age: 18, tel: '15260090138', birthday: '19920924', sex: 0, email: '464492470@qq.com'},
          {id: 2, name: 'chengjianming', age: 25, tel: '18720086308', birthday: '19900523', sex: 0, email: ''},
          {id: 3, name: 'wangfeng', age: 20, tel: '05965626576', birthday: '19950401', sex: 1, email: '348699835@qq.com'},
          {id: 4, name: 'tianshuqin', age: 24, tel: '05965666576', birthday: '19940701', sex: 1, email: 'h-modest@hotmail.com'}
        ]
      },
      searchContent: {},
    }
  },
  created(){
    this.load();
  },
  updated(){
    this.load();
  },
  watch: {
    keyword(newValue){
      const { data, header } = this.dataList;
      let filter_key = [ 'name', 'sex', 'age', 'tel' ];
      let filter = {};
      let searchData = filterList(data, newValue, filter_key);
      if (searchData.length > 1) {
        filter.header = header;
        filter.data = searchData;
      }
      this.searchContent = filter;
    }
  },
  methods: {
    jump(){
      window.open("https://www.baidu.com")
    },
    search(){
      this.searchOpen = true;
    },
    toggleMenu(){
      this.menuOpen = !this.menuOpen;
    },
    onSearch(){
      console.log(2);
    },
    cancelSearch() {
      this.keyword = '';
      this.searchOpen = false;
    },
    load() {
      let path = this.$router.history.current.path;
      var newArr = this.navigation.filter(function(item){
        return item.url === path;
      });
      this.isNavigationOpen = newArr.length != 0;
    },
  }
}
</script>
