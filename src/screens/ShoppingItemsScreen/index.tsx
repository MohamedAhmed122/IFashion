import React from 'react';
import {Text} from 'react-native';
import {Screen} from 'common';

interface ShoppingItemsScreenProps {}

export const ShoppingItemsScreen: React.FC<ShoppingItemsScreenProps> = () => {
  return (
    <Screen>
      <Text>Shopping Items Screen</Text>
    </Screen>
  );
};
