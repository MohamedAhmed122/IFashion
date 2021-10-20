import {COLORS} from 'styles';
import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    backgroundColor: COLORS.quicksilver,
    width: '40@s',
    height: '40@s',
    borderRadius: '20@s',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20@s',
    shadowColor: COLORS.lightGrey,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  text: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  active: {
    backgroundColor: COLORS.selectiveYellow,
  },
});
