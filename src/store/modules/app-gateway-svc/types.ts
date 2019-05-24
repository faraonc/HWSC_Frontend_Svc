import { AppGatewayServiceClient } from '@hwsc/hwsc-api-blocks-lisa-test/protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svcServiceClientPb';
import { AppGatewayServiceRequest } from '@hwsc/hwsc-api-blocks-lisa-test/protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svc_pb';
import * as grpc from 'grpc-web';

// contains interfaces and general types

export { AppGatewayServiceClient, AppGatewayServiceRequest, grpc };

export interface ModuleState {
  grpcClient: AppGatewayServiceClient;
  httpHeader: grpc.Metadata;
}
