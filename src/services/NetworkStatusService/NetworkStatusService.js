import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {styles} from './styles';

const NetworkStatusService = props => {
  const [isConnectedStatus] = useState(true);

  const checkNetworkStatus = status => {
    status.isConnected;
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(checkNetworkStatus);
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const {childern} = props;

  return (
    <>
      {childern}
      {!isConnectedStatus && (
        <View>
          <View style={styles.logo}>
            <Text>Add Image</Text>
          </View>
          <Text>Something went wrong!</Text>
          <Text>Please check your network connection and try again</Text>
        </View>
      )}
    </>
  );
};

export default NetworkStatusService;
