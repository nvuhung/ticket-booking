import React from 'react';
import styled from 'styled-components';

import { ITicketTypes } from '../../models/ticket-type';
import { theme } from '../../styles/theme';
import { formatCurrency } from '../../utils/number';

export interface IProps {
  types: ITicketTypes[];
}

const TicketType: React.FC<IProps> = ({ types }) => (
  <Container>
    {types.map(item => (
      <TypeItem className="type-item" key={item.id}>
        <TypeColor color={theme.colors.types[item.id]} />
        <Text className="type-text">
          {item.description} - {formatCurrency(item.price)}
        </Text>
      </TypeItem>
    ))}
  </Container>
);

const Container = styled.div`
  margin-left: 20px;
`;

const TypeItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const TypeColor = styled.div<{ color: string }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: solid 1px ${props => props.color};
  margin-right: 10px;
`;

const Text = styled.span`
  color: ${theme.colors.white};
`;

export default React.memo(TicketType);
