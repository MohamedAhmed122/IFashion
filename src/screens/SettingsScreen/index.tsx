import React from 'react';
import {Text} from 'react-native';
import {Screen} from 'common';

interface SettingsScreenProps {}

export const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  return (
    <Screen>
      <Text>SettingsScreen</Text>
    </Screen>
  );
};
