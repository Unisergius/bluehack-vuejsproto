import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import AboutUs from '@/pages/AboutUs.vue'
import Event from '@/pages/Event.vue'
import Contact from '@/pages/Contact.vue'
import Partners from '@/pages/Partners.vue'

const routes = [
  {
      path: '/',
      name: 'Index',
      component: Index
  },
  {
      path: '/about',
      name: 'About',
      component: AboutUs
  },
  {
      path: '/eventInfo',
      name: 'Event',
      component: Event
  },
  {
      path: '/contact',
      name: 'Contact',
      component: Contact
  },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners
  },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: '/'
  
  }
]
  
const router = createRouter({
    history: createWebHistory(),
    routes
})
  
export default router