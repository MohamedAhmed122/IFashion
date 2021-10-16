import {AppText} from 'common';
import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {COLORS} from 'styles';
import styles from './style';

interface AppButtonProps {
  onPress(): void;
  color?: string;
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
}

export const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  color = COLORS.black,
  title,
  buttonStyle,
  buttonTextStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}, buttonStyle]}
      {...props}>
      <AppText style={[styles.text, buttonTextStyle]}>{title}</AppText>
    </TouchableOpacity>
  );
};
