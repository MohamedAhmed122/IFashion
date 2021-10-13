import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {FashionParams, FashionParamList} from './interface';
//SCREENS
import {FashionistaScreen} from '../../screens/FashionistaScreen';
import {FashionistaDetailScreen} from '../../screens/FashionistaDetailScreen';

const Stack = createNativeStackNavigator<FashionParamList>();

const FashionStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={FashionParams.Fashionista}
        component={FashionistaScreen}
      />
      <Stack.Screen
        name={FashionParams.FashionistaDetail}
        component={FashionistaDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default FashionStack;
