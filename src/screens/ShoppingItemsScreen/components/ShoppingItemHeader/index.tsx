import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from 'styles';
import {SearchBar} from 'common';

import {styles} from './style';
import {View} from 'react-native-animatable';

interface ShoppingItemHeaderProps {
  onPress: () => void;
  onTextChange: () => void;
  onSearch: () => void;
  searchBarValue: string;
}
export const ShoppingItemHeader: React.FC<ShoppingItemHeaderProps> = ({
  onPress,
  searchBarValue,
  onSearch,
  onTextChange,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.TouchableOpacityStyle}>
        <Icon name="arrowleft" color={COLORS.black} size={32} />
      </TouchableOpacity>
      <SearchBar
        value={searchBarValue}
        onTextChange={onTextChange}
        onSearch={onSearch}
      />
    </View>
  );
};
