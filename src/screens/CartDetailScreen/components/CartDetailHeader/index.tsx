import React from 'react';
import {Image, Text, View} from 'react-native';
import {IconContainer} from 'components/IconContainer';

export const CartDetailHeader = () => {
  return (
    <>
      <View>
        <View>
          <IconContainer></IconContainer>
        </View>
        <Image source={require('assets/images/suit.jpg')} resizeMode="cover" />
      </View>
      <Text>Product Name</Text>
    </>
  );
};
