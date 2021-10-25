import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from 'styles';
import styles from './style';

interface DeleteActionProps {}

export const DeleteAction: React.FC<DeleteActionProps> = () => {
  return (
    <TouchableOpacity style={styles.main}>
      <Icon name="trash-2" color={COLORS.red} size={23} />
    </TouchableOpacity>
  );
};
