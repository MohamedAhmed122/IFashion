import React from 'react';
import {Text} from 'react-native';
import {Screen} from 'common';

interface ChatScreenProps {}

export const ChatScreen: React.FC<ChatScreenProps> = ({}) => {
  return (
    <Screen>
      <Text>ChatScreen</Text>
    </Screen>
  );
};
