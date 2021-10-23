import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from 'styles';

export const styles = ScaledSheet.create({
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '5@s',
    flexDirection: 'row',
    backgroundColor: COLORS.softPeach,
    borderColor: COLORS.whiteSmoke,
    borderWidth: 1,
    borderRadius: 10,
    height: '38@vs',
  },
  searchInput: {
    paddingHorizontal: '8@s',
  },
  textInputStyle: {
    fontSize: 14,
    color: COLORS.grey,
  },
});
