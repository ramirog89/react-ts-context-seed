import { reducer } from './reducer';
import { ActionType } from './actions';
import { initialState } from './state';

import { getTodo_1 } from '../../../test/entities';

describe('todo reducer', () => {
  it('should return state without mutation when no switch case match', () => {
    expect(reducer(initialState, { type: null, payload: null })).toBe(initialState);
  });

  it('should return new state on todo ActionType.ADD_TODO', () => {
    expect(reducer(initialState, { type: ActionType.ADD_TODO, payload: { todo: getTodo_1() } })).toEqual({
      ...initialState,
      todoList: [
        ...initialState.todoList,
        getTodo_1()
      ]
    });
  });

  it('should return new state on todo ActionType.ADD_TODO_LIST', () => {
    expect(reducer(initialState, { type: ActionType.ADD_TODO_LIST, payload: { list: [getTodo_1()] } })).toEqual({
      ...initialState,
      todoList: [getTodo_1()]
    });
  });

  it('should return new state on todo ActionType.REMOVE_TODO', () => {
    expect(reducer({ todoList: [getTodo_1()] }, { type: ActionType.REMOVE_TODO, payload: { id: getTodo_1().id } })).toEqual({
      todoList: []
    });
  });
});
