import DefaultLayout from '@/layouts/sample/DefaultLayout.vue';
import Helloworld from '@/views/sample/helloworld/HelloWorld.vue';

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
          requiresAuth: true,
          title: 'helloWorld',
        },
      },
    ],
  },
];
