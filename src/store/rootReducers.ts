import { combineReducers } from 'redux';

import seatReducer from './seat/reducers';
import snackbarReducer from './snackbar/reducers';

export const rootReducers = combineReducers({
  seat: seatReducer,
  snackbar: snackbarReducer
});
