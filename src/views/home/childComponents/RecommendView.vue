<template>
  <div class="recommend">
      <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
          <div :href="item.href">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'RecomendView',
  props: {
      recommends: {
          type: Array,
          default() {
              return []
          }
      }
  },
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 5px solid #eee;
  }
  .recommend-item {
    flex: 1
  }
  .recommend-item img {
    width: 99%
  }
</style>
