import { AppGatewayServiceClient } from '@hwsc/hwsc-api-blocks-lisa-test/protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svcServiceClientPb';
import { AppGatewayServiceRequest } from '@hwsc/hwsc-api-blocks-lisa-test/protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svc_pb';
import * as grpc from 'grpc-web';

// have a single place of import
export { AppGatewayServiceClient, AppGatewayServiceRequest, grpc };

// empty object because we have no root states right now
export interface RootState {}

// store module names
export const appGateway = 'appGateway';
