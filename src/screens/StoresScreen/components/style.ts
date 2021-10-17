import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from 'styles';

const {width, height} = Dimensions.get('window');

export const MIN_HEIGHT = 128;
export const MAX_HEIGHT = height;

export const styles = StyleSheet.create({
  container: {
    width,
    height: MIN_HEIGHT,
    justifyContent: 'flex-end',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  title: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '500',
  },
  titleContainer: {
    maxHeight: MAX_HEIGHT * 0.61,
    justifyContent: 'center',
    flex: 1,
  },
  mainTitle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    padding: 32,
    transform: [{translateY: 64}],
  },
  subtitle: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
