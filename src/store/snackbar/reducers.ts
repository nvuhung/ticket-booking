import { Actions, HIDE_SNACKBAR, UPDATE_SNACKBAR } from './actions';
import { SnackBarType } from '../../utils/consts';

export interface ISnackbarState {
  isShow: boolean;
  message: string;
  type: SnackBarType;
  timing: number;
}

const initialState: ISnackbarState = {
  isShow: false,
  message: '',
  type: 'success',
  timing: 3000 // 3s
};

const reducer = (state: ISnackbarState = initialState, action: Actions): ISnackbarState => {
  switch (action.type) {
    case UPDATE_SNACKBAR:
      return {
        ...state,
        ...action.payload
      };

    case HIDE_SNACKBAR:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
