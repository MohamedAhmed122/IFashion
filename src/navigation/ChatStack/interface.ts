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

export type ChatNavigationProp<ParamList extends ChatParams> =
  StackNavigationProp<ChatParamList, ParamList>;

export type ChatRouteProp<ParamList extends ChatParams> = RouteProp<
  ChatParamList,
  ParamList
>;
