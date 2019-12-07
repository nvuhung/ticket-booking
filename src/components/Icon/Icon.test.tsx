import React from 'react';
import 'jest-styled-components';

import Icon, { IProps } from './Icon';
import { mount, shallow } from '../../test/enzyme';

describe('Icon', () => {
  let props: IProps = (null as any) as IProps;
  let mountedComp: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedComp) {
      mountedComp = bShallow ? shallow(<Icon {...props} />) : mount(<Icon {...props} />);
    }
    return mountedComp;
  };

  beforeEach(() => {
    props = {
      name: 'zoom-in'
    };
  });

  it('renders without crashing', () => {
    const comp = wrapper(false);
    expect(comp).toMatchSnapshot();
  });

  it('always renders a svg', () => {
    const comp = wrapper(false);
    expect(comp.find('svg').length).toEqual(1);
  });

  describe('when icon name is invalid', () => {
    beforeEach(() => {
      props.name = null as any;
      mountedComp = undefined;
    });

    it('should not render', () => {
      const comp = wrapper(false);
      expect(comp).toBeEmptyRender();
    });
  });
});
