import { TicketStatuses, TicketTypes } from '../utils/enums';

export interface ISeatItem {
  number: number;
  group: number; // Left, center, right,
  status: TicketStatuses; // Available, Booked, Selecting
  type: TicketTypes; // Vip
}

export interface ISeat {
  name: string;
  items: ISeatItem[];
}
