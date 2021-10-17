import React, {useEffect} from 'react';
import {StyleSheet, StatusBar} from 'react-native';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import {getShopsList} from 'redux/shops/action';
import {MAX_HEIGHT, ShopItem} from './components/ShopItem';

const items = [
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    picture: require('./assets/chanel.jpg'),
  },
  {
    title: 'In Boutiques',
    subtitle: 'FALL-WINTER 2020/21',
    picture: require('./assets/sonnie-hiles-pU4J5VFnqCQ-unsplash-with-gradient.jpg'),
  },
  {
    title: 'Deauville Film Festival',
    subtitle: 'CHANEL IN CINEMA',
    picture: require('./assets/laura-chouette-NFrPPyGe5q0-unsplash-with-gradient.jpg'),
  },
  {
    title: 'IN BOUTIQUES',
    subtitle: "Métiers d'art 2019/20",
    picture: require('./assets/butsarakham-buranaworachot-au6Gddf1pZQ-unsplash.jpg'),
  },
  {
    title: 'Haute Couture',
    subtitle: 'FALL-WINTER 2020/21',
    picture: require('./assets/khaled-ghareeb-upepKTbwm3A-unsplash.jpg'),
  },
  {
    title: 'Balade en Méditerranée',
    subtitle: 'CRUISE 2020/21',
    picture: require('./assets/christopher-campbell-A3QXXEfcA1U-unsplash.jpg'),
  },
  {
    title: 'Spring-Summer 2020 Campaign',
    subtitle: 'EYEWEAR',
    picture: require('./assets/chase-fade-Pb13EUxzMDw-unsplash.jpg'),
  },
];

export const StoresScreen = () => {
  const dispatch = useDispatch();
  const {shops, error, loading} = useSelector(
    (state: RootState) => state.shops,
  );
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {y: value}}) => {
      y.value = value;
    },
  });

  useEffect(() => {
    dispatch(getShopsList());
  }, [dispatch]);

  return (
    <>
      <StatusBar hidden />
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        snapToInterval={MAX_HEIGHT}
        contentContainerStyle={styles.container}
        decelerationRate="fast">
        {items?.map((item, index) => (
          <ShopItem item={item} key={index} y={y} index={index} />
        ))}
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: items.length * MAX_HEIGHT,
    backgroundColor: '#ffffff',
  },
});
