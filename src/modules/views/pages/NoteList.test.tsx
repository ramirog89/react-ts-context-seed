import { act, fireEvent } from '@testing-library/react';
import { render } from '../../../test/render';

import NoteList from './NoteList';

describe('NoteList', () => {
  it('should render', () => {
    const wrapper = render(<NoteList />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should add todo', () => {
    const wrapper = render(<NoteList />);

    act(() => {
      fireEvent.click(wrapper.getByTestId('add-btn'));
    })

    expect(wrapper.getAllByTestId('todo-item')).toHaveLength(3);
  });


  it('should delete todo', () => {
    const wrapper = render(<NoteList />);

    const deleteTodo = wrapper.getAllByTestId('delete-btn')[0];

    act(() => {
      fireEvent.click(deleteTodo);
    })

    expect(wrapper.getAllByTestId('todo-item')).toHaveLength(1);
  });
});
