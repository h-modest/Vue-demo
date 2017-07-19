<template>
  <div class="home">
    <section class="header">
      <div class="logo">
        <img :src="logo" />
      </div>
      <div class="option">
        <img :src="require('/assets/image/head/logo-baidu.png')" @click="jump" />
        <img :src="require('/assets/image/head/icon-search.png')" />
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        logo: require('/assets/image/head/logo-baijia.png'),
      }
    },
    methods: {
      jump(){
        console.log(1);
        window.open("https://www.baidu.com")
      }
    }
  }
</script>

<style lang="css">
</style>
