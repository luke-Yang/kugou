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
  <transition  :name="transitionName">
        <router-view></router-view>
  </transition>

  <player v-if='$store.getters.playerState'></player>
  <!-- <propstest :message="data" v-on:increment="incrementTotal"></propstest> -->
  <!--<p>{{fromChild}}</p>-->
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
      fromChild:0,
      transitionName:""
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
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      var _this = this;
     switch (to.path) {
       case "/home":
         _this.transitionName = "slide-right"
         break;
       case "/paihang":
           _this.transitionName = "slide-left"
           break;
       default:
          _this.transitionName = "slide-right"
     }
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
.slide-right-enter-active{
  transition: all 1s ease-in;
  -webkit-transition:all 1s ease-in;
}
.slide-right-enter,.slide-right-leave-active{
  transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
}
.slide-right-leave-active{
  transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  -webkit-transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  opacity: 0
}
/*.slide-right-leave{
  transform: translateX(100%);
}*/
.slide-left-enter-active{
  transition: transform 0.5s ease-in;
}
.slide-left-enter{
  transform: translateX(100%);
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
