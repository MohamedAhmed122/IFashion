import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {
  ShoppingStoreStackParams,
  ShoppingStoreStackParamsParamList,
} from './interface';
//SCREENS
import {StoreScreen} from 'screens/StoreScreen';
import {StoresScreen} from 'screens/StoresScreen';
import {ShoppingItemsScreen} from 'screens/ShoppingItemsScreen';
import {ShoppingItemDetailsScreen} from 'screens/ShoppingItemDetailsScreen';

const Stack = createNativeStackNavigator<ShoppingStoreStackParamsParamList>();

const ShoppingStoreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={ShoppingStoreStackParams.Stores}
        component={StoresScreen}
      />
      <Stack.Screen
        name={ShoppingStoreStackParams.StoreDetail}
        component={StoreScreen}
      />
      <Stack.Screen
        name={ShoppingStoreStackParams.ShoppingItem}
        component={ShoppingItemDetailsScreen}
      />
      <Stack.Screen
        name={ShoppingStoreStackParams.ShoppingItems}
        component={ShoppingItemsScreen}
      />
    </Stack.Navigator>
  );
};

export default ShoppingStoreStack;
