import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
import {COLORS} from 'styles';
const {height, width} = Dimensions.get('window');

export default ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height / 2.2,
    width: width - 30,
  },
  IconContainers: {
    alignItems: 'center',
    width: width - width / 1.3,
    marginTop: 50,
  },
  IconContainer: {
    marginTop: '20@vs',
    backgroundColor: COLORS.quicksilver,
    shadowColor: COLORS.quicksilver,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  borderIconContainer: {
    marginTop: '20@vs',
    borderColor: COLORS.quicksilver,
    shadowColor: COLORS.quicksilver,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  favoriteIcon: {
    marginTop: '20@vs',
  },

  image: {
    height: height / 2.2,
    width: width / 1.5,

    borderBottomLeftRadius: '40@s',
    borderTopRightRadius: '40@s',
    borderTopLeftRadius: '5@s',
    borderBottomRightRadius: '5@s',
  },
  appText: {
    left: '-40@s',
    top: '-30@vs',
    fontWeight: '500',
    fontSize: 25,
    color: COLORS.dimGray,
  },
});
