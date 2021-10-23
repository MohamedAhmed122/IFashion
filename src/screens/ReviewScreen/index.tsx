import React from 'react';
import {FlatList, View, Dimensions} from 'react-native';
import {reviews} from 'assets/data';
import {RenderItem} from './RenderItem';
import styles from './style';

const {width} = Dimensions.get('window');

interface ReviewScreenProps {}

export const ReviewScreen: React.FC<ReviewScreenProps> = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        disableIntervalMomentum={true}
        decelerationRate={0}
        snapToInterval={width}
        snapToAlignment={'center'}
        data={reviews}
        keyExtractor={items => items.id.toString()}
        renderItem={({item}) => <RenderItem item={item} />}
      />
    </View>
  );
};
