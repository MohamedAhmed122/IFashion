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
}

export const CartCard: React.FC<CartCardProps> = ({item, index}) => {
  const {image, name, price, description, isLiked} = item;
  // 1- ZoomIn --index + 0.5
  // 2- lightSpeedIn --index + 0.5
  // 3- fadeInUp -- index + 1
  // bounceIn
  // bounceInLeft
  return (
    <View
      style={styles.main}
      duration={1000 * (index + 1)}
      animation={'bounceInLeft'}>
      <TouchableOpacity style={styles.container}>
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
