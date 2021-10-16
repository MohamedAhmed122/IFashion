import React from 'react';
import {Button} from 'react-native';

import {
  RootNavigation,
  TabNavigationParams,
} from 'navigation/TabNavigation/interface';
import {Stacks} from 'navigation/Stacks';
import {AppButton, Loader, Screen} from 'common';
interface StoreScreenProps {
  navigation: RootNavigation;
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
      <AppButton title="Hello" onPress={() => {}} />
      <Loader defaultLoader />
    </Screen>
  );
};
