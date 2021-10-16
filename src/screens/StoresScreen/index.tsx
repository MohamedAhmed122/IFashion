import React from 'react';
import {Button} from 'react-native';

import {
  TabNavigationParamList,
  TabNavigationParams,
} from 'navigation/TabNavigation/interface';
import {StackNavigationProp} from '@react-navigation/stack';
import {Stacks} from 'navigation/Stacks';
import {Screen} from 'common';
interface StoreScreenProps {
  navigation: StackNavigationProp<
    TabNavigationParamList,
    TabNavigationParams.StoreTab
  >;
}

export const StoresScreen: React.FC<StoreScreenProps> = ({navigation}) => {
  return (
    <Screen>
      <Button
        title="Go to FashionistaDetail (Deferent Stack)"
        onPress={() => {
          navigation.navigate(TabNavigationParams.FashionTab, {
            screen: Stacks.FashionStack.FashionistaDetail,
          });
        }}
      />
    </Screen>
  );
};
