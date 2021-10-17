import React from 'react';
import {StatusBar} from 'react-native';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
// import {useDispatch, useSelector} from 'react-redux';
// import {RootState} from 'redux/rootReducer';
// import {getShopsList} from 'redux/shops/action';
import {items} from 'assets/data';
import {ShopItem} from './components/ShopItem';
import {MAX_HEIGHT} from './components/style';
import {styles} from './style';

export const StoresScreen = () => {
  // const dispatch = useDispatch();
  // const {shops, error, loading} = useSelector(
  //   (state: RootState) => state.shops,
  // );

  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {y: value}}) => {
      y.value = value;
    },
  });

  // useEffect(() => {
  //   dispatch(getShopsList());
  // }, [dispatch]);

  return (
    <>
      <StatusBar hidden />
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        snapToInterval={MAX_HEIGHT}
        contentContainerStyle={[
          styles.container,
          {height: items.length * MAX_HEIGHT},
        ]}
        decelerationRate="fast">
        {items?.map((item, index) => (
          <ShopItem item={item} key={index} y={y} index={index} />
        ))}
      </Animated.ScrollView>
    </>
  );
};
