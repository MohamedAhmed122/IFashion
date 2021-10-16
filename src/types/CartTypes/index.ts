import {ImageSourcePropType} from 'react-native';

export interface CartItem {
  id: string;
  name: string;
  image: ImageSourcePropType;
  description: string;
  isLiked: boolean;
  price: number;
}
