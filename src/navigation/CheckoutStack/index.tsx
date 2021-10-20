import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {CheckoutParams, CheckoutParamList} from './interface';
//SCREENS
import {PaymentScreen} from 'screens/PaymentScreen';
import {CartScreen} from 'screens/CartScreen';
import {ReviewScreen} from 'screens/ReviewScreen';
import {CartDetailScreen} from 'screens/CartDetailScreen';
const Stack = createNativeStackNavigator<CheckoutParamList>();

export const CheckoutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={CheckoutParams.Cart} component={CartScreen} />
      <Stack.Screen name={CheckoutParams.Payment} component={PaymentScreen} />
      <Stack.Screen name={CheckoutParams.Review} component={ReviewScreen} />
      <Stack.Screen
        name={CheckoutParams.CartDetail}
        component={CartDetailScreen}
      />
    </Stack.Navigator>
  );
};
