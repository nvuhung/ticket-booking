import React from 'react';
import styled, { css } from 'styled-components';
import { ISeatItem } from '../../models/seat';
import { theme } from '../../styles/theme';
import { TicketStatuses } from '../../utils/enums';

export interface IProps {
  seat: ISeatItem;
  zoom: number;
  onSelect: (seat: ISeatItem) => void;
}

const SeatItem: React.FC<IProps> = ({ seat, zoom, onSelect }) => {
  return (
    <SeatContainer
      onClick={() => seat.status !== TicketStatuses.Booked && onSelect(seat)}
      hidden={seat.number < 1}
      backgroundColor={theme.colors.ticketStatus[seat.status]}
      borderColor={
        seat.status === TicketStatuses.Selecting
          ? theme.colors.white
          : theme.colors.types[seat.type]
      }
      isBooked={seat.status === TicketStatuses.Booked}
      zoom={zoom}
    >
      {seat.status === TicketStatuses.Selecting && (
        <SeatNumber zoom={zoom}>{seat.number}</SeatNumber>
      )}
    </SeatContainer>
  );
};

const SeatZize = 18;
const TextSize = 14;

interface ISeatContainerProps {
  hidden: boolean;
  borderColor?: string;
  backgroundColor?: string;
  isBooked: boolean;
  zoom: number;
}
const SeatContainer = styled.div<ISeatContainerProps>`
  width: ${props => props.zoom * SeatZize}px;
  height: ${props => props.zoom * SeatZize}px;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: solid 1.2px ${props => props.borderColor || theme.colors.borderColor};
  background-color: ${props => props.backgroundColor || theme.colors.transparent};
  visibility: ${props => (props.hidden ? 'hidden' : '')};
  ${props =>
    props.isBooked &&
    css`
      border-color: ${theme.colors.ticketStatus[TicketStatuses.Booked]};
      cursor: not-allowed;
    `}
`;

const SeatNumber = styled.span<{ zoom: number }>`
  color: ${theme.colors.black};
  font-size: ${props => props.zoom * TextSize}px;
`;

export default SeatItem;
