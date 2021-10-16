import styles from './style';
import React from 'react';
import {TouchableOpacity} from 'react-native';

interface IconContainerProps {
  activeStyle?: boolean;
  onPress?(): void;
}

export const IconContainer: React.FC<IconContainerProps> = ({
  activeStyle,
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={activeStyle ? styles.activeContainer : styles.defaultContainer}>
      {children}
    </TouchableOpacity>
  );
};
