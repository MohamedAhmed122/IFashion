import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum FashionistaParams {
  Fashionista = 'Fashionista',
  FashionistaDetail = 'FashionistaDetail',
}

export type FashionistaParamsParamList = {
  [FashionistaParams.Fashionista]: NO_PARAMS;
  [FashionistaParams.FashionistaDetail]: NO_PARAMS;
};

export type RootNavigationProp<P extends FashionistaParams> =
  StackNavigationProp<FashionistaParamsParamList, P>;

export type RootRouteProp<P extends FashionistaParams> = RouteProp<
  FashionistaParamsParamList,
  P
>;
