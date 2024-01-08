import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {accessibility} from '../../helpers/Accessibility';

/**
 * It is common header component which contains back image and header title
 * @param cancelText contains cancel label text
 * @param headerTitle contains title of the header
 * @param cancelCallBack contains callBack function for cancel button click action
 * @param saveText contains save label text
 * @param saveCallBack contains callBack function for save button click action
 * @param showSaveButton contains true or false whether we need to show save button or not
 * @returns common header view
 */

const DetailsHeader = ({
  cancelText,
  headerTitle,
  cancelCallBack,
  saveText,
  saveCallBack,
  showSaveButton,
}) => {
  return (
    <View style={styles.detailsHeader}>
      <View style={styles.cancelSaveTextView}>
        <TouchableOpacity
          onPress={cancelCallBack}
          {...accessibility('cancel-btn')}>
          <Text style={styles.backText}>{cancelText}</Text>
        </TouchableOpacity>
      </View>
      <Text
        {...accessibility('title')}
        style={styles.detailsHeaderText}
        numberOfLines={1}
        ellipsizeMode="tail">
        {headerTitle}
      </Text>
      <View style={styles.cancelSaveTextView}>
        {showSaveButton && (
          <TouchableOpacity
            onPress={saveCallBack}
            {...accessibility('save-btn')}>
            <Text style={styles.backText}>{saveText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default DetailsHeader;