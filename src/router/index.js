import Vue from 'vue'
import Router from 'vue-router'
import Omnifood from '@/components/Omnifood'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Omnifood',
      component: Omnifood
    }
  ]
})
