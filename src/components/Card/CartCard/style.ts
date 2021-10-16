import {COLORS} from 'styles';
import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  main: {
    width: '90%',
    marginLeft: '5%',
    marginVertical: '12@vs',
  },
  container: {
    flexDirection: 'row',
  },
  image: {
    height: '105@s',
    width: '105@s',
    borderRadius: '25@s',
    marginRight: '20@s',
  },
  infoContainer: {
    marginTop: '10@s',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  desc: {
    marginBottom: 8,
    width: '160@s',
  },
  price: {
    color: COLORS.selectiveYellow,
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 10,
  },
});
