import React from 'react';
import {Alert, View, Text, Image} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {MAX_HEIGHT, MIN_HEIGHT, styles} from './style';

interface Item {
  title: string;
  subtitle: string;
  picture: number;
}

interface ItemProps {
  index: number;
  y: Animated.SharedValue<number>;
  item: Item;
}

export const ShopItem: React.FC<ItemProps> = ({y, index, item}) => {
  const container = useAnimatedStyle(() => ({
    height: interpolate(
      y.value,
      [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
      [MIN_HEIGHT, MAX_HEIGHT],
      Extrapolate.CLAMP,
    ),
  }));
  const titleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      y.value,
      [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
      [0, 1],
      Extrapolate.CLAMP,
    );
    return {
      opacity,
    };
  });

  return (
    <TouchableWithoutFeedback onPress={() => Alert.alert('Pressed!')}>
      <Animated.View style={[styles.container, container]}>
        <Image source={item.picture} style={styles.picture} />
        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>{item.subtitle.toUpperCase()}</Text>
          <View style={styles.mainTitle}>
            <Animated.View style={titleStyle}>
              <Text style={styles.title}>{item.title.toUpperCase()}</Text>
            </Animated.View>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
