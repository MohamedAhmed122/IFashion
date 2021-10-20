import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Entypo';
import {AppText} from 'common';
import {IconContainer} from 'components/IconContainer';
import {COLORS} from 'styles';
import styles from './style';
import {CartItem} from 'types';

interface CartDetailHeaderProps {
  onBackPress(): void;
  onFavoritePress(): void;
  isFavoriteActive: boolean;
  cartItem?: CartItem;
}

export const CartDetailHeader: React.FC<CartDetailHeaderProps> = ({
  onBackPress,
  onFavoritePress,
  isFavoriteActive,
  cartItem,
}) => {
  return (
    <View style={styles.container}>
      <Animatable.View
        style={styles.IconContainers}
        delay={100}
        animation="slideInLeft">
        <IconContainer style={styles.borderIconContainer} onPress={onBackPress}>
          <Icon
            name="chevron-small-left"
            color={COLORS.quicksilver}
            size={35}
          />
        </IconContainer>
        <TouchableOpacity onPress={onFavoritePress} style={styles.favoriteIcon}>
          <Icon
            name={isFavoriteActive ? 'heart' : 'heart-outlined'}
            color={
              isFavoriteActive ? COLORS.selectiveYellow : COLORS.quicksilver
            }
            size={40}
          />
        </TouchableOpacity>

        <IconContainer activeStyle style={styles.IconContainer}>
          <Icon name="list" color={COLORS.white} size={28} />
        </IconContainer>
      </Animatable.View>
      <Animatable.View animation="slideInRight" delay={100}>
        <Image
          style={styles.image}
          source={cartItem?.image || require('assets/Image/suit.jpg')}
          resizeMode="cover"
        />
        <AppText style={styles.appText}>{cartItem?.name}</AppText>
      </Animatable.View>
    </View>
  );
};
