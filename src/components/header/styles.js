import {StyleSheet} from 'react-native';
import {colors} from '../../typography/theme';
import {fonts} from '../../typography/fonts';

const styles = StyleSheet.create({
  header: {
    paddingVertical: 4,
    flexDirection: 'row',
    backgroundColor: colors.header,
    alignItems: 'center',
    paddingRight: 5,
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.4,
  },
  headerBackImage: {
    justifyContent: 'center',
    padding: 10,
  },
  backIconImage: {
    height: 24,
    width: 16,
    tintColor: colors.black,
  },
  headerText: {
    width: '80%',
    color: colors.headerText,
    fontFamily: fonts.families.medium,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
    justifyContent: 'center',
    marginRight: 15,
  },
});

export default styles;
