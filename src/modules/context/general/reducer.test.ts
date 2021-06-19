import { reducer } from './reducer';
import { ActionType } from './actions';
import { initialState } from './state';

import { getToast_1 } from '../../../test/entities';

describe('general reducer', () => {
  it('should return state without mutation when no switch case match', () => {
    expect(reducer(initialState, { type: null, payload: null })).toBe(initialState);
  });

  it('should return new state on todo ActionType.ADD_TOAST', () => {
    expect(reducer(initialState, { type: ActionType.ADD_TOAST, payload: { toast: getToast_1() } })).toEqual({
      ...initialState,
      toastList: [
        ...initialState.toastList,
        getToast_1()
      ]
    });
  });

  it('should return new state on todo ActionType.REMOVE_TOAST', () => {
    const toastState = { toastList: [getToast_1()] };
    expect(reducer(toastState, { type: ActionType.REMOVE_TOAST, payload: { id: getToast_1().id } })).toEqual({
      toastList: []
    });
  });
});
