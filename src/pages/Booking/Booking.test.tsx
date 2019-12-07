import React from 'react';
import 'jest-styled-components';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Booking from './Booking';
import { mount, shallow } from '../../test/enzyme';
import { seats } from '../../test/mocks';

const mockStore = configureStore([]);

describe('Booking', () => {
  let store = null as any;
  let mountedComp: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedComp) {
      mountedComp = bShallow
        ? shallow(
            <Provider store={store}>
              <Booking />
            </Provider>
          )
        : mount(
            <Provider store={store}>
              <Booking />
            </Provider>
          );
    }
    return mountedComp;
  };

  beforeEach(() => {
    store = mockStore({
      seat: {
        movie: seats.movie,
        seats: seats.seats,
        ticketTypes: seats.types,
        totalPrice: 0,
        loading: false
      }
    });
    store.dispatch = jest.fn();
  });

  it('renders without crashing', () => {
    const comp = wrapper(false);
    expect(comp).toMatchSnapshot();
  });
});
