import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Toast from 'react-native-toast-message';
import TabNavigation from './src/navigations/TabNavigation';
import {toastConfig} from './src/utils/toastConfig/toastConfig';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
      <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
