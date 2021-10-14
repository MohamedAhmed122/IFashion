import {FashionistaParamsList} from '../FashionStack/interface';
import {ShoppingStoreStackParamsParamList} from './../ShoppingStoreStack/interface';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {CheckoutParamList} from '../CheckoutStack/interface';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {ChatParamList} from '../ChatStack/interface';
import {RootNavigationProp, RootStackParam} from '../Root/interface';

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
  [TabNavigationParams.Fashion]: NavigatorScreenParams<FashionistaParamsList>;
  [TabNavigationParams.Checkout]: NavigatorScreenParams<CheckoutParamList>;
  [TabNavigationParams.Chat]: NavigatorScreenParams<ChatParamList>;
  [TabNavigationParams.Settings]: NO_PARAMS;
};

export type TabsNavigationProp<ParamList extends TabNavigationParams> =
  CompositeNavigationProp<
    RootNavigationProp<RootStackParam.App>,
    BottomTabNavigationProp<TabNavigationParamList, ParamList>
  >;

export type TabsRouteProp<P extends TabNavigationParams> = RouteProp<
  TabNavigationParamList,
  P
>;
