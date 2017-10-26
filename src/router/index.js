import Vue from 'vue'
import Router from 'vue-router'
import init from '@/components/mianshi/init'
import declineinvitation from '@/components/mianshi/declineInvitation'
import refusesuccess from '@/components/mianshi/refusesuccess'
import loseefficacy from '@/components/mianshi/loseefficacy'
import authentication from '@/components/mianshi/authentication'
import signin from '@/components/mianshi/signin'
import edit from '@/components/mianshi/edit'
import editfinish from '@/components/mianshi/editfinish'
import fail from '@/components/mianshi/fail'
import succeed from '@/components/mianshi/succeed'
import acceptInvitation from '@/components/mianshi/acceptInvitation'

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
      path: '/declineinvitation',
      name: 'declineinvitation',
      component: declineinvitation
    },
    {
      path: '/refusesuccess',
      name: 'refusesuccess',
      component: refusesuccess
    },
    {
      path: '/loseefficacy',
      name: 'loseefficacy',
      component: loseefficacy
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: authentication
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    },
    {
      path: '/editfinish',
      name: 'editfinish',
      component: editfinish
    },
    {
      path: '/succeed',
      name: 'succeed',
      component: succeed
    },
    {
      path: '/fail',
      name: 'fail',
      component: fail
    },
    {
      path: '/acceptInvitation',
      name: 'acceptInvitation',
      component: acceptInvitation
    },
  ]
})
