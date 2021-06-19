import { useMemo, createContext, useReducer, useContext } from 'react';

import { ENV } from '../../../constants';
import { GeneralModel } from '../../models';
import { IProviderProps } from '../rootState';
import { IState, initialState } from './state';
import { ActionType } from './actions';
import { reducer } from './reducer';

export const GeneralContext = createContext<
  {
    state: IState;
    addToast: (todo: GeneralModel.IToast) => void;
  } | null
>(null);

export const useGeneral = () => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error('GeneralContext is not wrapped with GeneralContext.Provider');
  }
  return context;
};

export const GeneralProvider = (props: IProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToast = (toast: GeneralModel.IToast) => {
    const id = new Date().toString();
    dispatch({ type: ActionType.ADD_TOAST , payload: { toast: { ...toast, id } } });
    setTimeout(() => {}, ENV.TOAST_DELAY);
    dispatch({ type: ActionType.REMOVE_TOAST, payload: { id } });
  };

  const value = useMemo(() => ({ state, addToast }), [state]);

  return <GeneralContext.Provider value={value} {...props} />
};

