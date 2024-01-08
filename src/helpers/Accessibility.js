import {Platform} from 'react-native';

export function accessibility(id) {
  return Platform.OS === 'android'
    ? {accessible: true, accessibilityLabel: id, testID: id}
    : {testID: id};
}
