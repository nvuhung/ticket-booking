import { all, put, takeEvery, call, select } from 'redux-saga/effects';
import {
  FETCH_SEATS,
  IFetchSeats,
  fetchSeatsFail,
  fetchSeatsLoading,
  fetchSeatsSuccess,
  ISelectSeat,
  SELECT_SEAT,
  updateSeats,
  IUpdateSeatsPayload
} from './actions';
import { fetchSeatsApi } from '../../api';
import { ISeatResult } from '../../models/api';
import { TicketStatuses } from '../../utils/enums';
import { ISeatState } from './reducers';
import { showSnackbar } from '../snackbar/actions';
import { MaxTicket } from '../../utils/consts';

export function* fetchSeatsSaga(): Generator {
  try {
    yield put(fetchSeatsLoading());
    const data = yield call(fetchSeatsApi);
    yield put(fetchSeatsSuccess(data as ISeatResult));
  } catch (err) {
    yield put(fetchSeatsFail(err));
  }
}

export function* selectSeatSaga(action: ISelectSeat): Generator {
  const { seat, item } = action.payload;
  if (item.status === TicketStatuses.Booked) {
    return;
  }

  const { seats, seatSelected, totalPrice, ticketTypes } = (yield select(
    (state: { seat: ISeatState }) => state.seat
  )) as ISeatState;

  const status =
    item.status === TicketStatuses.Available ? TicketStatuses.Selecting : TicketStatuses.Available;

  if (status === TicketStatuses.Selecting && seatSelected.length === MaxTicket) {
    yield put(
      showSnackbar({
        message: `Bạn chỉ được chọn tối đa ${MaxTicket} ghế`,
        type: 'warning'
      })
    );
    return;
  }

  const selectedIndex = seatSelected.findIndex(selected => seat.name + item.number === selected);
  const price = ticketTypes.find(i => i.id === item.type)?.price || 0;
  let newPrice = totalPrice;

  if (selectedIndex < 0) {
    newPrice += price;
    seatSelected.push(seat.name + item.number);
  } else {
    newPrice -= price;

    seatSelected.splice(selectedIndex, 1);
  }

  seat.items = seat.items.map(i =>
    i.number !== item.number
      ? i
      : {
          ...i,
          status
        }
  );

  const payload: IUpdateSeatsPayload = {
    seats: seats.map(i => (i.name === seat.name ? seat : i)),
    seatSelected,
    totalPrice: newPrice
  };

  yield put(updateSeats(payload));
}

export function* saga(): Generator {
  yield all([takeEvery<IFetchSeats>(FETCH_SEATS, fetchSeatsSaga)]);
  yield all([takeEvery<ISelectSeat>(SELECT_SEAT, selectSeatSaga)]);
}
