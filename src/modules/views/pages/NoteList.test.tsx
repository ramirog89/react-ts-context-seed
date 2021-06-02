// import { render } from '@testing-library/react';
import { render } from '../../../test/render';

import NoteList from './NoteList';

describe('NoteList', () => {
  it('should render', () => {
    const wrapper = render(<NoteList />);

    expect(wrapper).toMatchSnapshot();
  });
});
