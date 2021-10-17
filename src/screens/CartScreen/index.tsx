/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {cartItems, favorites} from 'assets/data';
import {activeTypeTitle} from 'utils';
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

interface CartScreenProps {
  navigation: StackNavigationProp<CheckoutParamList, CheckoutParams.Cart>;
}

export const CartScreen: React.FC<CartScreenProps> = ({}) => {
  const [activeTab, setActiveTab] = useState('Cart');

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <CartHeader title={activeTypeTitle(activeTab)} />
            <TopTab activeTab={activeTab} setActiveTab={setActiveTab} />
          </>
        )}
        contentContainerStyle={{paddingBottom: 30}}
        data={activeTab === 'Clothe' ? favorites : cartItems}
        keyExtractor={items => items.id}
        renderItem={({item, index}) => <CartCard item={item} index={index} />}
      />
    </Screen>
  );
};
