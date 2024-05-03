import { Purchase } from '@app-types/Purchase';

export enum PURCHASE_HISTORY_ACTION_TYPES {
  SET_PURCHASE_HISTORY = 'SET_PURCHASE_HISTORY',
}

export type PurchaseHistoryActionTypes = {
  type: PURCHASE_HISTORY_ACTION_TYPES.SET_PURCHASE_HISTORY;
  payload: { purchases: Purchase[] };
};
