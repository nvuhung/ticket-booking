import React from 'react';
import 'jest-styled-components';

import MovieInfo, { IProps } from './MovieInfo';
import { mount, shallow } from '../../test/enzyme';
import { seats } from '../../test/mocks';

describe('MovieInfo', () => {
  let props: IProps = (null as any) as IProps;
  let mountedComp: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedComp) {
      mountedComp = bShallow ? shallow(<MovieInfo {...props} />) : mount(<MovieInfo {...props} />);
    }
    return mountedComp;
  };

  beforeEach(() => {
    props = {
      movie: null
    };
  });

  it('renders without crashing', () => {
    const comp = wrapper(false);
    expect(comp).toMatchSnapshot();
  });

  describe('when movie is null', () => {
    beforeEach(() => {
      (props.movie = null), (mountedComp = undefined);
    });

    it('should not render', () => {
      const comp = wrapper(false);
      expect(comp.find('p').length).toEqual(0);
    });
  });

  describe('when movie has value', () => {
    beforeEach(() => {
      (props.movie = seats.movie), (mountedComp = undefined);
    });

    it('should render contents', () => {
      const comp = wrapper(false);
      expect(comp.find('h3').length).toEqual(1);
      expect(comp.find('p').length).toEqual(1);
    });

    it('should match data', () => {
      const comp = wrapper(false);
      const title = comp.find('h3');
      const description = comp.find('p');
      expect(title.text()).toEqual('Spider-man: Người nhện xa nhà');
      expect(description.text()).toEqual('C13 | 2D Vietnam sub');
    });
  });
});
