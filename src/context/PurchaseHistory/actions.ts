import { PurchaseHistoryStateInterface } from './state';
import { PurchaseHistoryActionTypes, PURCHASE_HISTORY_ACTION_TYPES } from './action-types';

export const PurchaseHistoryActions = (
  state: PurchaseHistoryStateInterface,
  action: PurchaseHistoryActionTypes,
): PurchaseHistoryStateInterface => {
  switch (action.type) {
    case PURCHASE_HISTORY_ACTION_TYPES.SET_PURCHASE_HISTORY: {
      const { purchases: purchasesToAppend } = action.payload;
      const newPurchases = [...purchasesToAppend];

      return {
        ...state,
        purchases: newPurchases,
      };
    }
    default: {
      throw new Error('Unhandled action type');
    }
  }
};
