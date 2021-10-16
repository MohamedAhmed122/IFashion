import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppText} from 'common';
import {IconContainer} from 'components/IconContainer';
import {COLORS} from 'styles';
import styles from './style';

export const CartHeader = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>My Favorites</AppText>
      <IconContainer>
        <Icon name="navicon" color={COLORS.gray90} size={28} />
      </IconContainer>
    </View>
  );
};
