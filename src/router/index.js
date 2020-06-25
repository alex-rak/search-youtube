import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "@/layouts/MainLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: MainLayout,
    redirect: { name: "MainPage" },
    children: [
      {
        path: "/",
        name: "MainPage",
        component: () => import(/* webpackChunkName: "MainPage" */"@/pages/Main"),
      },
      {
        path: "/favourites",
        name: "Favourites",
        component: () => import(/* webpackChunkName: "Favourites" */"@/pages/Favourites"),
      },
    ],
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import(/* webpackChunkName: "Auth" */"@/pages/Auth"),
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem("youtube-token");
  const userName = window.localStorage.getItem("youtube-user");
  if ((!token || !userName) && to.name !== "Auth") {
    next({ name: "Auth" });
  } else {
    next();
  }
});

export default router;
