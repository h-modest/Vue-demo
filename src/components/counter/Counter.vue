<template>
  <div class="counter">
      Counter is {{ count }}
      <button type="button" @click="increment">+5</button>
      <button type="button" @click="decrement">-3</button>
      <button type="button" @click="onSearch">-3</button>
  </div>
</template>

<script>
  import store from '@/store'
  import { mapGetters, mapActions } from 'vuex';
  export default {
    mame: 'counter',
    store,
    computed: mapGetters([ 'count' ]),
    methods: {
      ...mapActions([
        'increment',
        'decrement'
      ]),
      onSearch(){
        console.log(1);
      }
    }
  }
</script>
