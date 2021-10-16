import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  RootNavigation,
  TabNavigationParams,
} from 'navigation/TabNavigation/interface';
import {useNavigation} from '@react-navigation/core';
import {CheckoutParams} from 'navigation/CheckoutStack/interface';

import {AppText} from 'common';
import styles from './style';

interface TopTabProps {
  title: string;
}

export const TopTab: React.FC<TopTabProps> = ({title}) => {
  const navigation = useNavigation<RootNavigation>();

  const handleNavigate = (screen: CheckoutParams) =>
    navigation.navigate(TabNavigationParams.CheckoutTab, {screen: screen});

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          title === 'Cart' ? styles.activeTab : styles.tab,
          styles.TabLeft,
        ]}
        onPress={() => handleNavigate(CheckoutParams.Cart)}>
        <AppText>Cart</AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={title === 'Clothe' ? styles.activeTab : styles.tab}
        onPress={() => handleNavigate(CheckoutParams.FavoriteItem)}>
        <AppText> Clothe</AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          title === 'Fashion' ? styles.activeTab : styles.tab,
          styles.tabRight,
        ]}
        onPress={() => handleNavigate(CheckoutParams.FavoriteFashion)}>
        <AppText> Fashion</AppText>
      </TouchableOpacity>
    </View>
  );
};
