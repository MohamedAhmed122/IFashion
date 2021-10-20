import React from 'react';
import {AppText, Screen} from 'common';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from 'styles';
import {
  Alert,
  FlatList,
  Image,
  ListRenderItem,
  TouchableOpacity,
  View,
} from 'react-native';

import {CategoryItem} from './Components/CategoryItem';
import {styles} from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  ShoppingStoreStackParams,
  ShoppingStoreStackParamsParamList,
} from 'navigation/ShoppingStoreStack/interface';

interface Category {
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
  //TODO: remove it when the API is ready
  const categories: Category[] = [
    {
      id: 0,
      categoryTitle: 'Shirts',
      CategoryImage:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: 1,
      categoryTitle: 'T-shirts',
      CategoryImage:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    },
    {
      id: 2,
      categoryTitle: 'Jeans',
      CategoryImage:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: 3,
      categoryTitle: 'Jackets',
      CategoryImage:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    },
    {
      id: 4,
      categoryTitle: 'Shoes',
      CategoryImage:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
  ];

  const renderItem: ListRenderItem<Category> = ({item}) => {
    return (
      <CategoryItem
        key={item.id}
        categoryTitle={item.categoryTitle}
        categoryImageUrl={item.CategoryImage}
        onPressCategory={() => Alert.alert('Pressed')}
      />
    );
  };

  return (
    <Screen ContainerStyle={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Icon name="arrowleft" color={COLORS.black} size={32} />
      </TouchableOpacity>

      <View style={styles.storeDetailsContainer}>
        <AppText fontFamily={'NotoSansMono-Bold'} style={styles.storeName}>
          Zara Store
        </AppText>
        <View>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
            }}
            style={styles.storePic}
          />
        </View>
      </View>

      <AppText fontFamily={'NotoSansMono-Medium'} style={styles.category}>
        Categories
      </AppText>

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
