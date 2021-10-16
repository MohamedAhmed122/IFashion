import React from 'react';
import {Text} from 'react-native';
import {Screen} from 'common';

interface FavoriteScreenProps {}
export const FavoriteScreen: React.FC<FavoriteScreenProps> = () => {
  return (
    <Screen>
      <Text>FavoriteScreen</Text>
    </Screen>
  );
};
