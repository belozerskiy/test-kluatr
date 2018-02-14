import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Main from "@/components/Main";
import Profile from "@/components/Profile";
import Orders from "@/components/Orders";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/",
      name: "Main",
      component: Main,
      children: [
        {
          path: "/profile",
          name: "Profile",
          component: Profile
        },
        {
          path: "/orders",
          name: "Orders",
          component: Orders
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem("user");

  if (to.path !== "/login" && !user) {
    return next("/login");
  } else if (to.path === "/") {
    return next("/orders");
  } else if (to.path === "/login" && user) {
    return next("/orders");
  }

  if (!to.name) return next("/orders");
  return next();
});

export default router;
