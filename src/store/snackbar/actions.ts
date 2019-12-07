import { SnackBarType } from '../../utils/consts';

export const SHOW_SNACKBAR = '[SNACKBAR] SHOW_SNACKBAR';
export const HIDE_SNACKBAR = '[SNACKBAR] HIDE_SNACKBAR';
export const UPDATE_SNACKBAR = '[SNACKBAR] UPDATE_SNACKBAR';

/* ************ SHOW_SNACKBAR ************ */
export interface IShowSnackbarPayload {
  message: string;
  type: SnackBarType;
  timing?: number;
}

export interface IShowSnackbar {
  type: typeof SHOW_SNACKBAR;
  payload: IShowSnackbarPayload;
}

export const showSnackbar = (payload: IShowSnackbarPayload): IShowSnackbar => ({
  type: SHOW_SNACKBAR,
  payload
});

/* ************ UPDATE_SNACKBAR ************ */
export interface IUpdateSnackbarPayload extends IShowSnackbarPayload {
  isShow: boolean;
}
export interface IUpdateSnackbar {
  type: typeof UPDATE_SNACKBAR;
  payload: IUpdateSnackbarPayload;
}

export const updateSnackbar = (payload: IUpdateSnackbarPayload): IUpdateSnackbar => ({
  type: UPDATE_SNACKBAR,
  payload
});

/* ************ HIDE_SNACKBAR ************ */
export interface IHideSnackbar {
  type: typeof HIDE_SNACKBAR;
}

export const hideSnackbar = (): IHideSnackbar => ({
  type: HIDE_SNACKBAR
});

export type Actions = IShowSnackbar | IHideSnackbar | IUpdateSnackbar;
