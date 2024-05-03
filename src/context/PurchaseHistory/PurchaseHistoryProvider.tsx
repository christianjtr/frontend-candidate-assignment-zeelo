import { useReducer } from 'react';
import { PurchaseHistoryContext } from './PurchaseHistoryContext';
import { PurchaseHistoryState } from './state';
import { PurchaseHistoryActions } from './actions';

export interface PurchaseHistoryProviderProps {
  children: React.ReactNode;
}

export const PurchaseHistoryProvider: React.FC<PurchaseHistoryProviderProps> = ({ children }): React.ReactElement => {
  const [state, dispatch] = useReducer(PurchaseHistoryActions, PurchaseHistoryState);

  return <PurchaseHistoryContext.Provider value={{ state, dispatch }}>{children}</PurchaseHistoryContext.Provider>;
};
