import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes, css } from 'styled-components';

import { ISnackbarState } from '../../store/snackbar/reducers';
import { theme } from '../../styles/theme';

const SnackBar: React.FC = () => {
  const { isShow, message, type, timing } = useSelector(
    (state: { snackbar: ISnackbarState }) => state.snackbar
  );

  return isShow ? (
    <SnackBarStyled delay={timing - 0.5} backgroundColor={theme.colors[type]} show={isShow}>
      {message}
    </SnackBarStyled>
  ) : null;
};

const fadeIn = keyframes`
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
`;

const fadeOut = keyframes`
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
`;

const SnackBarStyled = styled.div<{ show: boolean; backgroundColor: string; delay: number }>`
  min-width: 250px;
  margin-left: -125px;
  background-color: ${props => props.backgroundColor};
  color: ${theme.colors.white};
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;

  ${props =>
    props.show &&
    css`
      animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s ${props.delay}s;
    `}
`;

export default React.memo(SnackBar);
