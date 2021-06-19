import { act, fireEvent, waitFor } from '@testing-library/react';
import { render } from '../../../test/render';

import NoteList from './NoteList';

jest.useFakeTimers();

describe('NoteList', () => {
  let wrapper: any;

  it('should add todo', async () => {
    await waitFor(() => {
      wrapper = render(<NoteList />);
    });

    act(() => {
      fireEvent.click(wrapper.getByTestId('add-btn'));
    });

    expect(wrapper.getAllByTestId('todo-item')).toHaveLength(2);
  });


  it('should delete todo', async () => {
    await waitFor(() => {
      wrapper = render(<NoteList />);
    });

    const deleteTodo = wrapper.getAllByTestId('delete-btn')[0];

    waitFor(() => {
      act(() => {
        fireEvent.click(deleteTodo);
      })
      expect(wrapper.getAllByTestId('todo-item')).toHaveLength(1);
    });
  });
});
