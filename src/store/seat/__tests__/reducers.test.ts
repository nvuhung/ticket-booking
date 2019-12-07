import reducer, { ISeatState } from '../reducers';
import { fetchSeatsLoading, fetchSeatsSuccess, fetchSeatsFail } from '../actions';
import { seats } from '../../../test/mocks';

const mockSeats: ISeatState = {
  seats: [],
  movie: null,
  ticketTypes: [],
  seatSelected: [],
  loading: false,
  totalPrice: 0,
  error: ''
};

describe('Seat Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual({
      seats: [],
      movie: null,
      ticketTypes: [],
      seatSelected: [],
      loading: false,
      totalPrice: 0,
      error: ''
    });
  });

  it('should handle FETCH_SEATS_LOADING', () => {
    const expectedResult = { ...mockSeats, loading: true };
    expect(reducer(mockSeats, fetchSeatsLoading())).toEqual(expectedResult);
  });

  it('should handle FETCH_SEATS_SUCCESS', () => {
    const mockSuccess = {
      seats: seats.seats,
      movie: seats.movie,
      types: seats.types
    };
    const expectedResult = {
      ...mockSeats,
      seats: seats.seats,
      movie: seats.movie,
      ticketTypes: seats.types
    };
    expect(reducer(mockSeats, fetchSeatsSuccess(mockSuccess))).toEqual(expectedResult);
  });

  it('should handle FETCH_SEATS_FAIL', () => {
    const mockFail = {
      error: 'Error'
    };
    const expectedResult = {
      ...mockSeats,
      ...mockFail
    };
    expect(reducer(mockSeats, fetchSeatsFail(mockFail.error))).toEqual(expectedResult);
  });
});
