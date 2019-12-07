import React from 'react';
import 'jest-styled-components';

import SnackBar from './SnackBar';
import { mount, shallow } from '../../test/enzyme';
import store from '../../store/configureStore';
import { Provider } from 'react-redux';

describe('Snackbar', () => {
  let mountedComp: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedComp) {
      mountedComp = bShallow
        ? shallow(
            <Provider store={store}>
              <SnackBar />
            </Provider>
          )
        : mount(
            <Provider store={store}>
              <SnackBar />
            </Provider>
          );
    }
    return mountedComp;
  };

  it('renders without crashing', () => {
    const comp = wrapper(false);
    expect(comp).toMatchSnapshot();
  });
});
