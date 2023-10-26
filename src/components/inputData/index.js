/*Custom TextInput*/
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

/**
 * Custom TextInput Re Usable Component
 * @param {*} props contains text input properties
 * @returns text input component
 */
const AppTextInput = props => {
  return (
    <View style={styles.textInputView}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="gray"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};
export default AppTextInput;
