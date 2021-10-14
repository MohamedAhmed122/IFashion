// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ChatStack} from '../ChatStack';
import {CheckoutStack} from '../CheckoutStack';
import {FashionStack} from '../FashionStack';
import {ProfileStack} from '../ProfileStack';
import ShoppingStoreStack from '../ShoppingStoreStack';
import TabNavigation from '../TabNavigation';
import {RootStackParam, RootStackParamList} from './interface';

// const RootStack = createStackNavigator();
const MainStack = createStackNavigator<RootStackParamList>();

export const Root = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={RootStackParam.App} component={TabNavigation} />
      <MainStack.Screen name={RootStackParam.ChatStack} component={ChatStack} />
      <MainStack.Screen
        name={RootStackParam.ProfileStack}
        component={ProfileStack}
      />
      <MainStack.Screen
        name={RootStackParam.CheckoutStack}
        component={CheckoutStack}
      />
      <MainStack.Screen
        name={RootStackParam.FashionStack}
        component={FashionStack}
      />
      <MainStack.Screen
        name={RootStackParam.ShoppingStoreStack}
        component={ShoppingStoreStack}
      />
    </MainStack.Navigator>
  );
};
