import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {FashionistaParams, FashionistaParamsParamList} from './interface';
//SCREENS
import {FashionistaScreen} from '../../screens/FashionistaScreen';
import {FashionistaDetailScreen} from '../../screens/FashionistaDetailScreen';

const Stack = createNativeStackNavigator<FashionistaParamsParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={FashionistaParams.Fashionista}
        component={FashionistaScreen}
      />
      <Stack.Screen
        name={FashionistaParams.FashionistaDetail}
        component={FashionistaDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
