import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from '@/interfaces/rootstate';
import { appGateway } from './modules/app-gateway/index';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {},
  modules: {
    appGateway,
  },
});
