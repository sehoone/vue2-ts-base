import Vue from 'vue';
import Vuex from 'vuex';

import helloworld from '@/service/sample/helloworld/module/helloWorld';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    helloworld,
  },
});
