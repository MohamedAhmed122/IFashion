import {ImageSourcePropType} from 'react-native';

export type ChatList = {
  id: string;
  username: string;
  image: ImageSourcePropType;
  msg: string;
  msgNum: number;
  isActive: boolean;
};
