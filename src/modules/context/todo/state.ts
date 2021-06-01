import { TodoModel } from '../../../models';

export interface IState {
  todoList: TodoModel.ITodo[];
};

export const initialState: IState = {
  todoList: [
    {
      id: 1,
      title: 'post 1',
      description: 'this is a description',
      status: false,
    },
    {
      id: 2,
      title: 'post 2',
      description: 'this is a description 2',
      status: true,
    },
  ]
}
