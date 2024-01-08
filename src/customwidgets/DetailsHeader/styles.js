import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  detailsHeader: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#DEDEE2',
    borderBottomWidth: 1.5,
  },
  detailsHeaderText: {
    width: '60%',
    color: '#252525',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  cancelSaveTextView: {width: '20%'},
  cancelText: {
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: 'left',
    color: '#0185CA',
  },
  backText: {
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: 'center',
    color: '#0185CA',
  },
});

export default Styles;
