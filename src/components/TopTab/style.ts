import {Dimensions} from 'react-native';
import {COLORS} from 'styles';
import {ScaledSheet} from 'react-native-size-matters';

const {width} = Dimensions.get('window');
export default ScaledSheet.create({
  container: {
    width: width - 40,
    marginLeft: 20,
    marginBottom: 30,
    borderRadius: 15,
    height: '50@s',
    borderWidth: 2,
    borderColor: COLORS.gray90,
    shadowColor: COLORS.quicksilver,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  tab: {
    height: '50@s',
    justifyContent: 'center',
    width: (width - 44) / 3,
    alignItems: 'center',
    borderLeftColor: COLORS.gray90,
    borderLeftWidth: 3,
  },
  activeTab: {
    overflow: 'hidden',
    height: '50@s',
    justifyContent: 'center',
    width: (width - 44) / 3,
    alignItems: 'center',
    borderLeftColor: COLORS.gray90,
    borderLeftWidth: 3,
    backgroundColor: COLORS.gray90,
  },

  TabLeft: {
    borderLeftWidth: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  tabRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
