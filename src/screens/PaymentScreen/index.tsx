import React from 'react';
import {Text} from 'react-native';
import {Screen} from 'common';

interface PaymentScreenProps {}

export const PaymentScreen: React.FC<PaymentScreenProps> = () => {
  return (
    <Screen>
      <Text>PaymentScreen</Text>
    </Screen>
  );
};
