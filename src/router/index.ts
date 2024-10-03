import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/pages/Index.vue'
import AboutUs from '@/pages/AboutUs.vue'
import Event from '@/pages/Event.vue'
import Challenges from '@/pages/Challenges.vue'
import Contact from '@/pages/Contact.vue'
import Partners from '@/pages/Partners.vue'

// Define routes
const routes: Array<RouteRecordRaw> = [
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
    path: '/challenges',
    name: 'Challenges',
    component: Challenges
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
    path: '/document/:fileName',
    name: 'DownloadDocument',
    beforeEnter: (to, _from, next) => {
      const fileName = to.params.fileName as string;
      downloadFile(fileName);
      next(false); // prevent navigation
    },
    component: { template: '' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Helper function for downloading files
function downloadFile(fileName: string) {
  const link = document.createElement('a')
  link.href = `/documents/${fileName}` // Adjust the path based on your file structure
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default router
