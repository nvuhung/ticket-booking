import { all, put, takeEvery, delay } from 'redux-saga/effects';

import { IShowSnackbar, hideSnackbar, SHOW_SNACKBAR, updateSnackbar } from './actions';

export function* showSnackbarSaga(action: IShowSnackbar): Generator {
  yield put(updateSnackbar({ ...action.payload, isShow: true }));
  yield delay(action.payload.timing || 3000);
  yield put(hideSnackbar());
}

export function* saga(): Generator {
  yield all([takeEvery<IShowSnackbar>(SHOW_SNACKBAR, showSnackbarSaga)]);
}
