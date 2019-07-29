import { Module } from 'vuex';
import { GatewayState, RootState } from '@/interfaces/states';
import { state } from '@/store/modules/gateway/state';
import { mutations } from '@/store/modules/gateway/mutations';
import { actions } from '@/store/modules/gateway/actions';

// namespace name is set to the module name: gateway
const namespaced: boolean = true;

export const gateway: Module<GatewayState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};
