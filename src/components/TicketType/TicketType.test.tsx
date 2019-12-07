import React from 'react';
import 'jest-styled-components';

import TicketType, { IProps } from './TicketType';
import { mount, shallow } from '../../test/enzyme';
import { seats } from '../../test/mocks';
import { formatCurrency } from '../../utils/number';

describe('TicketType', () => {
  let props: IProps = (null as any) as IProps;
  let mountedComp: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedComp) {
      mountedComp = bShallow
        ? shallow(<TicketType {...props} />)
        : mount(<TicketType {...props} />);
    }
    return mountedComp;
  };

  beforeEach(() => {
    props = {
      types: seats.types
    };
  });

  it('renders without crashing', () => {
    const comp = wrapper(false);
    expect(comp).toMatchSnapshot();
  });

  describe('when movie is null', () => {
    beforeEach(() => {
      props.types = [];
      mountedComp = undefined;
    });

    it('should not render', () => {
      const comp = wrapper(false);
      expect(comp.find('div > div').length).toEqual(0);
    });
  });

  describe('when types has value', () => {
    beforeEach(() => {
      props.types = seats.types;
      mountedComp = undefined;
    });

    it('should render contents', () => {
      const comp = wrapper(false);
      const elts = comp.find('div.type-item');
      expect(elts.length).toEqual(props.types.length);
    });

    it('should match data', () => {
      const comp = wrapper(false);
      const first = comp
        .find('div.type-item')
        .first()
        .find('.type-text')
        .first();
      expect(first.text()).toEqual(
        `${seats.types[0].description} - ${formatCurrency(seats.types[0].price)}`
      );
    });
  });
});
