import {StyleSheet} from 'react-native';
import {colors} from '../../typography/theme';
import {fonts} from '../../typography/fonts';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {flexGrow: 1},
  containerView: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainerView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  logoContainer: {
    paddingTop: 75,
  },
  logoImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  logo: {
    width: 90,
    height: 90,
  },
  signInContainer: {
    padding: 0,
    alignItems: 'center',
  },
  signInText: {
    textAlign: 'center',
    fontSize: fonts.fontSize.lg,
    fontWeight: 'bold',
    color: colors.black,
    width: 250,
  },
  signInDescriptionText: {
    textAlign: 'center',
    fontSize: fonts.fontSize.md,
    color: colors.black,
    marginTop: 10,
    width: 250,
  },
  bottomContainerView: {
    padding: 20,
  },
  appVersion: {
    textAlign: 'center',
    fontSize: fonts.fontSize.sm,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Styles;
