import { ActionType } from './actions';
import { IState } from './state';
import { GeneralModel } from '../../models';

export const reducer = (state: IState, action: GeneralModel.IAction<ActionType>) => {
  switch (action.type) {
    case ActionType.ADD_TODO: {
      return { todoList: [...state.todoList, action.payload.todo] };
    }
    case ActionType.REMOVE_TODO: {
      return { todoList: state.todoList.filter(todo => action.payload.id !== todo.id) };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
};

