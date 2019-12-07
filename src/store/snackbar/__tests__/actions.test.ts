import { SHOW_SNACKBAR, showSnackbar } from '../actions';

describe('Snackbar Actions', () => {
  it('should create an action to fetchSeats', () => {
    const payload = {
      message: `Bạn chỉ được chọn tối đa 6 ghế`,
      type: 'warning' as any
    };
    const expectedAction = {
      type: SHOW_SNACKBAR,
      payload
    };
    expect(showSnackbar(payload)).toEqual(expectedAction);
  });
});
