import { ReactElement } from 'react';
import {
  mount as baseMount,
  shallow as baseShallow,
  MountRendererProps,
  ReactWrapper,
  ShallowRendererProps,
  ShallowWrapper
} from 'enzyme';
// import { TestContainer } from './TestContainer';

export function mount<P>(
  node: ReactElement<P>,
  options?: MountRendererProps
): ReactWrapper<P, any> {
  return baseMount(node, {
    // wrappingComponent: TestContainer,
    ...(options || {})
  });
}

export function shallow<P>(
  node: ReactElement<P>,
  options?: ShallowRendererProps
): ShallowWrapper<P, any> {
  return baseShallow(node, {
    // wrappingComponent: TestContainer,
    ...(options || {})
  });
}
