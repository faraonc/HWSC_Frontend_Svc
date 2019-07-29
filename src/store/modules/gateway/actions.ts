import { Commit, ActionPayload } from 'vuex';
import { AppGatewayServiceClient } from '@hwsc/hwsc-api-blocks/protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svcServiceClientPb';
import { AppGatewayServiceRequest } from '@hwsc/hwsc-api-blocks/protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svc_pb';
import * as grpc from 'grpc-web';
import * as headers from '@/consts/headers';
import * as constants from '@/consts/keys';
import * as mutation from '@/store/modules/gateway/types-mutations';
import * as action from '@/store/modules/gateway/types-actions';
import { GatewayState, RootState } from '@/interfaces/states';

interface ActionContext {
  state: GatewayState;
  rootState: RootState;
  commit: Commit;
  payload?: ActionPayload;
}

// TODO unit test
export const actions = {
  [action.INIT_AUTH_HEADER]({ state, commit }: ActionContext): any {
    let token: string | null = window.localStorage.getItem(constants.LOCAL_STORAGE_TOKEN_KEY);
    let authType: string = headers.USER_AUTH;

    if (!token) {
      const dummyEmail: string | undefined = process.env.VUE_APP_DUMMY_EMAIL;
      const dummyPassword: string | undefined = process.env.VUE_APP_DUMMY_PASSWORD;

      if (!dummyEmail || !dummyPassword) {
        // TODO route to error 50X page
        console.error('initAuthHeader: VUE_APP_DUMMY_EMAIL &/or VUE_APP_DUMMY_PASSWORD not loaded');
        return;
      }
      token = window.btoa(`${dummyEmail}:${dummyPassword}`);
      authType = headers.BASIC_AUTH;
    }

    const metadata: grpc.Metadata = { authorization: `${authType}${token}` };
    commit(mutation.SET_AUTH_HEADER, metadata);
  },

  [action.SET_NEW_CLIENT]({ state, commit }: ActionContext): any {
    const hostname: string = process.env.VUE_APP_HOST_NAME || '';

    if (!hostname) {
      // TODO route to error 50X page
      console.error('setNewClient: VUE_APP_HOST_NAME not loaded');
      return;
    }

    const client: AppGatewayServiceClient = new AppGatewayServiceClient(hostname, null, null);
    commit(mutation.SET_GRPC_CLIENT, client);
  },

  [action.GET_STATUS]({ state, payload }: ActionContext): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const request: AppGatewayServiceRequest = new AppGatewayServiceRequest();
      state.grpcClient.getStatus(request, state.authHeader, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
};
