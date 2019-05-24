import { Commit, ActionPayload } from 'vuex';
import { ModuleState } from './types';
import * as mutation from './types-mutations';
import * as consts from '../../../consts/general';
import {
  RootState,
  AppGatewayServiceRequest,
  AppGatewayServiceClient,
  grpc,
} from '../../root-types';


interface ActionContext {
  state: ModuleState;
  rootState: RootState;
  commit: Commit;
  payload?: ActionPayload;
}

export const setNewClient = ({ state, commit }: ActionContext): any => {
  const address: string | undefined = process.env.VUE_APP_HOST_NAME;
  const hostname: string = address == null ? '' : address;

  if (hostname.length === 0) {
    // TODO not sure what to do here
    console.error('setNewClient: VUE_APP_HOST_NAME env var not loaded');
  }

  // eslint-disable-next-line max-len
  const client: AppGatewayServiceClient = new AppGatewayServiceClient(hostname, null, null);
  commit(mutation.SET_GRPC_CLIENT, client);
};

export const setNewHttpHeader = ({ state, commit }: ActionContext): any => {
  let token: string | null = window.localStorage.getItem(consts.LOCAL_STORAGE_TOKEN_KEY);
  let authType: string = consts.USER_AUTH;

  if (token == null) {
    token = window.btoa(
      `${process.env.VUE_APP_DUMMY_EMAIL}:${process.env.VUE_APP_DUMMY_PASSWORD}`,
    );
    authType = consts.BASIC_AUTH;
  }

  const metadata: grpc.Metadata = { authorization: `${authType}${token}` };
  commit(mutation.SET_HTTP_HEADER, metadata);
};

export const getStatus = ({ state, payload }: ActionContext): any => {
  const request: AppGatewayServiceRequest = new AppGatewayServiceRequest();
  state.grpcClient.getStatus(request, state.httpHeader, (err, res) => {
    console.log('err', err);
    console.log('res', res);
  });
};
