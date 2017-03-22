<template lang="html">
  <div class="heji-warp">
		<div class="topbar-fixed">
			<div class="top-bar opacted-bar">
			    <i class="top-bar-back" onclick="history.back()"></i>
				<p class="top-bar-title"></p>
			</div>
		</div>

		<div class="heji-banner">
			<a href="javascript:;" class="slider-link"><img :src="banImg" alt="tupian"></a>
		</div>
		<div class="">
			<div class="list-js pr">
				<p class="list-js-text hide-text">《围炉音乐会》是由四川卫视原创出品，北京银河映画制作完成的大型音乐故事秀节目。每周会邀请60—90年代的大咖歌手及其圈内朋友，通过采取歌手自筹演唱会的外景纪实秀，加现场live围炉音乐会的创新模式呈现。并邀请梁翘柏担任音乐总顾问，吉杰担任音乐会主理人，同时节目还配备了一线的编曲团队和顶级乐队，为观众打造豪华的视听盛宴。节目首批录制邀请到的嘉宾有：黎明、费玉清、辛晓琪、张宇、品冠、黄大炜、魏晨、雷颂德等八人，带给了现场观众一场场绝无仅有的视听风暴。</p>
				<div class="show-more"><i></i></div>
			</div>
			<ul>
				<li class="id-list-item border1px-bottom" v-for="item in songList">
					<a href="javascript:;" class="id-name">{{item.filename}}</a>
					<div class="id-down-cont">
						<a href="javascript:;" class="id-down-icon"></a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import apiPath from "../js/apiConfig"
export default {
  data(){
    return{
      wangyiMusicList:[],
      songList:[],
      banImg:""
    }
  },
  mounted:function(){
    var _this = this;
    this.$nextTick(function(){
      _this.showList()
    })
  },
  methods:{
    showList(){
				var _this=this
				var oDiv=$("<div></div>");
				var songList=[];
				$.ajax({
					type:'get',
					url:apiPath.delegateUrl+apiPath.kugouRootPath+"/rank/info/"+_this.$route.params.pid,
					success:function(data){
						oDiv.html(data);
						oDiv.find(".panel-songslist-item").each(function(ind,ele){
							var songsMsg=$(ele).find(".panel-songs-item-download em").text();
							songList.push(JSON.parse(songsMsg))
						})
						_this.pTitle=oDiv.find(".page-title").text()
						_this.banImg=oDiv.find(".rank-info-hd img").attr('src')
						_this.songList=songList;
            console.log(songList,"songList")
					}
				})
			},
    getWangyiMusicData(){
      var _this = this;

      // $.ajax({
      //   type:"get",
      //   url:"/api/playlist/detail?id=58451795",
      //   success:function (data) {
      //     var arr = [];
      //     var data = data.result.tracks;
      //     // _this.wangyiMusicList = data.result.tracks
      //     data.forEach(function(music,index){
      //       let item = {};
      //       item.musicImgSrc = music.artists[0].picUrl;
      //       item.name = music.name;
      //       item.src = music.mp3Url;
      //       arr.push(item)
      //     })
      //       _this.wangyiMusicList=arr
      //   },
      //   error:function(err){
      //     console.log(err)
      //   }
      // })
    },
    playMusic(item,index){
      this.$store.dispatch('showPlayer');
      this.$store.dispatch("isPlayTrue")
      this.$store.commit("getMusicData",{item,index});
      this.$store.commit("getSongList",this.wangyiMusicList)
    }
  }
}
</script>

<style lang="css">

</style>
