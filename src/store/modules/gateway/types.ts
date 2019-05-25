import { AppGatewayServiceClient, grpc } from '../../types';

export interface ModuleState {
  grpcClient: AppGatewayServiceClient;
  httpHeader: grpc.Metadata;
}
