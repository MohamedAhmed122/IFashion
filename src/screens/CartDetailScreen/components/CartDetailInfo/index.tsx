import React from 'react';
import {View} from 'react-native';
import {AppButton, AppText} from 'common';
import styles from './style';
import {COLORS} from 'styles';
import {CartItem} from 'types';

interface CartInfoProps {
  isSizeSelected: boolean;
  onPress(): void;
  cartItem?: CartItem;
}

export const CartInfo: React.FC<CartInfoProps> = ({
  isSizeSelected,
  onPress,
  cartItem,
}) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.desc}>{cartItem?.description}</AppText>
      <AppButton
        title={`Buy for ${cartItem?.price}$ `}
        onPress={onPress}
        color={isSizeSelected ? COLORS.selectiveYellow : COLORS.quicksilver}
        buttonStyle={styles.btn}
      />
    </View>
  );
};
