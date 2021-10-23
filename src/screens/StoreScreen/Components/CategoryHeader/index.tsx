import {AppText} from 'common';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from 'styles';
import {styles} from './style';

interface CategoryHeaderProps {
  onPress: () => void;
  storeTitle: string;
}
export const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  onPress,
  storeTitle,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Icon name="arrowleft" color={COLORS.black} size={32} />
      </TouchableOpacity>

      <View style={styles.storeDetailsContainer}>
        <AppText fontFamily={'NotoSansMono-Bold'} style={styles.storeName}>
          {storeTitle}
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
    </>
  );
};
