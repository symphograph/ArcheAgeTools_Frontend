
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ErrorNotFound.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [{ path: '', component: () => import('pages/AuthPage.vue') }]
  },
  {
    path: '/item/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ItemPage.vue') }
    ]
  },
  {
    path: '/item/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ItemPage.vue') }
    ]
  },
  {
    path: '/account',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AccountPage.vue') }
    ]
  },
  {
    path: '/height',
    component: () => import('layouts/HeightLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HeightPage.vue') }
    ]
  },
  {
    path: '/members',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MembersPage.vue') }
    ]
  },
  {
    path: '/prices/:accId',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PriceList.vue') }
    ]
  },
  {
    path: '/prices',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PriceList.vue') }
    ]
  },
  {
    path: '/category',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CategoryPage.vue') }
    ]
  },
]

export default routes
