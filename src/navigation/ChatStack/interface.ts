export type NO_PARAMS = undefined;

export enum ChatParams {
  Chat = 'Chat',
  ChatList = 'ChatList',
  ChatSettings = 'ChatSettings',
}

export type ChatParamList = {
  Chat: {id: string};
  ChatList: NO_PARAMS;
  ChatSettings: NO_PARAMS;
};
