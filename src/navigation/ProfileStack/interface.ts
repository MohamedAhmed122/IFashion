export type NO_PARAMS = undefined;

export enum ProfileParams {
  Profile = 'Profile',
  CreateProfile = 'CreateProfile',
  EditProfile = 'EditProfile',
  Settings = 'Settings',
}

export type ProfileParamsParamList = {
  Profile: NO_PARAMS;
  CreateProfile: NO_PARAMS;
  EditProfile: NO_PARAMS;
  [ProfileParams.Settings]: NO_PARAMS;
};
