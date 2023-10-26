/*Custom Button*/
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import styles from './styles';

/**
 * Custom Button Re Usable Component
 * @param {*} props contains button properties
 * @returns button component
 */
const AppButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
