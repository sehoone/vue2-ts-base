import DefaultLayout from '@/layouts/sample/DefaultLayout.vue';
import Helloworld from '@/views/sample/helloworld/HelloWorld.vue';
import Helloworld2 from '@/views/sample/helloworld/HelloWorld2.vue';
import Composition from '@/views/sample/composition/Composition.vue';

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
