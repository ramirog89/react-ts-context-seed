import { TodoModel } from '../modules/models';

export const getTodo_1 = (): TodoModel.ITodo => ({
  id: 1,
  title: 'todo test 1',
  description: 'description todo',
  status: false
});

export const getTodo_2 = (): TodoModel.ITodo => ({
  id: 2,
  title: 'post 2',
  description: 'this is a description 2',
  status: true,
});
