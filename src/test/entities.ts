import { TodoModel } from '../modules/models';

export const getTodo_1 = (): TodoModel.ITodo => ({
  id: 1,
  title: 'todo test 1',
  description: 'description todo',
  status: false
});
