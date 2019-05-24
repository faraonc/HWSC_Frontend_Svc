import { Module } from 'vuex';
import { state } from './states';
import * as actions from './actions';
import { mutations } from './mutations';
import { ModuleState } from './types';
import { RootState } from '../../root-types';

// namespace name is set to the module name: appGateway
const namespaced: boolean = true;

// eslint-disable-next-line import/prefer-default-export
export const appGateway: Module<ModuleState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};
