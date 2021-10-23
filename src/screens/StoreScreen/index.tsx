import React from 'react';
import {Screen} from 'common';
import {FlatList, ListRenderItem} from 'react-native';
import {CategoryItem} from './Components/CategoryItem';
import {styles} from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  ShoppingStoreStackParams,
  ShoppingStoreStackParamsParamList,
} from 'navigation/ShoppingStoreStack/interface';
import {CategoryHeader} from './Components/CategoryHeader';
import {categories} from 'assets/data';

export interface Category {
  id: number;
  categoryTitle: string;
  CategoryImage: string;
}
interface StoreScreenProps {
  navigation: StackNavigationProp<
    ShoppingStoreStackParamsParamList,
    ShoppingStoreStackParams.StoreDetail
  >;
}

export const StoreScreen: React.FC<StoreScreenProps> = ({navigation}) => {
  const onPressCategory = () => {
    navigation.navigate(ShoppingStoreStackParams.ShoppingItems);
  };

  const renderItem: ListRenderItem<Category> = ({item}) => {
    return (
      <CategoryItem
        key={item.id}
        categoryTitle={item.categoryTitle}
        categoryImageUrl={item.CategoryImage}
        onPressCategory={onPressCategory}
      />
    );
  };

  return (
    <Screen ContainerStyle={styles.container}>
      <CategoryHeader onPress={navigation.goBack} storeTitle={'Zara Store'} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
    </Screen>
  );
};
