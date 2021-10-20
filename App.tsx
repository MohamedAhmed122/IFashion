import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from 'navigation/TabNavigation';
import React from 'react';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {store} from 'redux/store';
import {StoresScreen} from 'screens/StoresScreen';
import {toastConfig} from './src/utils/toastConfig/toastConfig';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StoresScreen />
        <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
      </NavigationContainer>
    </Provider>
  );
}
