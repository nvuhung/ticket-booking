import React from 'react';
import styled from 'styled-components';

import { theme } from '../../styles/theme';
import { TicketStatuses } from '../../utils/enums';

const TicketStatus: React.FC = () => (
  <Container>
    <StatusItem>
      <StatusColor color={theme.colors.ticketStatus[TicketStatuses.Booked]} />
      <Text>Đã đặt</Text>
    </StatusItem>

    <StatusItem>
      <StatusColor color={theme.colors.ticketStatus[TicketStatuses.Selecting]} />
      <Text>Đang chọn</Text>
    </StatusItem>
  </Container>
);

const Container = styled.div``;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const StatusColor = styled.div<{ color: string }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-right: 10px;
`;

const Text = styled.span`
  color: ${theme.colors.white};
`;

export default React.memo(TicketStatus);
