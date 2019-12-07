import { TicketTypes } from '../utils/enums';

export interface ITicketTypes {
  id: TicketTypes;
  description: string;
  price: number;
}
