import {colors} from '../../typography/theme';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.buttons,
    color: colors.white,
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
  text: {
    color: colors.white,
  },
});

export default Styles;
