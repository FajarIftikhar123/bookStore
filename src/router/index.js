// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import SignUp from'@/components/SignUp.vue'
import Login from '@/components/Login.vue'
import About from '@/views/About.vue'
import Product from '@/components/Product.vue'
import ProductCatalog from '@/components/ProductCatalog.vue'
import UserEntryTable from '@/components/UserEntryTable.vue'
import Order from '@/components/Order.vue'
import AdminHome from '@/components/AdminHome.vue'
import AddedBooks from '@/components/AddedBooks.vue'
import BookDetails from '@/components/BookDetails.vue'
import Cart from '@/components/Cart.vue'
import UserTable from '@/components/UserTable.vue'
import Whislist from '@/components/Whislist.vue'

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
      }, {
        path: '/Whislist', 
        name: 'Whislist',
        component: Whislist,
      },
      {
        path:'/cart',
        name:'Cart',
        component:Cart
      },{
        path: '/BookDetails/:bookId', 
        name: 'BookDetails',
        component: BookDetails,
      },

    ],
   
    
 
  
    
  },

  {
    path: '/Dashboard',
    component: () => import('@/layouts/admin/Default.vue'),
    children: [
      {
        path: '',
        name: 'UserTable',
        component:UserTable
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
        path: '/addedbooks',
        name: 'AddedBooks',
        component:AddedBooks
      },
      {
        path: '/adminhome',
        name: 'AdminHome',
        component:AdminHome
      },
      
      


    ]

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
 
  

 



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
