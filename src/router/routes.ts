import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: { name: 'dashboard', path: '/dashboard' },
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('pages/Dashboard/DashboardIndex.vue'),
      },
      {
        name: 'transactions',
        path: 'transactions',
        component: () => import('pages/Transactions/TransactionsIndex.vue'),
      },
      {
        name: 'transfers',
        path: 'transfers',
        component: () => import('pages/Transfers/TransfersIndex.vue'),
      },
      {
        name: 'accounts',
        path: 'accounts',
        component: () => import('pages/Accounts/AccountsIndex.vue'),
      },
      {
        name: 'profile',
        path: 'profile',
        component: () => import('pages/Profile/ProfileIndex.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
