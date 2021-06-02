import { useMemo, createContext, useReducer, useContext } from 'react';

import { TodoModel } from '../../models';
import { IProviderProps } from '../rootState';
import { IState, initialState } from './state';
import { ActionType } from './actions';
import { reducer } from './reducer';

export const TodoContext = createContext<
  {
    state: IState;
    addTodo: (todo: TodoModel.ITodo) => void;
    removeTodo: (index: number) => void;
  } | null
>(null);

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('TodoContext is not wrapped with TodoContext.Provider');
  }
  return context;
};

export const TodoProvider = (props: IProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todo: TodoModel.ITodo) => {
    dispatch({ type: ActionType.ADD_TODO , payload: { todo } });
  };

  const removeTodo = (id: number) => {
    dispatch({ type: ActionType.REMOVE_TODO , payload: { id } });
  };

  const value = useMemo(() => ({ state, addTodo, removeTodo }), [state]);

  return <TodoContext.Provider value={value} {...props} />
};

