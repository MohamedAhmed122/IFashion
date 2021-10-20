import React from 'react';
import {Text} from 'react-native';
import {Screen} from 'common';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  FashionistaParamsList,
  FashionistaParams,
} from 'navigation/FashionStack/interface';

interface FashionistaScreenProps {
  navigation: StackNavigationProp<
    FashionistaParamsList,
    FashionistaParams.Fashionista
  >;
}

export const FashionistaScreen: React.FC<FashionistaScreenProps> = () => {
  return (
    <Screen>
      <Text>FashionistaScreen</Text>
    </Screen>
  );
};
