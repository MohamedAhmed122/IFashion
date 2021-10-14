import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Toast from 'react-native-toast-message';
import {Root} from './src/navigation/Root';
import {toastConfig} from './src/utils/toastConfig/toastConfig';

export default function App() {
  return (
    <NavigationContainer>
      <Root />
      <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
