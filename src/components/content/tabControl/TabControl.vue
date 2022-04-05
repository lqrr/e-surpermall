<template>
  <div class="tab-control">
      <div v-for="(item, index) in titles" 
        :key="index" 
        class="tab-control-item"
        :class="{active: index === currentIndex}"
        @click="itemClick(index)"
        >
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  components: {
  },
  props: {
      titles: {
          type: Array,
          default() {
              return []
          }
      }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
      //外面向组件内传数据 props 里面向外面传数据 $emit
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    z-index: 9
  }
  .tab-control-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .tab-control-item span {
    padding: 5px
  }
  .active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
