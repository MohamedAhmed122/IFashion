import React from 'react';
import {Text} from 'react-native';
import {AppButton, Screen} from 'common';
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

export const FashionistaScreen: React.FC<FashionistaScreenProps> = ({
  navigation,
}) => {
  return (
    <Screen>
      <Text>FashionistaScreen</Text>
      <AppButton
        title="Go Fashion Detail "
        onPress={() => {
          navigation.navigate(FashionistaParams.FashionistaDetail);
        }}
      />
    </Screen>
  );
};
