import React from 'react';
import styled from 'styled-components';

import { ISeat } from '../../models/seat';
import { theme } from '../../styles/theme';
import SeatItem from './SeatItem';
import { ISelectSeatPayload } from '../../store/seat/actions';

export interface IProps {
  seats: ISeat[];
  zoom: number;
  onSelect: (payload: ISelectSeatPayload) => void;
}

const Seat: React.FC<IProps> = ({ seats = [], zoom, onSelect }) => {
  return (
    <Container>
      <Content>
        <Image src="screen.png" alt="Screen" />

        {seats.map(seat => (
          <SeatRow key={seat.name}>
            <SeatName>{seat.name}</SeatName>
            {seat.items.map((item, index) => (
              <SeatItem
                zoom={zoom}
                key={index}
                seat={item}
                onSelect={() => onSelect({ seat, item })}
              />
            ))}
          </SeatRow>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
`;

const SeatRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`;

const SeatName = styled.div`
  color: ${theme.colors.white};
  width: 20px;
`;

const Image = styled.img`
  max-width: 100%;
`;

export default Seat;
