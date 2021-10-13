import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum FashionParams {
  Fashionista = 'Fashionista',
  FashionistaDetail = 'FashionistaDetail',
}

export type FashionParamList = {
  [FashionParams.Fashionista]: NO_PARAMS;
  [FashionParams.FashionistaDetail]: NO_PARAMS;
};

export type RootNavigationProp<P extends FashionParams> = StackNavigationProp<
  FashionParamList,
  P
>;

export type RootRouteProp<P extends FashionParams> = RouteProp<
  FashionParamList,
  P
>;
