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
      name: 'home',
      component: require("../components/home.vue")
    },
    {
      path: '/paihang',
      name: 'paihang',
      component: require("../components/paihang.vue")
    },
    {
      path: '/gedan',
      component: require("../components/gedan.vue")
    },
    {
      path: '/geshou',
      // name: 'home',
      component: require("../components/geshou.vue")
    },
    {
      path: '/wangyiyun/:pid/type/:type',
      name: 'wangyiyun',
      component: require("../components/wangyiyun.vue")
    },
    {
      path: '/search',
      component: require("../components/search.vue")
    },
    {
      path: '/animation',
      // name: 'wangyiyun',
      component: require("../components/animation.vue")
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '*',
      name: '404',
      component: require("../components/404.vue")
    },

  ],
  linkActiveClass: "active",
  scrollBehavior: () => ({
    y: 0
  }),
  mode: 'history',
})
