import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../components/layouts/MainLayout.vue"),
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "/register",
          name: "register",
          component: () => import("../views/RegisterPage.vue"),
        },
        {
          path: "/contact",
          name: "contact",
          component: () => import("../views/ContactView.vue"),
        },
        {
          path: "/cart",
          name: "cart",
          component: () => import("../views/CartView.vue"),
        },
        {
          path: "/product-item/:id",
          name: "single-product",
          component: () => import("../components/pages/home/SingleProduct.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      component: () => import("../components/layouts/MainDashboardLayout.vue"),
      redirect: "dashboard/dashboard-home",
      children: [
        {
          path: "dashboard-home",
          name: "dashboard",
          component: () => import("../views/dashboard/EcommerceDashboard.vue"),
        },
        {
          path: "products",
          name: "products",
          component: () =>
            import("../views/dashboard/EcomDashboardProducts.vue"),
        },
        {
          path: "products/new/:id?",
          name: "newProduct",
          component: () => import("../views/dashboard/ProductNewItem.vue"),
        },
        {
          path: "customers",
          name: "customers",
          component: () =>
            import("../views/dashboard/EcomDashboardCustomers.vue"),
        },
        {
          path: "customer/new/:id?",
          name: "newCustomer",
          component: () => import("../views/dashboard/CustomerNewItem.vue"),
        },
        {
          path: "categories",
          name: "categories",
          component: () =>
            import("../views/dashboard/EcomDashboardCategories.vue"),
        },
        {
          path: "categories/new/:id?",
          name: "newCategory",
          component: () => import("../views/dashboard/CategoryNewItem.vue"),
        },
        {
          path: "orders",
          name: "orders",
          component: () => import("../views/dashboard/EcomDashboardOrders.vue"),
        },
        {
          path: "orders/new/:id?",
          name: "newOrder",
          component: () => import("../views/dashboard/OrderNewItem.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "admin-login",
      component: () => import("../views/dashboard/EcomLoginPage.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    (to.path == "/dashboard/dashboard-home" &&
      window.sessionStorage.getItem("TOKEN") === null) ||
    window.sessionStorage.getItem("TOKEN") === ""
  ) {
    next({ name: "admin-login" });
  } else {
    next();
  }
});

export default router;
