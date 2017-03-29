<template lang="html">
  <div class="index-sings-list top-change-data">

    <swiper :options="swiperOption" class="swiper-body">
    <!-- slides -->
    <swiper-slide v-for="(img,index) in bannerList" :key="index">
    <img :src="img" alt="banner">
    </swiper-slide>

     <!--Optional controls-->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--<div class="swiper-button-next" slot="button-next"></div>-->
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper>


          <ul>
              <li class="id-list-item border1px-bottom" @click="playMusic(item,index)" v-for="(item,index) in xgList">
                  <a href="javascript:;" class="id-name">{{item.filename}}</a>
                  <div class="id-down-cont">
                      <a href="javascript:;" class="id-down-icon"></a>
                  </div>
              </li>
          </ul>
      </div>
</template>

<script>
 import apiPath from "../js/apiConfig"
//import musicData from "../js/musicData"
 import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data(){
    return{
      xgList:[],
      swiperOption:{
        autoplay: 3000,
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        mousewheelControl : true,
        observeParents:true,
      },
      bannerList:[]
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted:function(){
      var _this = this;
      this.$nextTick(function(){
        _this.showList();
        _this.$store.commit("isNavShowTrue");
      });
    },
  methods:{
    playMusic(item,index){
      var hash=item.hash;
      this.$store.dispatch('showPlayer',{data:"data,hh"});
      this.$store.dispatch("isPlayTrue");
      this.$store.dispatch("getSongData",{hash,index});
      this.$store.commit("getSongList",this.xgList)
    },
    showList(){
      var oDiv=$('<div></div>');
      var xgarr=[];
      var bannerList = [];
      var ind=0;
      var _this= this;
      $.ajax({
        type:'get',
        url:apiPath.delegateUrl+apiPath.kugouRootPath,
        success:function(data){
          oDiv.html(data);
          oDiv.find(".panel-songslist-item").each(function(ind,ele){
            var sonsData=JSON.parse($(ele).find(".panel-songs-item-download em").text())
            xgarr.push(sonsData)
          })
          oDiv.find(".swipe-wrap img").each(function(ind,ele){
            var bannerImgUrl=$(ele).attr('src')
            bannerList.push(bannerImgUrl)
          })
          _this.xgList=xgarr;
          _this.bannerList=bannerList;
        }
      })
    },
  }
}
</script>

<style lang="css">
  .swiper-body{
    height: 8.571428571428571rem !important;
  }
  .swiper-slide>img{
    width: 100% !important;
    height: 100% !important;
  }
</style>
