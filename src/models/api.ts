import { ISeat } from './seat';
import { ITicketTypes } from './ticket-type';
import { IMovie } from './movie';

export interface ISeatResult {
  movie: IMovie;
  seats: ISeat[];
  types: ITicketTypes[];
}
