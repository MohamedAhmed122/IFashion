import React from 'react';
import {Text} from 'react-native';
import {Screen} from 'common';

interface ChatListScreenProps {}

export const ChatListScreen: React.FC<ChatListScreenProps> = () => {
  return (
    <Screen>
      <Text>Chat List</Text>
    </Screen>
  );
};
