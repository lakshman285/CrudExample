import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#FDEDED',
    flexDirection: 'row',
    marginBottom: 30,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  imageStyle: {
    width: 22,
    marginVertical: 7,
  },
  alertMsgWrap: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 8,
    marginLeft: 12,
    marginRight: 16,
  },
  title: {
    display: 'flex',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.15,
    color: '#5F2120',
  },
  contentText: {
    display: 'flex',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.17,
    color: '#5F2120',
  },
});

export default Styles;
