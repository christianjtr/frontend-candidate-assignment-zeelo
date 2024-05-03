import { Purchase } from '@app-types/Purchase';

export interface PurchaseHistoryStateInterface {
  purchases: Purchase[];
}

export const PurchaseHistoryState: PurchaseHistoryStateInterface = {
  purchases: [],
};
