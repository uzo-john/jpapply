import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue'
import Apply from '../views/Apply/Apply.vue'
import Confirm from '../views/Apply/Confirm.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/apply',
    name: 'apply',
    component: Apply
  },
  {
    path: '/contact us',
    name: 'contact us',
    component: Contact
  },
  {
    path: '/apply/:id',
    name: 'confirm',
    component: Confirm,
    props: true

  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
