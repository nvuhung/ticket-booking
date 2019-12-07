import {
  FETCH_SEATS,
  fetchSeats,
  FETCH_SEATS_LOADING,
  fetchSeatsLoading,
  FETCH_SEATS_SUCCESS,
  fetchSeatsSuccess,
  FETCH_SEATS_FAIL,
  fetchSeatsFail
} from '../actions';
import { seats } from '../../../test/mocks';

describe('Seat Actions', () => {
  it('should create an action to fetchSeats', () => {
    const expectedAction = {
      type: FETCH_SEATS
    };
    expect(fetchSeats()).toEqual(expectedAction);
  });

  it('should create an action to fetchSeatsLoading', () => {
    const expectedAction = {
      type: FETCH_SEATS_LOADING
    };
    expect(fetchSeatsLoading()).toEqual(expectedAction);
  });

  it('should create an action to fetchSeatsSuccess', () => {
    const payload = seats;
    const expectedAction = {
      type: FETCH_SEATS_SUCCESS,
      payload
    };
    expect(fetchSeatsSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action to fetchSeatsFail', () => {
    const payload = 'error';
    const expectedAction = {
      type: FETCH_SEATS_FAIL,
      payload
    };
    expect(fetchSeatsFail(payload)).toEqual(expectedAction);
  });
});
