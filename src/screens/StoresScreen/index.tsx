import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import {RootNavigation} from 'navigation/TabNavigation/interface';
import {Screen} from 'common';

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import {getShopsList} from 'redux/shops/action';
import {MAX_HEIGHT} from './components/ShopItem/style';
import ShopItem from './components/ShopItem/ShopItem';

interface StoreScreenProps {}

export const StoresScreen: React.FC<StoreScreenProps> = ({}) => {
  const items = [
    {
      title: 'Upcoming Show Live from Paris',
      subtitle: 'SPRING-SUMMER 2021',
      picture:
        'https://image.freepik.com/free-photo/smiling-girl-round-sunglasses-jumps-woman-with-red-curls-bright-outfit-is-having-fun-purple-space_197531-15396.jpg',
      top: 0,
    },
    {
      title: 'In Boutiques',
      subtitle: 'FALL-WINTER 2020/21',
      picture:
        'https://image.freepik.com/free-photo/smiling-girl-round-sunglasses-jumps-woman-with-red-curls-bright-outfit-is-having-fun-purple-space_197531-15396.jpg',
      top: 0,
    },
    {
      title: 'Deauville Film Festival',
      subtitle: 'CHANEL IN CINEMA',
      picture:
        'https://image.freepik.com/free-photo/smiling-girl-round-sunglasses-jumps-woman-with-red-curls-bright-outfit-is-having-fun-purple-space_197531-15396.jpg',
      top: 0,
    },
    {
      title: 'IN BOUTIQUES',
      subtitle: "Métiers d'art 2019/20",
      picture:
        'https://image.freepik.com/free-photo/smiling-girl-round-sunglasses-jumps-woman-with-red-curls-bright-outfit-is-having-fun-purple-space_197531-15396.jpg',
      top: 0,
    },
    {
      title: 'Haute Couture',
      subtitle: 'FALL-WINTER 2020/21',
      picture:
        'https://image.freepik.com/free-photo/smiling-girl-round-sunglasses-jumps-woman-with-red-curls-bright-outfit-is-having-fun-purple-space_197531-15396.jpg',
      top: 50,
    },
    {
      title: 'Balade en Méditerranée',
      subtitle: 'CRUISE 2020/21',
      picture:
        'https://image.freepik.com/free-photo/smiling-girl-round-sunglasses-jumps-woman-with-red-curls-bright-outfit-is-having-fun-purple-space_197531-15396.jpg',
      top: 0,
    },
    {
      title: 'Spring-Summer 2020 Campaign',
      subtitle: 'EYEWEAR',
      picture:
        'https://image.freepik.com/free-photo/smiling-girl-round-sunglasses-jumps-woman-with-red-curls-bright-outfit-is-having-fun-purple-space_197531-15396.jpg',
      top: 0,
    },
  ];
  const translationY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset}) => {
      console.log(contentOffset.y, '=====problem');

      translationY.value = contentOffset.y;
    },
  });

  const dispatch = useDispatch();
  const {shops, loading, error} = useSelector(
    (state: RootState) => state.shops,
  );

  useEffect(() => {
    dispatch(getShopsList());
  }, [dispatch]);

  const styles = StyleSheet.create({
    container: {
      height: (items.length + 1) * MAX_HEIGHT,
      backgroundColor: 'black',
    },
  });

  return (
    <Animated.ScrollView
      style={styles.container}
      onScroll={onScroll}
      scrollEventThrottle={16}>
      <View style={{backgroundColor: '#fff'}}>
        {items?.map((item, index) => (
          <ShopItem item={item} key={index} y={translationY} index={index} />
        ))}
      </View>
    </Animated.ScrollView>
  );
};
