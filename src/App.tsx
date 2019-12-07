import React from 'react';
import { Provider } from 'react-redux';

import store from './store/configureStore';
import Booking from './pages/Booking';
import { GlobalStyle } from './styles/global';
import SnackBar from './components/SnackBar';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Booking />
      <SnackBar />
    </Provider>
  );
};

export default App;
