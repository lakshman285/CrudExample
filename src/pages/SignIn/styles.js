import {StyleSheet} from 'react-native';
import {colors} from '../../typography/theme';
import {fonts} from '../../typography/fonts';
const Styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 90,
    height: 90,
  },
  logo1: {
    width: 120,
    height: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '55%',
  },
  logoContainer: {
    paddingTop: 75,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  signInContainer: {
    padding: 0,
    alignItems: 'center',
  },
  signInTitleText: {
    textAlign: 'center',
    fontSize: fonts.fontSize.lg,
    fontWeight: 'bold',
    color: colors.black,
    width: 250,
  },
  signInText: {
    textAlign: 'center',
    fontSize: fonts.fontSize.md,
    color: colors.black,
    marginTop: 10,
    width: 250,
  },
  appVersion: {
    textAlign: 'center',
    fontSize: fonts.fontSize.sm,
    color: colors.buttonColor,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bottomContainer: {
    padding: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
  },
  button: {
    backgroundColor: '#0085ca',
    alignItems: 'center',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    color: colors.white,
  },
  border: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    marginTop: 14,
  },
  txtColor: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  indicator: {
    flex: 1,
  },
  pageIndicator: {
    marginTop: 20,
  },
});

export default Styles;
