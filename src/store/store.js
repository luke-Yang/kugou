import vue from 'vue'
import vuex from 'vuex'
// import axios from 'axios'
vue.use(vuex)

const state = {
  showPlayer: false,
  isPlay: false,
  musicData: {
    currentSrc: null,
    currentName: null,
    currentImg: null,
    currentIndex: null
  },
  songList: []
}
const mutations = {
  showPlayer(state, data) {
    console.log(data)
    state.showPlayer = true
  },
  isPlayTrue(state) {
    state.isPlay = true
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
  getSongList(state, list) {
    state.songList = list;
  },
  next(state) {
    if (state.musicData.currentIndex == state.songList.length - 1) {
      state.musicData.currentIndex = 0
    } else {
      state.musicData.currentIndex++
    }
    state.musicData.currentImg = state.songList[state.musicData.currentIndex].musicImgSrc;
    state.musicData.currentName = state.songList[state.musicData.currentIndex].name;
    state.musicData.currentSrc = state.songList[state.musicData.currentIndex].src;
    // state.musicData.currentIndex = state.musicData.currentIndex;
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
