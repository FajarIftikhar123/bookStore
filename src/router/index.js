// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import SignUp from'@/components/SignUp.vue'
import Login from '@/components/Login.vue'
import About from '@/views/About.vue'
import Product from '@/components/Product.vue'
import ProductCatalog from '@/components/ProductCatalog.vue'
import AdminDashboard from '@/components/AdminDashboard.vue'
import UserEntryTable from '@/components/UserEntryTable.vue'
import Order from '@/components/Order.vue'
import AdminHome from '@/components/AdminHome.vue'
import AddedBooks from '@/components/AddedBooks.vue'
import BookDetails from '@/components/BookDetails.vue'
import Cart from '@/components/Cart.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        
          path: '/home',
          name: 'ProductCatalog',
          component:ProductCatalog
        
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
  
  //  FOR ADMINDASHBOARD ROUTES 
  {
    path: '/admin',
    name: 'AdminDashboard',
    component:AdminDashboard
  },
 
  {
    path: '/user',
    name: 'UserEntryTable',
    component:UserEntryTable
  },
  {
    path: '/order',
    name: 'Order',
    component:Order
  },
  {
    path: '/adminhome',
    name: 'AdminHome',
    component:AdminHome
  },
  {
    path: '/addedbooks',
    name: 'AddedBooks',
    component:AddedBooks
  },
  {
    path: '/BookDetails/:bookId', 
    name: 'BookDetails',
    component: BookDetails,
  },

  {
    path: '/BookDetails/cart', 
    name: 'Cart',
    component: Cart,
  },

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
