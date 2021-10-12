import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum ShoppingStoreStackParams {
  Stores = 'Stores',
  Store = 'Store',
  ShoppingItems = 'ShoppingItems',
  ShoppingItem = 'ShoppingItem',
}

export type ShoppingStoreStackParamsParamList = {
  [ShoppingStoreStackParams.Stores]: NO_PARAMS;
  [ShoppingStoreStackParams.Store]: NO_PARAMS;
  [ShoppingStoreStackParams.ShoppingItems]: NO_PARAMS;
  [ShoppingStoreStackParams.ShoppingItem]: NO_PARAMS;
};

export type RootNavigationProp<P extends ShoppingStoreStackParams> =
  StackNavigationProp<ShoppingStoreStackParamsParamList, P>;

export type RootRouteProp<P extends ShoppingStoreStackParams> = RouteProp<
  ShoppingStoreStackParamsParamList,
  P
>;
