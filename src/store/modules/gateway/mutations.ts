import { MutationTree } from 'vuex';
import * as mutation from './types-mutations';
import { AppGatewayServiceClient, grpc, GatewayState } from '../../types';

export const mutations: MutationTree<GatewayState> = {
  [mutation.SET_AUTH_HEADER](state, payload: grpc.Metadata) {
    Object.assign(state, { authHeader: payload });
  },
  [mutation.SET_GRPC_CLIENT](state, payload: AppGatewayServiceClient) {
    Object.assign(state, { grpcClient: payload });
  },
};
