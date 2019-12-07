import {
  Actions,
  FETCH_SEATS_LOADING,
  FETCH_SEATS_SUCCESS,
  FETCH_SEATS_FAIL,
  UPDATE_SEATS
} from './actions';
import { ISeat } from '../../models/seat';
import { ITicketTypes } from '../../models/ticket-type';
import { IMovie } from '../../models/movie';

export interface ISeatState {
  seats: ISeat[];
  movie: IMovie | null;
  ticketTypes: ITicketTypes[];
  seatSelected: string[];
  loading: boolean;
  totalPrice: number;
  error: string;
}

const initialState: ISeatState = {
  seats: [],
  movie: null,
  ticketTypes: [],
  seatSelected: [],
  loading: false,
  totalPrice: 0,
  error: ''
};

const reducer = (state: ISeatState = initialState, action: Actions): ISeatState => {
  switch (action.type) {
    case FETCH_SEATS_LOADING:
      return {
        ...state,
        loading: true
      };

    case FETCH_SEATS_SUCCESS:
      return {
        ...state,
        seats: action.payload.seats,
        movie: action.payload.movie,
        ticketTypes: action.payload.types,
        loading: false
      };

    case FETCH_SEATS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case UPDATE_SEATS:
      return {
        ...state,
        seats: action.payload.seats,
        totalPrice: action.payload.totalPrice,
        seatSelected: action.payload.seatSelected
      };

    default:
      return state;
  }
};

export default reducer;
