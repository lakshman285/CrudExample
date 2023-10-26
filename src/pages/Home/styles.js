import {StyleSheet} from 'react-native';
import {colors} from '../../typography/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  usersListText: {
    marginBottom: 16,
    textAlign: 'center',
    padding: 16,
    fontSize: 18,
    fontWeight: '500',
    color: colors.black,
    textTransform: 'uppercase',
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.3,
  },
  plusButtonContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 24,
  },
  plusButtonView: {
    padding: 10,
    backgroundColor: colors.buttons,
    borderRadius: 30,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  noUserDataFoundView: {justifyContent: 'center'},
  noUserDataFoundText: {
    textAlign: 'center',
    padding: 16,
    fontSize: 18,
    fontWeight: '500',
    color: colors.black,
  },
  userDataItemContainer: {
    width: '92%',
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: colors.gray,
  },
  userDataItemView: {width: '84%', marginRight: 12, padding: 16},
  userDataItemButtonsView: {
    justifyContent: 'space-evenly',
  },
  userDataItemButton: {height: 24, width: 24, padding: 4},
});
export default styles;
