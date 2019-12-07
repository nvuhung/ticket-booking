import React from 'react';
import 'jest-styled-components';

import TicketStatus from './TicketStatus';
import { mount, shallow } from '../../test/enzyme';

describe('TicketStatus', () => {
  let mountedComp: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedComp) {
      mountedComp = bShallow ? shallow(<TicketStatus />) : mount(<TicketStatus />);
    }
    return mountedComp;
  };

  it('renders without crashing', () => {
    const comp = wrapper(false);
    expect(comp).toMatchSnapshot();
  });
});
