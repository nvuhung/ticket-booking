import { ISeatResult } from '../../models/api';
import { ISeatItem, ISeat } from '../../models/seat';

export const FETCH_SEATS = '[SEAT] FETCH_SEATS';
export const FETCH_SEATS_LOADING = '[SEAT] FETCH_SEATS_LOADING';
export const FETCH_SEATS_SUCCESS = '[SEAT] FETCH_SEATS_SUCCESS';
export const FETCH_SEATS_FAIL = '[SEAT] FETCH_SEATS_FAIL';
export const SELECT_SEAT = '[SEAT] SELECT_SEAT';
export const UPDATE_SEATS = '[SEAT] UPDATE_SEATS';

/* ************ FETCH_SEATS ************ */
export interface IFetchSeats {
  type: typeof FETCH_SEATS;
}

export const fetchSeats = (): IFetchSeats => ({
  type: FETCH_SEATS
});

/* ************ FETCH_SEATS_LOADING ************ */
export interface IFetchSeatsLoading {
  type: typeof FETCH_SEATS_LOADING;
}

export const fetchSeatsLoading = (): IFetchSeatsLoading => ({
  type: FETCH_SEATS_LOADING
});

/* ************ FETCH_SEATS_SUCCESS ************ */
export interface IFetchSeatsSuccess {
  type: typeof FETCH_SEATS_SUCCESS;
  payload: ISeatResult;
}

export const fetchSeatsSuccess = (payload: ISeatResult): IFetchSeatsSuccess => ({
  type: FETCH_SEATS_SUCCESS,
  payload
});

/* ************ FETCH_SEATS_FAIL ************ */
export interface IFetchSeatsFail {
  type: typeof FETCH_SEATS_FAIL;
  payload: string;
}

export const fetchSeatsFail = (payload: string): IFetchSeatsFail => ({
  type: FETCH_SEATS_FAIL,
  payload
});

/* ************ SELECT_SEAT ************ */
export interface ISelectSeatPayload {
  seat: ISeat;
  item: ISeatItem;
}

export interface ISelectSeat {
  type: typeof SELECT_SEAT;
  payload: ISelectSeatPayload;
}

export const selectSeat = (payload: ISelectSeatPayload): ISelectSeat => ({
  type: SELECT_SEAT,
  payload
});

/* ************ UPDATE_SEATS ************ */
export interface IUpdateSeatsPayload {
  seats: ISeat[];
  seatSelected: string[]
  totalPrice: number;
}
export interface IUpdateSeats {
  type: typeof UPDATE_SEATS;
  payload: IUpdateSeatsPayload;
}

export const updateSeats = (payload: IUpdateSeatsPayload): IUpdateSeats => ({
  type: UPDATE_SEATS,
  payload
});

export type Actions =
  | IFetchSeats
  | IFetchSeatsLoading
  | IFetchSeatsFail
  | IFetchSeatsSuccess
  | ISelectSeat
  | IUpdateSeats;
