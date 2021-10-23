import {AppButton, AppText} from 'common';
import React from 'react';
import {View} from 'react-native';
import {Review} from 'types/ReviewTypes';
import styles from './style';

interface RenderItemProps {
  item: Review;
}

export const RenderItem: React.FC<RenderItemProps> = ({item}) => {
  return (
    <View
      key={item.id}
      style={[
        styles.container,
        {
          backgroundColor: item.color,
        },
      ]}>
      <View style={styles.emojiContainer}>
        <AppText style={styles.emoji}>{item.type}</AppText>
      </View>
      <AppButton
        title="Send Rating"
        onPress={() => {}}
        buttonStyle={styles.btn}
      />
    </View>
  );
};
