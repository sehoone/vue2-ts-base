const DefaultLayout = (): Promise<typeof import('*.vue')> =>
  import(/* webpackChunkName: "sample" */ '@/layouts/sample/DefaultLayout.vue');
const Helloworld = (): Promise<typeof import('*.vue')> =>
  import(
    /* webpackChunkName: "sample" */ '@/views/sample/helloworld/HelloWorld.vue'
  );
const Helloworld2 = (): Promise<typeof import('*.vue')> =>
  import(
    /* webpackChunkName: "sample" */ '@/views/sample/helloworld/HelloWorld2.vue'
  );
const Composition = (): Promise<typeof import('*.vue')> =>
  import(
    /* webpackChunkName: "sample" */ '@/views/sample/composition/Composition.vue'
  );

export default [
  {
    path: '/sample',
    component: DefaultLayout,
    redirect: '/sample/helloWorld',

    children: [
      {
        path: '/sample/helloWorld',
        component: Helloworld,
        meta: {
          title: 'helloWorld',
        },
      },
      {
        path: '/sample/helloWorld2',
        component: Helloworld2,
        meta: {
          title: 'helloworld2',
        },
      },
      {
        path: '/sample/composition',
        component: Composition,
        meta: {
          title: 'composition',
        },
      },
    ],
  },
];
