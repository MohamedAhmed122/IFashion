import {StackNavigationProp} from '@react-navigation/stack';

import {
  CheckoutParamList,
  CheckoutParams,
} from 'navigation/CheckoutStack/interface';
import React from 'react';
import {Text, View, Button} from 'react-native';

interface CartScreenProps {
  navigation: StackNavigationProp<CheckoutParamList, CheckoutParams.Cart>;
}

export const CartScreen: React.FC<CartScreenProps> = ({navigation}) => {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Button
        title="Go To Review (same Stack)"
        onPress={() => navigation.navigate(CheckoutParams.Review)}
      />
      <Text>CartScreen</Text>
    </View>
  );
};
