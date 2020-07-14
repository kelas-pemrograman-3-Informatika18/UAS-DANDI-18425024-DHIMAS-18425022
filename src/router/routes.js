const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', component: () => import('pages/Register.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'rumah', name: 'dashboard', component: () => import('pages/Index.vue') },
      { path: 'inputpasien', name: 'inputPasien', component: () => import('pages/InputPasien.vue') },
      { path: 'formedit/:id', name: 'formEditPasien', component: () => import('pages/FormEdit.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
