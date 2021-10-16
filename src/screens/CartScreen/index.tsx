import {StackNavigationProp} from '@react-navigation/stack';
import {Screen} from 'common';
import {
  CheckoutParamList,
  CheckoutParams,
} from 'navigation/CheckoutStack/interface';
import React from 'react';
import {Text, Button} from 'react-native';
interface CartScreenProps {
  navigation: StackNavigationProp<CheckoutParamList, CheckoutParams.Cart>;
}

export const CartScreen: React.FC<CartScreenProps> = ({navigation}) => {
  let a7a;
  return (
    <Screen>
      <Button
        title="Go To Review (same Stack)"
        onPress={() => navigation.navigate(CheckoutParams.Review)}
      />
      <>CartScreen</>
    </Screen>
  );
};
