import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from '@/interfaces/states';
import { gateway } from '@/store/modules/gateway/gateway';

Vue.use(Vuex);

const debug: boolean = process.env.NODE_ENV !== 'production';

export default new Vuex.Store<RootState>({
  modules: {
    gateway,
  },
  strict: debug,
});
