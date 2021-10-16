import React from 'react';
import {Text} from 'react-native';
import {Screen} from 'common';

interface FavoriteFashionScreenProps {}

export const FavoriteFashionScreen: React.FC<FavoriteFashionScreenProps> =
  () => {
    return (
      <Screen>
        <Text>FavoriteFashionScreen</Text>
      </Screen>
    );
  };
