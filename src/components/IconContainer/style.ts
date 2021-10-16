import {COLORS} from 'styles';
import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  defaultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '48@s',
    width: '48@s',
    borderRadius: '9@s',
    borderWidth: 2.5,
    borderColor: COLORS.gray90,
    shadowColor: COLORS.quicksilver,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  activeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '48@s',
    width: '48@s',
    borderRadius: '9@s',
    backgroundColor: COLORS.gray90,
    shadowColor: COLORS.quicksilver,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
