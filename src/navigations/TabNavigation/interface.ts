import {FashionistaParamsParamList} from './../FashionistaStack/interface';
import {ShoppingStoreStackParamsParamList} from './../ShoppingStoreStack/interface';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {CheckoutParamList} from '../CheckoutStack/interface';
import {ChatParamList} from '../ChatStack/interface';

import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type NO_PARAMS = undefined;

export enum TabNavigation {
  Stores = 'Stores',
  Fashion = 'Fashion',
  Checkout = 'Checkout',
  Chat = 'Chat',
  Settings = 'Settings',
}

export type TabNavigationParamList = {
  [TabNavigation.Stores]: NavigatorScreenParams<ShoppingStoreStackParamsParamList>;
  [TabNavigation.Fashion]: NavigatorScreenParams<FashionistaParamsParamList>;
  [TabNavigation.Checkout]: NavigatorScreenParams<CheckoutParamList>;
  [TabNavigation.Chat]: NavigatorScreenParams<ChatParamList>;
  [TabNavigation.Settings]: NO_PARAMS;
};

export type RootNavigationProp<P extends TabNavigation> = StackNavigationProp<
  TabNavigationParamList,
  P
>;

export type RootRouteProp<P extends TabNavigation> = RouteProp<
  TabNavigationParamList,
  P
>;

export type TabsNavigationProp<P extends TabNavigation> =
  CompositeNavigationProp<
    BottomTabNavigationProp<TabNavigationParamList, P>,
    RootNavigationProp<ShoppingStoreStackParamsParamList>
  >;
export type TabsRouteProp<P extends Tabs> = RouteProp<TabsParamList, P>;
