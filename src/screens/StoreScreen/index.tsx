import React from 'react';
import {Text} from 'react-native';
import {Screen} from 'common';

interface StoreScreenProps {}

export const StoreScreen: React.FC<StoreScreenProps> = () => {
  return (
    <Screen>
      <Text>Store Screen</Text>
    </Screen>
  );
};
