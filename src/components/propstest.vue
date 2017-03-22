<template lang="html">
<div class="footer-container">
    <h4>我是测试子组件</h4>
    <h1 v-for="item in message">{{item.label}}</h1>
    <button @click="increment">点击我给父组件计算值</button>
     <img :src="collectImg" alt="collectImg" @click="toggle">
</div>
</template>

<script>
 var pic1 = require("../assets/ph.png");
 var pic2 = require("../assets/pr1.jpg")
 console.log(pic1)
export default {
  data() {
    return {
      collectImg: pic1,
      isFlag: false
    }
  },
  props: ['message'],
  mounted: function() {
    var _this = this;
    this.$nextTick(function() {
      console.log(_this.message)
    })
  },
  methods: {
    increment() {
      this.$emit('increment')
    },
    toggle() {
      var _this = this;
      _this.isFlag = !_this.isFlag
      if (_this.isFlag) {
        _this.collectImg = pic2
      } else {
        _this.collectImg = pic1
      }

    }
  }
}
</script>

<style lang="css">
</style>
