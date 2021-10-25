import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from 'styles';

export default ScaledSheet.create({
  container: {
    width: '86%',
    marginLeft: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: '25@s',
  },
  space: {
    marginRight: '10@s',
  },
  iconContainer: {
    padding: '12@s',
    borderWidth: 1,
    borderColor: COLORS.gray90,
    borderRadius: 50,
  },
});
