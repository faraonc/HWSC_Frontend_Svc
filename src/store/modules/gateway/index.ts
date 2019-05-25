import { Module } from 'vuex';
import { state } from './state';
import * as actions from './actions';
import { mutations } from './mutations';
import { RootState, GatewayState } from '../../types';

// namespace name is set to the module name: gateway
const namespaced: boolean = true;

export const gateway: Module<GatewayState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};
