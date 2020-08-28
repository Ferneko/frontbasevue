import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListaUsuarios from '../views/Usuarios/ListaUsuarios'
import NovoUsuario from '../views/Usuarios/NovoUsuario'
import EditarUsuario from '../views/Usuarios/EditarUsuario'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Usuarios',
    name: 'ListaUsuarios',
    component: ListaUsuarios
  },
  {
    path: '/Usuario',
    name: 'NovoUsuario',
    component: NovoUsuario
  },
  {
    path: '/Usuario/:id',
    name: 'EditarUsuario',
    component: EditarUsuario
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
