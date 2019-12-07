import { all, fork } from 'redux-saga/effects';

import { saga as seatSaga } from './seat/sagas';
import { saga as snackbarSaga } from './snackbar/sagas';

export default function* rootSaga(): Generator {
  yield all([fork(seatSaga), fork(snackbarSaga)]);
}
