import Vue from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './store';

import vuetify from '@/plugins/vuetify';
import VueCompositionAPI from '@vue/composition-api';
import { PiniaVuePlugin } from 'pinia';
import { setupRouterGuard } from '@/router/guard';

// composition-api for vue2
Vue.use(VueCompositionAPI);
Vue.use(PiniaVuePlugin);
Vue.config.productionTip = false;

// 라우터 가드(router before/after) setup
setupRouterGuard(router);

new Vue({
  router,
  pinia,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
