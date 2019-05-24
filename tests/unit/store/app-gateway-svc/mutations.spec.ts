import { mutations } from '@/store/modules/app-gateway-svc/mutations';
import { state } from '@/store/modules/app-gateway-svc/states';
import * as action from '@/store/modules/app-gateway-svc/types-actions';
import * as mutation from '@/store/modules/app-gateway-svc/types-mutations';


describe(mutation.SET_HTTP_HEADER, () => {
  const { SET_HTTP_HEADER } = mutations;

  it('should equal to payload', () => {
    const hostname: string = 'test-address';
    SET_HTTP_HEADER(state, hostname);
    expect(state.httpHeader).toEqual(hostname);
  });
});

// https://github.com/grpc/grpc-web/pull/540
// need to wait for next release for grpc-web
// describe(mutation.SET_GRPC_CLIENT, () => {
//   const { SET_GRPC_CLIENT } = mutations;
//
//   it('should equal to AppGatewayServiceClient object', () => {
//     let hostname: string | undefined = process.env.VUE_APP_HOST_NAME;
//     hostname = hostname == null ? '' : hostname;
//     const client: AppGatewayServiceClient = new AppGatewayServiceClient(hostname, null, null);
//     console.log('-----', client)
//     SET_GRPC_CLIENT(state, client);
//     expect(state.httpHeader).toEqual(client);
//   });
// });
