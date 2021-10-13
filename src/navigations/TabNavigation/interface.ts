import {FashionParamList} from '../FashionStack/interface';
import {ShoppingStoreStackParamsParamList} from './../ShoppingStoreStack/interface';
import {NavigatorScreenParams} from '@react-navigation/native';
import {CheckoutParamList} from '../CheckoutStack/interface';
import {ChatParamList} from '../ChatStack/interface';

export type NO_PARAMS = undefined;

export enum TabNavigationParams {
  Stores = '_Stores',
  Fashion = '_Fashion',
  Checkout = '_Checkout',
  Chat = '_Chat',
  Settings = '_Settings',
}

export type TabNavigationParamList = {
  [TabNavigationParams.Stores]: NavigatorScreenParams<ShoppingStoreStackParamsParamList>;
  [TabNavigationParams.Fashion]: NavigatorScreenParams<FashionParamList>;
  [TabNavigationParams.Checkout]: NavigatorScreenParams<CheckoutParamList>;
  [TabNavigationParams.Chat]: NavigatorScreenParams<ChatParamList>;
  [TabNavigationParams.Settings]: NO_PARAMS;
};
