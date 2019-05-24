import Vue from 'vue';
import Vuex from 'vuex';
import { appGateway } from './modules/app-gateway-svc/index';
import { RootState } from './root-types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {

  },
  modules: {
    appGateway,
  },
});
