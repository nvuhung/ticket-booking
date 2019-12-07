import React from 'react';
import 'jest-styled-components';

import Zoom, { IProps } from './Zoom';
import { mount, shallow } from '../../test/enzyme';

describe('Zoom', () => {
  let props: IProps = (null as any) as IProps;
  let mountedComp: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedComp) {
      mountedComp = bShallow ? shallow(<Zoom {...props} />) : mount(<Zoom {...props} />);
    }
    return mountedComp;
  };

  beforeEach(() => {
    props = {
      // tslint:disable-next-line: no-empty
      onZoomIn: () => {},
      // tslint:disable-next-line: no-empty
      onZoomOut: () => {}
    };
  });

  it('renders without crashing', () => {
    const comp = wrapper(false);
    expect(comp).toMatchSnapshot();
  });

  it('always renders 2 buttons', () => {
    const comp = wrapper(false);
    expect(comp.find('button').length).toEqual(2);
  });
});
