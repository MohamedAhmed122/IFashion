import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {ProfileParams, ProfileParamsParamList} from './interface';
//SCREENS
import {ProfileScreen} from 'screens/ProfileScreen';
import {CreateProfileScreen} from 'screens/CreateProfileScreen';
import {EditProfileScreen} from 'screens/EditProfileScreen';
import {SettingsScreen} from 'screens/SettingsScreen';

const Stack = createNativeStackNavigator<ProfileParamsParamList>();

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ProfileParams.Profile} component={ProfileScreen} />
      <Stack.Screen
        name={ProfileParams.CreateProfile}
        component={CreateProfileScreen}
      />
      <Stack.Screen
        name={ProfileParams.EditProfile}
        component={EditProfileScreen}
      />
      <Stack.Screen name={ProfileParams.Settings} component={SettingsScreen} />
    </Stack.Navigator>
  );
};
