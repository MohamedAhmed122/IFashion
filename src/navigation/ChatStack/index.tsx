import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {ChatParams, ChatParamList} from './interface';
//SCREENS
import {ChatListScreen} from 'screens/ChatListScreen';
import {ChatScreen} from 'screens/ChatScreen';
import {ChatSettingsScreen} from 'screens/ChatSettingsScreen';

const Stack = createNativeStackNavigator<ChatParamList>();

export const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ChatParams.ChatList} component={ChatListScreen} />
      <Stack.Screen name={ChatParams.Chat} component={ChatScreen} />
      <Stack.Screen
        name={ChatParams.ChatSettings}
        component={ChatSettingsScreen}
      />
    </Stack.Navigator>
  );
};
