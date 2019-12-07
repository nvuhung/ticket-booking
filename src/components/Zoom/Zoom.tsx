import React from 'react';
import styled from 'styled-components';

import { theme } from '../../styles/theme';
import Icon from '../Icon';

export interface IProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const Zoom: React.FC<IProps> = ({ onZoomIn, onZoomOut }) => {
  return (
    <Container>
      <Button onClick={onZoomOut}>
        <Icon width={20} height={20} name="zoom-out" />
      </Button>
      <Button onClick={onZoomIn}>
        <Icon width={20} height={20} name="zoom-in" />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 26px;
  position: relative;
  outline: none;
  margin-right: 20px;
`;

const Button = styled.button`
  outline: none;
  cursor: pointer;
  background: transparent;
  display: flex;
  align-items: center;
  height: 30px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default React.memo(Zoom);
