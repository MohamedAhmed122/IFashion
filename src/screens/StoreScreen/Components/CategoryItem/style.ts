import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from 'styles';

const {width} = Dimensions.get('window');

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: 40,
    paddingRight: 12,
    flex: 1,
  },
  containerCategoryName: {
    backgroundColor: COLORS.smoke,
    alignSelf: 'flex-start',
    paddingHorizontal: '8@s',
    paddingVertical: '8@vs',
    marginBottom: '10@vs',
    borderRadius: 4,
  },
  categoryName: {
    color: COLORS.black,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  imageStyle: {
    width: width - 100,
    height: '90%',
    borderRadius: 25,
  },
});
