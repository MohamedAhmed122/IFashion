import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {Screen} from 'common';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  ShoppingStoreStackParams,
  ShoppingStoreStackParamsParamList,
} from 'navigation/ShoppingStoreStack/interface';
import {ShoppingItemHeader} from './components/ShoppingItemHeader';
import {ShoppingCard} from './components/shoppingCard';
import {shoppingItems} from 'assets/data';
import styles from './style';

interface ShoppingItemsScreenProps {
  navigation: StackNavigationProp<
    ShoppingStoreStackParamsParamList,
    ShoppingStoreStackParams.ShoppingItems
  >;
}

export interface ShoppingItem {
  id: number;
  itemName: string;
  itemPrice: number;
  currency: string;
  itemImage: string;
}

export const ShoppingItemsScreen: React.FC<ShoppingItemsScreenProps> = ({
  navigation,
}) => {
  const renderItem: ListRenderItem<ShoppingItem> = ({item}) => {
    return <ShoppingCard {...item} />;
  };
  return (
    <Screen>
      <ShoppingItemHeader
        onPress={navigation.goBack}
        onTextChange={() => console.log('object')}
        onSearch={() => console.log('object')}
        searchBarValue={''}
      />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={shoppingItems}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
      />
    </Screen>
  );
};
