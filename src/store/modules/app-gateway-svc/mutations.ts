import { MutationTree } from 'vuex';
import { ModuleState } from './types';
import * as mutation from './types-mutations';
import { AppGatewayServiceClient, grpc } from '../../root-types';

// eslint-disable-next-line import/prefer-default-export
export const mutations: MutationTree<ModuleState> = {
  [mutation.SET_HTTP_HEADER](state, payload: grpc.Metadata) {
    Object.assign(state, { httpHeader: payload });
    // state.httpHeader = payload;
  },
  [mutation.SET_GRPC_CLIENT](state, payload: AppGatewayServiceClient) {
    Object.assign(state, { grpcClient: payload });
  },
};
