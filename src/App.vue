<template>
<div id="app">
  <!-- <img src="./assets/logo.png"> -->
  <!--header-->
  <div class="head-comp">
    <a href="javascript:;" class="logo"></a>
    <a href="javascript:;" class="download-app-btn">下载酷狗</a>
    <!--<a href="javascript:;" class=""></a>-->
    <router-link to="/search" class="search-icon"></router-link>
  </div>
  <!-- nav -->
  <div class="top-nav" v-if="$store.getters.isNavShow">
    <ul>
      <li>
        <router-link to="/home" class="">新歌</router-link>
        <!-- <a href="javascript:;" class="active"></a> -->
      </li>
      <li>
        <router-link to="/paihang" class="">排行</router-link>
      </li>
      <li>
        <router-link to="/gedan" class="">歌单</router-link>
      </li>
      <!--<li>-->
        <!--<router-link to="/geshou" class="">歌手</router-link>-->
      <!--</li>-->
    </ul>
  </div>
  <router-view></router-view>
  <player v-if='$store.getters.playerState'></player>
  <!-- <propstest :message="data" v-on:increment="incrementTotal"></propstest> -->
  <p>{{fromChild}}</p>
</div>
</template>

<script>
import Player from '../src/components/player.vue'
import propstest from "../src/components/propstest.vue"
export default {
  name: 'app',
  data() {
    return {
      showPlayer: this.$store.getters.playerState,
      fromChild:0
    }
  },
  components: {
    Player,
    propstest
  },
  methods:{
    incrementTotal(){
      this.fromChild++;
    }
  }
}
</script>

<style>
@import "../static/reset.css";
@import "../static/style.css";
.index-sings-list,
.ph-items-list,
.gs-content {
  padding-top: 7rem;
}

.head-comp {
  position: fixed;
  top: 0;
  z-index: 15;
  width: 100%
}

.top-nav {
  position: fixed;
  left: 0;
  top: 3.5rem;
  background: white;
  z-index: 10
}

.heji-warp {
  margin-top: 3.5rem;
  z-index: 12;
  position: absolute;
}

.topbar-fixed {
  position: fixed;
  left: 0;
  top: 3.5rem;
  width: 100%;
  z-index: 11;
}


/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
