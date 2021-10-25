import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from 'styles';

export default ScaledSheet.create({
  containerStyle: {
    width: '90%',
    marginLeft: '5%',
    marginVertical: '10@vs',
    height: '84@vs',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '15@vs',
    paddingHorizontal: '10@s',
    borderRadius: 10,
    backgroundColor: COLORS.smoke,
  },
  activeContainer: {
    backgroundColor: COLORS.lighterGreen,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: '60@s',
    width: '60@s',
    borderRadius: '30@s',
    marginRight: '10@s',
  },
  username: {
    fontWeight: '600',
    fontSize: '18@s',
  },
  msg: {
    marginTop: '4@vs',
    color: COLORS.grey,
  },
  date: {
    color: COLORS.grey,
  },
  counterContainer: {
    width: '35@s',
    height: '35@s',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black,
    borderRadius: 50,
  },
  counter: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
