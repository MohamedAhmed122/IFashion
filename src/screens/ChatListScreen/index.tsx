import React from 'react';
import {ChatHeader, ChatList} from './components';
import {chatList} from 'assets/data';
import {FlatList} from 'react-native';
import {Screen} from 'common';
import styles from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {ChatParamList, ChatParams} from 'navigation/ChatStack/interface';

interface ChatListScreenProps {
  navigation: StackNavigationProp<ChatParamList, ChatParams.ChatList>;
}

export const ChatListScreen: React.FC<ChatListScreenProps> = ({navigation}) => {
  const handleNavigate = (id: string): void =>
    navigation.navigate(ChatParams.Chat, {id});
  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => <ChatHeader />}
        contentContainerStyle={styles.contentContainerStyle}
        data={chatList}
        keyExtractor={items => items.id}
        renderItem={({item}) => (
          <ChatList item={item} onPress={handleNavigate} />
        )}
      />
    </Screen>
  );
};
