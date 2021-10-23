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
  isFashionista: boolean;
}

export const CartInfo: React.FC<CartInfoProps> = ({
  isSizeSelected,
  onPress,
  cartItem,
  isFashionista,
}) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.desc}>{cartItem?.description}</AppText>
      <AppButton
        title={
          isFashionista
            ? `Chat with${cartItem?.name}`
            : `Buy for ${cartItem?.price}$ `
        }
        onPress={onPress}
        color={
          isFashionista
            ? COLORS.selectiveYellow
            : isSizeSelected
            ? COLORS.selectiveYellow
            : COLORS.quicksilver
        }
        buttonStyle={styles.btn}
      />
      {isFashionista && (
        <AppButton
          title="Visit Fashionista Profile"
          onPress={() => {}}
          color={COLORS.jellyBean}
        />
      )}
    </View>
  );
};
