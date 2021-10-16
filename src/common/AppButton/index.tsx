import {AppText} from 'common';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {COLORS} from 'styles';
import styles from './style';

interface AppButtonProps {
  onPress(): void;
  color?: string;
  title: string;
}

export const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  color = COLORS.black,
  title,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}>
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
};
