import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from 'styles';

export const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '12@s',
    paddingVertical: '25@vs',
  },
  storeDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '12@vs',
  },
  storeName: {
    fontSize: 25,
    lineHeight: 40,
  },
  storePic: {
    width: '50@s',
    height: '50@vs',
    borderRadius: 25,
    marginVertical: '12@vs',
  },
  category: {
    fontSize: 14,
    color: COLORS.grey,
  },
});
