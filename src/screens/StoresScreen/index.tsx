import React from 'react';
import {View, Button} from 'react-native';

import {AppText} from 'components';
import {RootNavigationProp, RootStackParam} from 'navigation/Root/interface';
import {Stacks} from 'navigation/Stacks';

interface StoreScreenProps {
  navigation: RootNavigationProp<RootStackParam.ShoppingStoreStack>;
}

export const StoresScreen: React.FC<StoreScreenProps> = ({navigation}) => {
  console.log(Stacks.ChatStack.ChatSettings);

  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <AppText fontFamily={'NotoSansMono-Bold'}>Store Details</AppText>
      <Button
        title="Go to Store Detail Screen"
        onPress={() => {
          navigation.navigate(Stacks.Root.ShoppingStoreStack, {
            screen: Stacks.ShoppingStack.ShoppingItems,
          });
        }}
      />

      <Button
        title="Go to Chat"
        onPress={() => {
          navigation.navigate(Stacks.Root.ShoppingStoreStack, {
            screen: Stacks.ShoppingStack.ShoppingItems,
          });
        }}
      />
    </View>
  );
};
