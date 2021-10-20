import {
  Image,
  ImageStyle,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

import {AppText} from 'common';
import React from 'react';
import {styles} from './style';

interface CategoryItemProps {
  containerStyle?: StyleProp<ViewStyle>;
  categoryTitle: string;
  categoryTitleStyle?: StyleProp<TextStyle>;
  categoryImageUrl: string;
  categoryImageStyle?: StyleProp<ImageStyle>;
  onPressCategory: () => void;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  containerStyle,
  categoryTitle,
  categoryTitleStyle,
  categoryImageUrl,
  categoryImageStyle,
  onPressCategory,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressCategory}
      style={[styles.container, containerStyle]}>
      <View style={styles.containerCategoryName}>
        <AppText
          fontFamily={'NotoSansMono-Bold'}
          style={[styles.categoryName, categoryTitleStyle]}>
          {categoryTitle}
        </AppText>
      </View>

      <Image
        source={{uri: categoryImageUrl}}
        style={[styles.imageStyle, categoryImageStyle]}
      />
    </TouchableOpacity>
  );
};
