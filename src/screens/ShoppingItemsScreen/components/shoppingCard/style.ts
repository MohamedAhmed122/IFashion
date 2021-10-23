import {COLORS} from 'styles/Colors/index';
import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

export const styles = ScaledSheet.create({
  container: {
    paddingVertical: '12@vs',
    paddingHorizontal: '16@s',
  },
  TouchableOpacityStyle: {
    paddingBottom: '20@vs',
  },
  imageContainer: {
    width: width * 0.5 - 20,
    justifyContent: 'center',
    marginHorizontal: '10@vs',
    marginVertical: '20@vs',
    flexDirection: 'column',
    borderRadius: 20,
  },
  imageStyle: {
    width: width * 0.5 - 20,
    height: height * 0.5 - 100,
    borderRadius: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: '12@s',
    paddingVertical: '12@vs',
  },
  IconContainer: {
    alignSelf: 'center',
  },
  nameStyle: {
    fontSize: 12,
    color: COLORS.violetRed,
  },
  priceStyle: {
    fontSize: 12,
    color: COLORS.denim,
  },
});
