import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../components/layouts/MainLayout.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginPage.vue')
        },
      ]
    },
    {
      path: '/dashboard',
      component: () => import('../components/layouts/MainDashboardLayout.vue'),
      redirect: 'dashboard/dashboard-home',
      children: [
        {
          path: 'dashboard-home',
          name: 'dashboard',
          component: () => import('../views/dashboard/EcommerceDashboard.vue')
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/dashboard/EcomDashboardProducts.vue')
        },
        {
          path: 'products/new/:id?',
          name: 'newProduct',
          component: () => import('../views/dashboard/ProductNewItem.vue')
        },
        {
          path: 'customers',
          name: 'customers',
          component: () => import('../views/dashboard/EcomDashboardCustomers.vue')
        },
        {
          path: 'categories',
          name: 'categories',
          component: () => import('../views/dashboard/EcomDashboardCategories.vue')
        },
        {
          path: 'categories/new/:id?',
          name: 'newCategory',
          component: () => import('../views/dashboard/CategoryNewItem.vue')
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('../views/dashboard/EcomDashboardOrders.vue')
        }
      ]
    }
  ]
})

export default router
