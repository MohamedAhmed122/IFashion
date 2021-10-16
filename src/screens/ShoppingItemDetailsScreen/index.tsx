import React from 'react';
import {Text} from 'react-native';
import {Screen} from 'common';

interface ShoppingItemDetailsScreenProps {}

export const ShoppingItemDetailsScreen: React.FC<ShoppingItemDetailsScreenProps> =
  () => {
    return (
      <Screen>
        <Text>Shopping ItemDetails Screen</Text>
      </Screen>
    );
  };
