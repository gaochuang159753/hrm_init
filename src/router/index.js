import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/Hello'
import init from '@/components/mianshi/init'
import declineInvitation from '@/components/mianshi/declineInvitation'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'init',
      component: init
    },
    {
      path: '/init',
      name: 'init',
      component: init
    },
    {
      path: '/declineInvitation',
      name: 'declineInvitation',
      component: declineInvitation
    },
  
  ]
})
