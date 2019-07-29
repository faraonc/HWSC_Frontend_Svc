import { AppGatewayServiceClient } from '@hwsc/hwsc-api-blocks/protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svcServiceClientPb';
import * as grpc from 'grpc-web';

export interface RootState {
}

export interface GatewayState extends RootState{
  grpcClient: AppGatewayServiceClient;
  authHeader: grpc.Metadata;
}
