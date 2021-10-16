import React from 'react';
import {Text} from 'react-native';
import {Screen} from 'common';

interface ProfileScreenProps {}

export const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return (
    <Screen>
      <Text>ProfileScreen</Text>
    </Screen>
  );
};
