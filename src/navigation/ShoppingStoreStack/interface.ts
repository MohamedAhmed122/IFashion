import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum ShoppingStoreStackParams {
  Stores = 'Stores',
  Store = 'Store',
  ShoppingItems = 'ShoppingItems',
  ShoppingItem = 'ShoppingItem',
  ChatSettings = 'ChatSettings',
}

export type ShoppingStoreStackParamsParamList = {
  [ShoppingStoreStackParams.Stores]: NO_PARAMS;
  [ShoppingStoreStackParams.Store]: NO_PARAMS;
  [ShoppingStoreStackParams.ShoppingItems]: NO_PARAMS;
  [ShoppingStoreStackParams.ShoppingItem]: NO_PARAMS;
  [ShoppingStoreStackParams.ChatSettings]: NO_PARAMS;
};

export type ShoppingNavigationProp<ParamList extends ShoppingStoreStackParams> =
  StackNavigationProp<ShoppingStoreStackParamsParamList, ParamList>;

export type ShoppingRouteProp<ParamList extends ShoppingStoreStackParams> =
  RouteProp<ShoppingStoreStackParamsParamList, ParamList>;
