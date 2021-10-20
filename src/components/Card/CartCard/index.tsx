import React from 'react';
import {CartItem} from 'types';
import {View} from 'react-native-animatable';
import {Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppText} from 'common';
import {COLORS} from 'styles';
import styles from './style';

interface CartCardProps {
  item: CartItem;
  index: number;
  onItemPress(): void;
}

export const CartCard: React.FC<CartCardProps> = ({
  item,
  index,
  onItemPress,
}) => {
  const {image, name, price, description, isLiked} = item;

  return (
    <View
      style={styles.main}
      duration={1000 * (index + 1)}
      animation={'fadeInUp'}>
      <TouchableOpacity style={styles.container} onPress={onItemPress}>
        <Image source={image} resizeMode="cover" style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{name} </Text>
          <AppText style={styles.desc}>{description}</AppText>
          <AppText style={styles.price}>{price}$</AppText>
        </View>
      </TouchableOpacity>
      <Icon
        name={isLiked ? 'hearto' : 'heart'}
        color={COLORS.selectiveYellow}
        size={25}
        style={styles.icon}
      />
    </View>
  );
};
