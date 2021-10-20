import styles from './style';
import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

interface IconContainerProps {
  activeStyle?: boolean;
  onPress?(): void;
  style?: StyleProp<ViewStyle>;
}

export const IconContainer: React.FC<IconContainerProps> = ({
  activeStyle,
  children,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        activeStyle ? styles.activeContainer : styles.defaultContainer,
        style,
      ]}>
      {children}
    </TouchableOpacity>
  );
};
