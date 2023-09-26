// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import SignUp from'@/components/SignUp.vue'
import Login from '@/components/Login.vue'
import About from '@/views/About.vue'
import Product from '@/components/Product.vue'
import HomeDisplayBooks from '@/components/HomeDisplayBooks.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component:About
      },
      {
        path: '/product',
        name: 'Product',
        component:Product
      }
    ],
  
    
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component:SignUp
  },
  {
    path: '/home',
    name: 'HomeDisplayBooks',
    component:HomeDisplayBooks
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
