import { createRouter, createWebHistory } from "vue-router"
import accountbook from "./views/AccountBook.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "accountbook",
      component: accountbook,
    },
  ]
})


export default router