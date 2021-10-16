import React from 'react';
import {Text} from 'react-native';
import {Screen} from 'common';

interface ReviewScreenProps {}

export const ReviewScreen: React.FC<ReviewScreenProps> = () => {
  return (
    <Screen>
      <Text>ReviewScreen</Text>
    </Screen>
  );
};
