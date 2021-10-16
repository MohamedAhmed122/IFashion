import {StackNavigationProp} from '@react-navigation/stack';
import {FashionistaParamsList} from '../FashionStack/interface';
import {ShoppingStoreStackParamsParamList} from './../ShoppingStoreStack/interface';
import {NavigatorScreenParams} from '@react-navigation/native';
import {CheckoutParamList} from '../CheckoutStack/interface';
import {ChatParamList} from '../ChatStack/interface';

export type NO_PARAMS = undefined;

export enum TabNavigationParams {
  StoreTab = 'StoreTab',
  FashionTab = 'FashionTab',
  CheckoutTab = 'CheckoutTab',
  ChatTab = 'ChatTab',
  Settings = 'Settings',
}

export type TabNavigationParamList = {
  StoreTab: NavigatorScreenParams<ShoppingStoreStackParamsParamList>;
  FashionTab: NavigatorScreenParams<FashionistaParamsList>;
  CheckoutTab: NavigatorScreenParams<CheckoutParamList>;
  ChatTab: NavigatorScreenParams<ChatParamList>;
  Settings: NO_PARAMS;
};

export type RootNavigation = StackNavigationProp<
  TabNavigationParamList,
  TabNavigationParams
>;
