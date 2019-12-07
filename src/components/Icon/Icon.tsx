import React from 'react';

import { ReactComponent as ZoomInIcon } from '../../assets/svg/ic-zoom-in.svg';
import { ReactComponent as ZoomOutIcon } from '../../assets/svg/ic-zoom-out.svg';
import { ReactComponent as InfoIcon } from '../../assets/svg/ic-info.svg';

export type IconName = 'zoom-in' | 'zoom-out' | 'info';

export type IProps = { name: IconName } & React.SVGAttributes<SVGElement>;

const Icon: React.FC<IProps> = ({ name, ...props }) => {
  switch (name) {
    case 'zoom-in':
      return <ZoomInIcon {...props} />;
    case 'zoom-out':
      return <ZoomOutIcon {...props} />;
    case 'info':
      return <InfoIcon {...props} />;
    default:
      return null;
  }
};

export default Icon;
