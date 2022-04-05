<template>
  <div class="goods-list" >
      <!-- {{goods}} -->
      <goods-list-item v-for="(item, index) in goods" :key="index" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name:'GoodsList',
  data() {
    return {

    }
  },
  components: {
      GoodsListItem
  },
  props: {
      goods: {
          type: Array,
          default() {
              return []
          }
      }
  }
}
</script>

<style>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>
