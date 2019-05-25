import { Commit, ActionPayload } from 'vuex';
import * as mutation from './types-mutations';
import * as consts from '../../../consts/general';
import {
  GatewayState,
  RootState,
  AppGatewayServiceRequest,
  AppGatewayServiceClient,
  grpc,
} from '../../types';


interface ActionContext {
  state: GatewayState;
  rootState: RootState;
  commit: Commit;
  payload?: ActionPayload;
}

export const setNewClient = ({ state, commit }: ActionContext): any => {
  const hostname: string = process.env.VUE_APP_HOST_NAME || '';

  if (!hostname) {
    // TODO route to error 50X page
    console.error('setNewClient: VUE_APP_HOST_NAME not loaded');
    return;
  }

  const client: AppGatewayServiceClient = new AppGatewayServiceClient(hostname, null, null);
  commit(mutation.SET_GRPC_CLIENT, client);
};

export const initAuthHeader = ({ state, commit }: ActionContext): any => {
  let token: string | null = window.localStorage.getItem(consts.LOCAL_STORAGE_TOKEN_KEY);
  let authType: string = consts.USER_AUTH;

  if (!token) {
    const dummyEmail: string | undefined = process.env.VUE_APP_DUMMY_EMAIL;
    const dummyPassword: string | undefined = process.env.VUE_APP_DUMMY_PASSWORD;

    if (!dummyEmail || !dummyPassword) {
      // TODO route to error 50X page
      console.error('initAuthHeader: VUE_APP_DUMMY_EMAIL &/or VUE_APP_DUMMY_PASSWORD not loaded');
      return;
    }
    token = window.btoa(`${dummyEmail}:${dummyPassword}`);
    authType = consts.BASIC_AUTH;
  }

  const metadata: grpc.Metadata = { authorization: `${authType}${token}` };
  commit(mutation.SET_AUTH_HEADER, metadata);
};

export const getStatus = ({ state, payload }: ActionContext): any => {
  const request: AppGatewayServiceRequest = new AppGatewayServiceRequest();
  state.grpcClient.getStatus(request, state.authHeader, (err, res) => {
    console.log('err', err);
    console.log('res', res);
  });
};
