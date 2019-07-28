import { Module } from 'vuex';
import { RootState } from '@/interfaces/rootstate';
import { AppGatewayState } from '../../types';
import { state } from './state';
import { mutations } from './mutations';
import * as actions from './actions';

// namespace name is set to the module name: appGateway
const namespaced: boolean = true;

export const appGateway: Module<AppGatewayState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};
