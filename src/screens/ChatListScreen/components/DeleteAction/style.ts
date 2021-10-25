import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from 'styles';

export default ScaledSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80@s',
    marginLeft: '15@s',
    borderRadius: 10,
    backgroundColor: COLORS.lightRed,
  },
});
