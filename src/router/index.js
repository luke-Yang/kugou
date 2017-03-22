import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      // name: 'home',
      component: require("../components/home.vue")
    },
    {
      path: '/paihang',
      // name: 'home',
      component: require("../components/paihang.vue")
    },
    {
      path: '/gedan',
      // name: 'home',
      component: require("../components/gedan.vue")
    },
    {
      path: '/geshou',
      // name: 'home',
      component: require("../components/geshou.vue")
    },
    {
      path: '/wangyiyun/:pid',
      name: 'wangyiyun',
      component: require("../components/wangyiyun.vue")
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ],
  linkActiveClass: "active",
  scrollBehavior: () => ({
    y: 0
  }),
  mode: 'history',
})
