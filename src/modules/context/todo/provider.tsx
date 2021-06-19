import { useMemo, createContext, useReducer, useContext } from 'react';

import { GeneralModel, TodoModel } from '../../models';
import { IProviderProps } from '../rootState';
import { IState, initialState } from './state';
import { ActionType } from './actions';
import { reducer } from './reducer';
import { useGeneral } from '../general';

interface ITodoContext {
  state: IState;
  addTodo: (todo: TodoModel.ITodo) => void;
  removeTodo: (id: string) => void;
  fetchTodoList: () => void;
}

export const TodoContext = createContext<ITodoContext | null>(null);

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('TodoContext is not wrapped with TodoContext.Provider');
  }
  return context;
};

export const TodoProvider = (props: IProviderProps) => {
  const { deps } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { addToast } = useGeneral();

  const fetchTodoList = async () => {
    try {
      const list = await deps.apiService.getTodo();
      dispatch({ type: ActionType.ADD_TODO_LIST, payload: { list } });
    } catch (e) {
      addToast({ message: 'error', type: GeneralModel.ToastType.ERROR });
    }
  }

  const addTodo = (todo: TodoModel.ITodo) => {
    const id = new Date().toString();
    dispatch({ type: ActionType.ADD_TODO , payload: { todo: { ...todo, id } } });
    addToast({ message: 'success', type: GeneralModel.ToastType.SUCCESS });
  };

  const removeTodo = (id: string) => {
    dispatch({ type: ActionType.REMOVE_TODO , payload: { id } });
  };

  const value = useMemo(() => ({ state, addTodo, removeTodo, fetchTodoList }), [state]); // eslint-disable-line

  return <TodoContext.Provider value={value} {...props} />
};

