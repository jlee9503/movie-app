import HomeVue from "@/views/Home.vue";
import MovieInfo from "@/views/MovieInfo.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeVue
  },
  {
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieInfo
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router