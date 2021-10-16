import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {CheckoutParams, CheckoutParamList} from './interface';
//SCREENS
import {PaymentScreen} from 'screens/PaymentScreen';
import {CartScreen} from 'screens/CartScreen';
import {ReviewScreen} from 'screens/ReviewScreen';
import {FavoriteScreen} from 'screens/FavoriteScreen';
import {FavoriteFashionScreen} from 'screens/FavoriteFashionScreen';

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
        name={CheckoutParams.FavoriteItem}
        component={FavoriteScreen}
      />
      <Stack.Screen
        name={CheckoutParams.FavoriteFashion}
        component={FavoriteFashionScreen}
      />
    </Stack.Navigator>
  );
};
