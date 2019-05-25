import Vue from 'vue';
import Vuex from 'vuex';
import { gateway } from './modules/gateway/index';
import { RootState } from './types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {

  },
  modules: {
    gateway,
  },
});
