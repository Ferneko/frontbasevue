import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListaUsuarios from '../views/Usuarios/ListaUsuarios'
import NovoUsuario from '../views/Usuarios/NovoUsuario'
import EditarUsuario from '../views/Usuarios/EditarUsuario'

import ListaPermissoes from '../views/Permissoes/ListaPermissoes'
import NovaPermissao from '../views/Permissoes/NovaPermissao'
import EditarPermissao from '../views/Permissoes/EditarPermissao'

import ListaGruposUsuarios from '../views/GruposUsuario/ListaGruposUsuarios'
import NovoGrupoUsuario from '../views/GruposUsuario/NovoGrupoUsuario'
import EditarGrupoUsuario from '../views/GruposUsuario/EditarGrupoUsuario'

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
    path: '/Permissoes',
    name: 'ListaPermissoes',
    component: ListaPermissoes
  },
  {
    path: '/Permissao',
    name: 'NovaPermissao',
    component: NovaPermissao
  },
  {
    path: '/Permissao/:id',
    name: 'EditarPermissao',
    component: EditarPermissao
  },
  {
    path: '/GruposUsuarios',
    name: 'ListaGruposUsuarios',
    component: ListaGruposUsuarios
  },
  {
    path: '/GrupoUsuario',
    name: 'NovoGrupoUsuario',
    component: NovoGrupoUsuario
  },
  {
    path: '/GrupoUsuario/:id',
    name: 'EditarGrupoUsuario',
    component: EditarGrupoUsuario
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
