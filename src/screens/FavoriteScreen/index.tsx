/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import {cartItems} from 'assets/data';
// TYPES
import {StackNavigationProp} from '@react-navigation/stack';
import {
  CheckoutParamList,
  CheckoutParams,
} from 'navigation/CheckoutStack/interface';
// RENDER && STYLES
import {Screen} from 'common';
import {CartHeader} from '../../components/CartHeader';
import {TopTab} from 'components/TopTab';
import {CartCard} from 'components/Card';

interface FavoriteScreenProps {
  navigation: StackNavigationProp<
    CheckoutParamList,
    CheckoutParams.FavoriteFashion
  >;
}

export const FavoriteScreen: React.FC<FavoriteScreenProps> = ({}) => {
  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <CartHeader title="My Favorite Clothe" />
            <TopTab title="Clothe" />
          </>
        )}
        contentContainerStyle={{paddingBottom: 30}}
        data={cartItems}
        keyExtractor={items => items.id}
        renderItem={({item}) => <CartCard item={item} />}
      />
    </Screen>
  );
};
