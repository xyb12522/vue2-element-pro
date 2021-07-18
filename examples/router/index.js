import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/d3js',
    name: 'd3js',
    component: () =>
      import(/* webpackChunkName: "D3" */ '../views/d3/d3.vue'),
  },
  {
    path: '/resource',
    name: 'resource',
    component: () =>
      import(/* webpackChunkName: "D3" */ '../views/resource/resource.vue'),
  },
  {
    path: '/component',
    component: Home,
    children: [
      {
        path: '/',
        component: () =>
          import(/* webpackChunkName: "component" */ '../views/component.vue'),
      },
      {
        path: 'changelog',
        name: 'changelog',
        component: () => import(/* webpackChunkName: "" */ '../views/changelog/changelog.vue'),
      },
      {
        path: 'installation',
        name: 'installation',
        component: () => import(/* webpackChunkName: "" */ '../views/installation/installation.vue'),
      },
      {
        path: 'quickstart',
        name: 'quickstart',
        component: () =>
          import(/* webpackChunkName: "" */ '../views/quickstart/quickstart.vue'),
      },
      {
        path: 'layout',
        component: () =>
          import(/* webpackChunkName: "" */ '../views/layout/layout.vue'),
      },
      {
        path: 'table',
        name: 'table',
        component: () =>
          import(/* webpackChunkName: "" */ '../views/table/table.vue'),
      },
      {
        path: 'form',
        name: 'form',
        component: () =>
          import(/* webpackChunkName: "" */ '../views/form/form.vue'),
      },
      {
        path: 'select',
        name: 'select',
        component: () =>
          import(/* webpackChunkName: "" */ '../views/select/select.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
