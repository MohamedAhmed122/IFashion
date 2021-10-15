import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from 'navigation/TabNavigation';
import React from 'react';
import Toast from 'react-native-toast-message';
import {Root} from './src/navigation/Root';
import {toastConfig} from './src/utils/toastConfig/toastConfig';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
      <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
