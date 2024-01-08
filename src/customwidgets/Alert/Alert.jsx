import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

//This is custom alert component
function CustomAlert(props) {
  const {title, image, text} = props;

  return (
    <View style={styles.container}>
      {image && <Image style={styles.imageStyle} source={require(image)} />}
      <View style={styles.alertMsgWrap}>
        {/* Alert Title and Alert Message */}
        {title && <Text style={styles.title}>{title}</Text>}
        {text && <Text style={styles.contentText}>{text}</Text>}
      </View>
    </View>
  );
}

export default CustomAlert;
