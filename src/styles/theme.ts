import { TicketTypes, TicketStatuses } from '../utils/enums';

export const theme = {
  colors: {
    transparent: 'transparent',
    white: '#fff',
    black: '#000',
    borderColor: '#f5f5f5',
    danger: '#dc3545',
    warning: '#ffc107',
    success: '#28a745',
    types: {
      [TicketTypes.Standard]: '#fff',
      [TicketTypes.Vip]: '#385846',
      [TicketTypes.Deluxe]: '#384b5d'
    },
    ticketStatus: {
      [TicketStatuses.Available]: '#000',
      [TicketStatuses.Booked]: '#242424',
      [TicketStatuses.Selecting]: '#fff'
    }
  }
};
