import { createContext } from 'react';
import { PurchaseHistoryState, PurchaseHistoryStateInterface } from './state';
import { PurchaseHistoryActionTypes } from './action-types';

export type PurchaseHistoryContextType = {
  state: PurchaseHistoryStateInterface;
  dispatch: React.Dispatch<PurchaseHistoryActionTypes>;
};

export const PurchaseHistoryContext: React.Context<PurchaseHistoryContextType> =
  createContext<PurchaseHistoryContextType>({
    state: PurchaseHistoryState,
    dispatch: () => {},
  });
