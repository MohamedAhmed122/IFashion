import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum ChatParams {
  Chat = 'Chat',
  ChatList = 'ChatList',
  ChatSettings = 'ChatSettings',
}

// export type ChatParamList = {
//   [ChatParams.Chat]: NO_PARAMS;
//   [ChatParams.ChatList]: NO_PARAMS;
//   [ChatParams.ChatSettings]: NO_PARAMS;
// };

export type ChatParamList = {
  Chat: NO_PARAMS;
  ChatList: NO_PARAMS;
  ChatSettings: NO_PARAMS;
};

export type RootNavigationProp<P extends ChatParams> = StackNavigationProp<
  ChatParamList,
  P
>;

export type RootRouteProp<P extends ChatParams> = RouteProp<ChatParamList, P>;
