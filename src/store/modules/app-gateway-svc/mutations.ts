import { MutationTree } from 'vuex';
import * as types from './types';
import * as mutation from './types-mutations';

// eslint-disable-next-line import/prefer-default-export
export const mutations: MutationTree<types.ModuleState> = {
  [mutation.SET_HTTP_HEADER](state, payload: types.grpc.Metadata) {
    Object.assign(state, { httpHeader: payload });
    // state.httpHeader = payload;
  },
  [mutation.SET_GRPC_CLIENT](state, payload: types.AppGatewayServiceClient) {
    Object.assign(state, { grpcClient: payload });
  },
};
