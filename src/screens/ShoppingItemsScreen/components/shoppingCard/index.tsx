import {AppText} from 'common';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {ShoppingItem} from 'screens/ShoppingItemsScreen';
import {COLORS} from 'styles';
import Icon from 'react-native-vector-icons/Entypo';
import {styles} from './style';

interface ShoppingCardProps extends ShoppingItem {}

export const ShoppingCard: React.FC<ShoppingCardProps> = ({...item}) => {
  return (
    <>
      <View style={styles.imageContainer}>
        <View>
          <Image
            source={{
              uri: item.itemImage,
            }}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.contentContainer}>
          <View>
            <AppText fontFamily={'NotoSansMono-Bold'} style={styles.nameStyle}>
              {item.itemName}
            </AppText>
            <AppText fontFamily={'NotoSansMono-Bold'} style={styles.priceStyle}>
              {item.itemPrice}
            </AppText>
          </View>
          <TouchableOpacity style={styles.IconContainer}>
            <Icon name={'heart-outlined'} size={20} color={COLORS.orange} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
