import { MutationTree } from 'vuex';
import * as mutation from './types-mutations';
import { AppGatewayServiceClient, grpc, AppGatewayState } from '../../types';

// TODO unit test
export const mutations: MutationTree<AppGatewayState> = {
  [mutation.SET_GRPC_CLIENT](state, payload: AppGatewayServiceClient) {
    Object.assign(state, { grpcClient: payload });
  },
  [mutation.SET_AUTH_HEADER](state, payload: grpc.Metadata) {
    Object.assign(state, { authHeader: payload });
  },
};
