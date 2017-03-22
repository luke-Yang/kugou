<template lang="html">
  <div class="index-sings-list top-change-data">
          <div class="list-js pr">
          	<p class="list-js-text hide-text">《围炉音乐会》是由四川卫视原创出品，北京银河映画制作完成的大型音乐故事秀节目。每周会邀请60—90年代的大咖歌手及其圈内朋友，通过采取歌手自筹演唱会的外景纪实秀，加现场live围炉音乐会的创新模式呈现。并邀请梁翘柏担任音乐总顾问，吉杰担任音乐会主理人，同时节目还配备了一线的编曲团队和顶级乐队，为观众打造豪华的视听盛宴。节目首批录制邀请到的嘉宾有：黎明、费玉清、辛晓琪、张宇、品冠、黄大炜、魏晨、雷颂德等八人，带给了现场观众一场场绝无仅有的视听风暴。</p>
          	<div class="show-more"><i></i></div>
          </div>
          <!-- <script>$(".show-more").click(function(){alert(1)})</script> -->
          <ul>
              <li class="id-list-item border1px-bottom" @click="playMusic(item,index)" v-for="(item,index) in xgList">
                  <a href="javascript:;" class="id-name">{{item.name}}</a>
                  <div class="id-down-cont">
                      <a href="javascript:;" class="id-down-icon"></a>
                  </div>
              </li>
          </ul>
      </div>
</template>

<script>
// import apiPath from "../js/apiConfig"
import musicData from "../js/musicData"
export default {
  data(){
    return{
      xgList:[]
    }
  },
  mounted:function(){
      this.$nextTick(function(){
        this.getListData();
      });
    },
  methods:{
    playMusic(item,index){
      this.$store.dispatch('showPlayer',{data:"data,hh"});
      this.$store.dispatch("isPlayTrue")
      this.$store.commit("getMusicData",{item,index});
      this.$store.commit("getSongList",this.xgList)
    },
    getListData(){
      this.xgList = musicData;
    }
  }
}
</script>

<style lang="css">
</style>
