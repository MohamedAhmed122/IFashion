import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum ProfileParams {
  Profile = 'Profile',
  CreateProfile = 'CreateProfile',
  EditProfile = 'EditProfile',
  Settings = 'Settings',
}

export type ProfileParamsParamList = {
  [ProfileParams.Profile]: NO_PARAMS;
  [ProfileParams.CreateProfile]: NO_PARAMS;
  [ProfileParams.EditProfile]: NO_PARAMS;
  [ProfileParams.Settings]: NO_PARAMS;
};

export type RootNavigationProp<P extends ProfileParams> = StackNavigationProp<
  ProfileParamsParamList,
  P
>;

export type RootRouteProp<P extends ProfileParams> = RouteProp<
  ProfileParamsParamList,
  P
>;
