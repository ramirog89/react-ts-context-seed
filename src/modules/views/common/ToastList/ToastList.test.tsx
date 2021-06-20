import { getToast_1 } from '../../../../test/entities';
import { render } from '../../../../test/render';

import { GeneralContext } from '../../../context/general/provider';
import ToastList from './ToastList';

describe('ToastList', () => {
  let wrapper: any;

  it('should render', () => {
    wrapper = render(
      <GeneralContext.Provider value={{ state: { toastList: [getToast_1()] }, addToast: jest.fn() }}>
        <ToastList />
      </GeneralContext.Provider>
    );

    expect(wrapper.container).toMatchSnapshot();
  });

});
