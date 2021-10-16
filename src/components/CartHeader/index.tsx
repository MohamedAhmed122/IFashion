import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppText} from 'common';
import {IconContainer} from 'components/IconContainer';
import {COLORS} from 'styles';
import styles from './style';

interface CartHeaderProps {
  title: string;
}

export const CartHeader: React.FC<CartHeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{title}</AppText>
      <IconContainer>
        <Icon name="navicon" color={COLORS.gray90} size={28} />
      </IconContainer>
    </View>
  );
};
