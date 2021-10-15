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

// export type TabNavigationParamList = {
//   [TabNavigationParams.Stores]: NavigatorScreenParams<ShoppingStoreStackParamsParamList>;
//   [TabNavigationParams.Fashion]: NavigatorScreenParams<FashionistaParamsList>;
//   [TabNavigationParams.Checkout]: NavigatorScreenParams<CheckoutParamList>;
//   [TabNavigationParams.Chat]: NavigatorScreenParams<ChatParamList>;
//   [TabNavigationParams.Settings]: NO_PARAMS;
// };

// export type TabsNavigationProp<ParamList extends TabNavigationParams> =
//   CompositeNavigationProp<
//     RootNavigationProp<RootStackParam.App>,
//     BottomTabNavigationProp<TabNavigationParamList, ParamList>
//   >;

// export type TabsRouteProp<P extends TabNavigationParams> = RouteProp<
//   TabNavigationParamList,
//   P
// >;
