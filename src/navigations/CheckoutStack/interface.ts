import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum CheckoutParams {
  Cart = 'Cart',
  Payment = 'Payment',
  Review = 'Review',
}

export type CheckoutParamList = {
  [CheckoutParams.Cart]: NO_PARAMS;
  [CheckoutParams.Payment]: NO_PARAMS;
  [CheckoutParams.Review]: NO_PARAMS;
};

export type RootNavigationProp<P extends CheckoutParams> = StackNavigationProp<
  CheckoutParamList,
  P
>;

export type RootRouteProp<P extends CheckoutParams> = RouteProp<
  CheckoutParamList,
  P
>;
