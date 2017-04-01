import vue from 'vue'
import vuex from 'vuex'
import apiPath from "../js/apiConfig"
// import axios from 'axios'
vue.use(vuex)

const state = {
  showPlayer: false,
  isPlay: false,
  musicData: {
    currentAudio: {},
    currentIndex: null
  },
  songList: [],
  isNavShow: true
}
const mutations = {
  showPlayer(state, data) {
    console.log(data)
    state.showPlayer = true
  },
  isNavShowTrue(state) {
    state.isNavShow = true;
  },
  isNavShowFalse(state) {
    state.isNavShow = false;
  },
  isPlayTrue(state) {
    state.isPlay = true
  },
  isPlayafalse(state) {
    state.isPlay = false
  },
  togglePlay(state) {
    state.isPlay = !state.isPlay
  },
  getMusicData(state, musicData) {
    state.musicData.currentImg = musicData.item.musicImgSrc;
    state.musicData.currentName = musicData.item.name;
    state.musicData.currentSrc = musicData.item.src;
    state.musicData.currentIndex = musicData.index;
  },
  playSong(state, data) {
    console.log(data);
    state.musicData.currentAudio = data.audio;
    state.musicData.currentIndex = data.index;
  },
  getSongList(state, list) {
    state.songList = list;
  }
}
const actions = {
  showPlayer({
    commit
  }, data) {
    commit('showPlayer', data.data)
  },
  isPlayTrue({
    commit
  }) {
    commit("isPlayTrue")
  },
  next({
    commit
  }) {
    commit("next")
  },
  getSongData({
    commit
  }, data) {
    var hash = data.hash,
      index = data.index
    $.ajax({
      type: "get",
      // url: apiPath.delegateUrl + apiPath.apiSongs,
      url: "https://bird.ioliu.cn/v1/?url=http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo",
      data: {
        hash: data.hash
      },
      success(data) {
        // commit('showPlayer')
        var imgUrl = data.imgUrl.split('{size}').join('100'),
          title = data.songName,
          songUrl = data.url,
          singer = data.choricSinger,
          songLength = data.timeLength,
          currentLength = 0;
        var audio = {};
        audio.songUrl = songUrl;
        audio.imgUrl = imgUrl;
        audio.title = title;
        audio.songLength = songLength;
        audio.singer = singer;
        audio.currentLength = currentLength;
        commit('playSong', {
          audio,
          index
        })
      }
    })
  },
  next({
    dispatch,
    state
  }) {
    if (state.mutations.musicData.currentIndex == state.mutations.songList.length - 1) {
      state.mutations.musicData.currentIndex = 0;
    } else {
      state.mutations.musicData.currentIndex++;
    }
    var hash = state.mutations.songList[state.mutations.musicData.currentIndex].hash;
    var index = state.mutations.musicData.currentIndex;
    dispatch("getSongData", {
      hash,
      index
    })
    dispatch("isPlayTrue")
  }
}
const getters = {
  playerState(state) {
    return state.showPlayer
  },
  isPlay(state) {
    return state.isPlay
  },
  musicData(state) {
    return state.musicData
  },
  isNavShow(state) {
    return state.isNavShow
  }
}
export default new vuex.Store({
  modules: {
    mutations: {
      state,
      mutations,
      getters
    }
  },
  actions
})
