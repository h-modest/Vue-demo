<template>
  <div class="counter">
      <goback-header :title="title"></goback-header>
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
      }
    },
    components: {
      gobackHeader
    }
  }
</script>
