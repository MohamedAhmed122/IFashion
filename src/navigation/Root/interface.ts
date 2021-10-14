import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {ChatParamList} from '../ChatStack/interface';
import {CheckoutParamList} from '../CheckoutStack/interface';
import {FashionistaParamsList} from '../FashionStack/interface';
import {ProfileParamsParamList} from '../ProfileStack/interface';
import {ShoppingStoreStackParamsParamList} from '../ShoppingStoreStack/interface';
import {TabNavigationParamList} from '../TabNavigation/interface';

export type NO_PARAMS = undefined;
export enum RootStackParam {
  App = 'App',
  ChatStack = 'ChatStack',
  ProfileStack = 'ProfileStack',
  ShoppingStoreStack = 'ShoppingStoreStack',
  CheckoutStack = 'CheckoutStack',
  FashionStack = 'FashionStack',
}

export type RootStackParamList = {
  [RootStackParam.App]: NavigatorScreenParams<TabNavigationParamList>;
  [RootStackParam.ChatStack]: NavigatorScreenParams<ChatParamList>;
  [RootStackParam.CheckoutStack]: NavigatorScreenParams<CheckoutParamList>;
  [RootStackParam.FashionStack]: NavigatorScreenParams<FashionistaParamsList>;
  [RootStackParam.ProfileStack]: NavigatorScreenParams<ProfileParamsParamList>;
  [RootStackParam.ShoppingStoreStack]: NavigatorScreenParams<ShoppingStoreStackParamsParamList>;
};

export type RootNavigationProp<ParamList extends RootStackParam> =
  StackNavigationProp<RootStackParamList, ParamList>;

export type RootRouteProp<ParamList extends RootStackParam> = RouteProp<
  RootStackParamList,
  ParamList
>;
