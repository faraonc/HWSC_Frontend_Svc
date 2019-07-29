import { MutationTree } from 'vuex';
import { AppGatewayServiceClient } from '@hwsc/hwsc-api-blocks/protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svcServiceClientPb';
import * as grpc from 'grpc-web';
import * as mutation from '@/store/modules/gateway/types-mutations';
import { GatewayState } from '@/interfaces/states';

// TODO unit test
export const mutations: MutationTree<GatewayState> = {
  [mutation.SET_GRPC_CLIENT](state, payload: AppGatewayServiceClient) {
    Object.assign(state, { grpcClient: payload });
  },
  [mutation.SET_AUTH_HEADER](state, payload: grpc.Metadata) {
    Object.assign(state, { authHeader: payload });
  },
};
