import React from 'react';
import {View} from 'react-native';
import {Size} from 'components/Size';
import styles from './style';

interface CartSizeProps {
  selectSize: null | string;
  setSelectSize(size: string): void;
}

export const CartSizes: React.FC<CartSizeProps> = ({
  selectSize,
  setSelectSize,
}) => {
  return (
    <View style={styles.container}>
      {sizes.map(({id, size}) => (
        <Size
          key={id}
          size={size}
          onPress={() => setSelectSize(size)}
          active={selectSize === size}
        />
      ))}
    </View>
  );
};

const sizes = [
  {
    id: '1',
    size: 'M',
  },
  {
    id: '2',
    size: 'L',
  },
  {
    id: '3',
    size: 'XL',
  },
  {
    id: '4',
    size: 'XXL',
  },
];
