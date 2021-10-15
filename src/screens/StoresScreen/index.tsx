import React from 'react';
import {View, Button} from 'react-native';
import {AppText} from 'components';
import {
  TabNavigationParamList,
  TabNavigationParams,
} from 'navigation/TabNavigation/interface';
import {StackNavigationProp} from '@react-navigation/stack';
import {Stacks} from 'navigation/Stacks';
interface StoreScreenProps {
  navigation: StackNavigationProp<
    TabNavigationParamList,
    TabNavigationParams.StoreTab
  >;
}

export const StoresScreen: React.FC<StoreScreenProps> = ({navigation}) => {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <AppText fontFamily={'NotoSansMono-Bold'}>Store Details</AppText>
      <Button
        title="Go to FashionistaDetail (Deferent Stack)"
        onPress={() => {
          navigation.navigate(TabNavigationParams.FashionTab, {
            screen: Stacks.FashionStack.FashionistaDetail,
          });
        }}
      />
    </View>
  );
};
