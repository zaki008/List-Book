import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import store from './src/shared/redux/store';
import Navigation from './src/shared/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
