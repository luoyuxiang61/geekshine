import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Navi from '@/components/Navi'
import Downloader from '@/components/Downloader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/navi',
      name: 'Navi',
      component: Navi
    },
    {
      path: '/',
      name: 'Downloader',
      component: Downloader
    }
  ]
})
