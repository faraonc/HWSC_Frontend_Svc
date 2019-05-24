import { AppGatewayServiceClient, grpc } from '../../root-types';

// eslint-disable-next-line import/prefer-default-export
export interface ModuleState {
  grpcClient: AppGatewayServiceClient;
  httpHeader: grpc.Metadata;
}
