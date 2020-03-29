import Vue from 'vue'
import VueRouter from 'vue-router'
import LisArticle from '../views/LisAriticle.vue'
import CreateAriticle from '../views/CreateAriticle.vue'
import EditArticle from '../views/EditArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "home",
    redirect: '/articles/index'
  },
  {
    path: '/articles/index',
    name: "list-articles",
    component: LisArticle
  },
  {
    path: '/articles/create',
    name: "create-articles",
    component: CreateAriticle
  },
  {
    path: '/articles/:id/edit',
    name: 'edit-articles',
    component: EditArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
