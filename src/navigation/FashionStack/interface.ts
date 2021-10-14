import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum FashionistaParams {
  Fashionista = 'Fashionista',
  FashionistaDetail = 'FashionistaDetail',
}

export type FashionistaParamsList = {
  [FashionistaParams.Fashionista]: NO_PARAMS;
  [FashionistaParams.FashionistaDetail]: NO_PARAMS;
};

export type FashionNavigationProp<ParamList extends FashionistaParams> =
  StackNavigationProp<FashionistaParamsList, ParamList>;

export type FashionRouteProp<ParamList extends FashionistaParams> = RouteProp<
  FashionistaParamsList,
  ParamList
>;
