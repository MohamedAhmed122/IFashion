import React from 'react';
import Toast from 'react-native-toast-message';
import {StoreScreen} from './src/screens/StoreScreen';
import {toastConfig} from './src/utils/toastConfig/toastConfig';

export default function App() {
  return (
    <>
      <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
      <StoreScreen />
    </>
  );
}
