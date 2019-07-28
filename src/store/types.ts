import { AppGatewayServiceClient } from '@hwsc/hwsc-api-blocks/protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svcServiceClientPb';
import { AppGatewayServiceRequest } from '@hwsc/hwsc-api-blocks/protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svc_pb';
import * as grpc from 'grpc-web';
import { RootState } from '@/interfaces/rootstate';

// have a single place of import
export { AppGatewayServiceClient, AppGatewayServiceRequest, grpc };

export interface AppGatewayState extends RootState{
  grpcClient: AppGatewayServiceClient;
  authHeader: grpc.Metadata;
}
