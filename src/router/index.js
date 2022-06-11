import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home/Home";
import User from "@/views/User/User";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User }
]

const router = new VueRouter({
  routes
})

export default router
