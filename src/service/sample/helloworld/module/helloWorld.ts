import { ActionTree, GetterTree, MutationTree, ActionContext } from 'vuex';
import { HellowModel } from '@/service/sample/helloworld/model/helloWorldModel';
import { getHellowText } from '@/service/sample/helloworld/api/helloWorld';

export interface State {
  helloText: string;
}

const state: State = {
  helloText: '',
};

const getters: GetterTree<State, undefined> = {
  getHelloText: (state) => state.helloText || '',
};

const mutations: MutationTree<State> = {
  setHelloText: (state: State, helloText: string) => {
    state.helloText = helloText ? helloText : '';
  },
};

const actions: ActionTree<State, undefined> = {
  async reqHelloText(
    store: ActionContext<State, undefined>
  ): Promise<HellowModel> {
    try {
      const data = await getHellowText();
      const { helloText } = data;

      // save helloText
      store.commit('setHelloText', helloText);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
