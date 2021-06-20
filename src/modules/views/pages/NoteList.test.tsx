import { act, fireEvent, waitFor } from '@testing-library/react';
import { getTodo_1, getTodo_2 } from '../../../test/entities';
import { render } from '../../../test/render';

import { TodoContext } from '../../context/todo/provider';
import NoteList from './NoteList';

describe('NoteList', () => {
  let wrapper: any;

  it('should add todo', async () => {
    const mockAddTodo = jest.fn();
    const mockFetchTodoList = jest.fn().mockReturnValue([getTodo_1(), getTodo_2()]);

    await waitFor(() => {
      wrapper = render(
        <TodoContext.Provider value={{ state: { todoList: [] }, addTodo: mockAddTodo, removeTodo: jest.fn(), fetchTodoList: mockFetchTodoList }}>
          <NoteList />
        </TodoContext.Provider>
      );
    })

    act(() => {
      fireEvent.click(wrapper.getByTestId('add-btn'));
    });

    expect(mockAddTodo).toHaveBeenCalledWith({"description": "some random description 1", "status": true, "title": "some random title"});
  });


  it('should delete todo', async () => {
    const mockRemoveTodo = jest.fn();

    await waitFor(() => {
      wrapper = render(
        <TodoContext.Provider value={{ state: { todoList: [getTodo_1()] }, addTodo: jest.fn(), removeTodo: mockRemoveTodo, fetchTodoList: jest.fn() }}>
          <NoteList />
        </TodoContext.Provider>
      );
    });

    const deleteTodo = wrapper.getAllByTestId('delete-btn')[0];

    act(() => {
      fireEvent.click(deleteTodo);
    })

    expect(mockRemoveTodo).toHaveBeenCalledWith(1);
  });


  it('should render loading', () => {
    waitFor(() => {
      wrapper = render(
        <TodoContext.Provider value={{ state: { todoList: [] }, addTodo: jest.fn(), removeTodo: jest.fn(), fetchTodoList: jest.fn() }}>
          <NoteList />
        </TodoContext.Provider>
      );
    });
    expect(wrapper.container).toMatchSnapshot();
  });
});
