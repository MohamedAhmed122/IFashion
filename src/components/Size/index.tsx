import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

interface SizeProps {
  onPress?(): void;
  size: string;
  active?: boolean;
}

export const Size: React.FC<SizeProps> = ({onPress, active, size}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, active && styles.active]}>
      <Text style={styles.text}>{size}</Text>
    </TouchableOpacity>
  );
};
