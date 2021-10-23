import React, {useState} from 'react';
// TYPE
import {
  CheckoutParamList,
  CheckoutParams,
} from 'navigation/CheckoutStack/interface';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';
import {CartItem} from 'types';
// DATA
import {cartItems} from 'assets/data';
// RENDER
import {Screen} from 'common';
import {CartDetailHeader, CartSizes, CartInfo} from './components';
import Toast from 'react-native-toast-message';

interface CartDetailScreenProps {
  navigation: StackNavigationProp<CheckoutParamList, CheckoutParams.CartDetail>;
  route: RouteProp<CheckoutParamList, CheckoutParams.CartDetail>;
}

export const CartDetailScreen: React.FC<CartDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const {id, key} = route.params;
  // Local State
  const [selectSize, setSelectSize] = useState<null | string>(null);
  const [isFavoriteActive, setIsFavoriteActive] = useState(true);

  const cartItem = cartItems.find((item: CartItem) => item.id === id);

  const handleGoBack = (): void => navigation.goBack();

  const toggleFavorite = (): void => setIsFavoriteActive(!isFavoriteActive);

  const handleBuyItem = () => {
    if (selectSize !== null) {
      navigation.navigate(CheckoutParams.Payment);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Oops',
        text2: 'You Forgot to Select your size',
      });
    }
  };

  return (
    <Screen>
      <CartDetailHeader
        onBackPress={handleGoBack}
        onFavoritePress={toggleFavorite}
        isFavoriteActive={isFavoriteActive}
        cartItem={cartItem}
      />
      {key === 'Favorite' && (
        <CartSizes selectSize={selectSize} setSelectSize={setSelectSize} />
      )}
      <CartInfo
        cartItem={cartItem}
        isSizeSelected={Boolean(selectSize)}
        onPress={handleBuyItem}
        isFashionista={key === 'Fashion'}
      />
    </Screen>
  );
};
