
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('layouts/MidLayout.vue'),
        children: [
          {
            path: '/',
            component: () => import('layouts/MainWindow.vue'),
            children: [
              { path: '/accounts', component: () => import('pages/AccountsPage.vue') },
              { path: '/tttrrr', component: () => import('pages/AccountsPage.vue') }
            ]
          },
        ]
      },
      {
        path: '/item/',
        component: () => import('layouts/MidLayout.vue'),
        children: [
          { path: '', component: () => import('pages/ItemPage.vue') }
        ]
      },
      {
        path: '/item/:id',
        component: () => import('layouts/MidLayout.vue'),
        children: [
          { path: '', component: () => import('pages/ItemPage.vue') }
        ]
      },
      {
        path: '/settings',
        component: () => import('layouts/MidLayout.vue'),
        children: [
          { path: '', component: () => import('pages/SettingsPage.vue') }
        ]
      },

      {
        path: '/members',
        component: () => import('layouts/MidLayout.vue'),
        children: [
          { path: '', component: () => import('pages/MembersPage.vue') }
        ]
      },
      {
        path: '/prices/:accId',
        component: () => import('layouts/MidLayout.vue'),
        children: [
          { path: '', component: () => import('pages/PricesPage.vue') }
        ]
      },
      {
        path: '/myprices',
        component: () => import('layouts/MidLayout.vue'),
        children: [
          { path: '', component: () => import('pages/PricesMyPage.vue') }
        ]
      },
      {
        path: '/category',
        component: () => import('layouts/MidLayout.vue'),
        children: [
          { path: '', component: () => import('pages/CategoryPage.vue') }
        ]
      },
      {
        path: '/packs',
        component: () => import('layouts/MidLayout.vue'),
        children: [
          { path: '', component: () => import('pages/PackPage.vue') }
        ]
      },
      {
        path: '/packinfo',
        component: () => import('layouts/MidLayout.vue'),
        children: [
          { path: '', component: () => import('pages/PackInfoPage.vue') }
        ]
      },
      {
        path: '/delivery',
        component: () => import('layouts/MidLayout.vue'),
        children: [
          { path: '', component: () => import('pages/DeliveryPage.vue') }
        ]
      },
    ]
  },
  {
    path: '/auth/callback',
    component: () => import('layouts/RootLayout.vue'),
    children: [{path: '', component: () => import('pages/service/AuthCallback.vue')}]
  },
  {
    path: '/logs',
    component: () => import('layouts/DebugLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LogsPage.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [{ path: '', component: () => import('pages/AuthPage.vue') }]
  },
  {
    path: '/height',
    component: () => import('layouts/HeightLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HeightPage.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ErrorNotFound.vue') }
    ]
  },
]

export default routes
