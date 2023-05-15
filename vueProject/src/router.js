import { createRouter, createWebHistory } from "vue-router"
import accountbook from "./views/AccountBook.vue"
import accountdetail from "./views/AccountDetail.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "accountbook",
      component: accountbook,
    },
    {
      path: "/detail",
      name: "accountdetail",
      component: accountdetail,
    },
  ]
})


export default router