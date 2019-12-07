import React from 'react';
import styled from 'styled-components';

import { theme } from '../../styles/theme';
import { IMovie } from '../../models/movie';

export interface IProps {
  movie: IMovie | null;
}

const MovieInfo: React.FC<IProps> = ({ movie }) =>
  movie ? (
    <>
      <Title>{movie.name}</Title>
      <Text>{movie.description}</Text>
    </>
  ) : null;

const Title = styled.h3`
  text-align: center;
  color: ${theme.colors.white};
`;

const Text = styled.p`
  text-align: center;
  color: ${theme.colors.white};
`;

export default React.memo(MovieInfo);
