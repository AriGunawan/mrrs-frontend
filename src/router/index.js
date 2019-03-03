import Vue from 'vue'
import Router from 'vue-router'
import Reservation from '@/components/Reservation'
import Rooms from '@/components/Rooms'
import NewRoom from '@/components/NewRoom'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Reservation',
      component: Reservation
    },
    {
      path: '/rooms',
      name: 'Rooms',
      component: Rooms
    },
    {
      path: '/rooms/new',
      name: 'NewRoom',
      component: NewRoom
    }
  ]
})
