import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from 'styles';

export const styles = ScaledSheet.create({
  successText1Style: {
    fontSize: '15@s',
    fontWeight: '400',
  },
  styleContainer: {
    borderLeftColor: 'green',
  },
  contentContainer: {
    paddingHorizontal: '15@vs',
  },

  errorText1Style: {
    fontSize: '14@s',
    paddingTop: '10@vs',
    fontFamily: 'NotoSansMono-Regular',
  },
  errorText2Style: {
    fontSize: '12@s',
    color: COLORS.grey,
    fontFamily: 'NotoSansMono-Regular',
    paddingBottom: '12@vs',
  },
});
