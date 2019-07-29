import * as action from '@/store/modules/gateway/types-actions';

export const MODULE = 'gateway';
export const INIT_AUTH_HEADER = `${MODULE}/${action.INIT_AUTH_HEADER}`;
export const SET_NEW_CLIENT = `${MODULE}/${action.SET_NEW_CLIENT}`;
export const GET_STATUS = `${MODULE}/${action.GET_STATUS}`;
