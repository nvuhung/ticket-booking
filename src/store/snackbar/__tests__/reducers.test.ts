import reducer, { ISnackbarState } from '../reducers';

const mockSeats: ISnackbarState = {
  isShow: false,
  message: '',
  type: 'success',
  timing: 3000
};

describe('Snackbar Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(mockSeats);
  });
});
