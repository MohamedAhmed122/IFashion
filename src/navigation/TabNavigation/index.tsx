import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigationParams, TabNavigationParamList} from './interface';

import ShoppingStoreStack from '../ShoppingStoreStack';
import {ChatStack} from '../ChatStack';
import {CheckoutStack} from '../CheckoutStack';
import {FashionStack} from '../FashionStack';
import {SettingsScreen} from 'screens/SettingsScreen';

const Tab = createBottomTabNavigator<TabNavigationParamList>();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={TabNavigationParams.StoreTab}
        component={ShoppingStoreStack}
        options={{
          title: 'Stores',
        }}
      />
      <Tab.Screen
        name={TabNavigationParams.ChatTab}
        component={ChatStack}
        options={{
          title: 'Chat',
        }}
      />
      <Tab.Screen
        name={TabNavigationParams.CheckoutTab}
        component={CheckoutStack}
        options={{
          title: 'Checkout',
        }}
      />
      <Tab.Screen
        name={TabNavigationParams.FashionTab}
        component={FashionStack}
        options={{
          title: 'Fashion',
        }}
      />
      <Tab.Screen
        name={TabNavigationParams.Settings}
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}
