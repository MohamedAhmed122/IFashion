import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from 'styles';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default ScaledSheet.create({
  container: {
    width: width,
    height: height,
  },
  emoji: {
    fontSize: 190,
  },
  text: {
    textAlign: 'center',
    top: '15%',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 30,
  },
  text2: {
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '700',
    top: '16%',
    fontSize: 30,
  },
  emojiContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '27%',
  },
  btn: {
    top: '40%',
    width: '80%',
  },
});
