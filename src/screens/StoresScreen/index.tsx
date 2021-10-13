import React from 'react';
import {Text, View, Button} from 'react-native';

import {
  ShoppingStoreStackParams,
  RootNavigationProp,
} from '../../navigations/ShoppingStoreStack/interface';

interface StoreScreenProps {
  navigation: RootNavigationProp<ShoppingStoreStackParams.Store>;
}

export const StoresScreen: React.FC<StoreScreenProps> = ({navigation}) => {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Text>Store Screen</Text>
      <Button
        title="Go to Store Detail Screen"
        onPress={() => {
          navigation.navigate(ShoppingStoreStackParams.Store);
        }}
      />

      {/* <Button
        title="Go to Chat"
        onPress={() => {
          navigation.navigate('Chat');
        }}
      /> */}
    </View>
  );
};
