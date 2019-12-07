import React from 'react';
import 'jest-styled-components';

import Seats, { IProps } from './Seats';
import { mount, shallow } from '../../test/enzyme';
import { seats } from '../../test/mocks';

describe('Seat', () => {
  let props: IProps = (null as any) as IProps;
  let mountedComp: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedComp) {
      mountedComp = bShallow ? shallow(<Seats {...props} />) : mount(<Seats {...props} />);
    }
    return mountedComp;
  };

  beforeEach(() => {
    props = {
      onSelect: () => null,
      seats: seats.seats,
      zoom: 1
    };
  });

  it('renders without crashing', () => {
    const comp = wrapper(false);
    expect(comp).toMatchSnapshot();
  });
});
