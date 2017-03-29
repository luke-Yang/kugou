<template lang="html">
  <div class="player">
  <div class="bot-player">
    <audio :src="musicData.currentAudio.songUrl" autoplay preload id="audio">
          Your browser does not support the audio element.
        </audio>
     <div class="warp pr">
         <a href="javascript:;" class="song-msg">
             <div class="play-avat">
               <img :src="musicData.currentAudio.imgUrl" alt="">
             </div>
             <div class="play-msg">
                 <p class="play-til" v-text="musicData.currentAudio.title"></p>
                  <p class="play-er" v-text="musicData.currentAudio.singer"></p>
             </div>
         </a>
         <div class="play-control">
             <i class="song-close" :class="{'song-start':isPlay}" @click="togglePlay"></i>
             <i class="song-next" @click="next"></i>
             <i class="song-download"></i>
         </div>
     </div>
 </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return{

    }
  },
  computed:mapGetters(['musicData','isPlay']),
  mounted(){
    var _this = this;
      this.$nextTick(function(){
        var audio = document.getElementById("audio")
        var timer = setInterval(function(){
          if(audio.ended){
            //  _this.$store.commit("isPlayafalse");
            _this.$store.dispatch("next")
             clearInterval(timer)
            //  timer()
          }
        },1000)

      })
    },
    methods:{
      togglePlay(){
        this.$store.commit("togglePlay");
        var isPlay = this.$store.getters.isPlay;
        var audio = document.getElementById("audio")
        console.log(isPlay)
        if(isPlay){
          audio.play()
        }else {
          audio.pause()
        }
      },
      next(){
        this.$store.dispatch("next")
      }
    },
    isPlayEnd(){

    }
}

</script>

<style lang="css" scoped>
.song-start{
    background: url(../assets/images/play_icon.png) no-repeat center/100% auto !important;
}
.player{height: 4.7rem}
  .bot-player{
    z-index: 999!important;
  }
</style>
