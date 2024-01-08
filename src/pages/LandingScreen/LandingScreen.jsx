import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  Platform,
  Alert,
  AppState,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {name as app_name, version as app_version} from '../../../package.json';
import {useEffect, useState} from 'react';
import {
  check,
  request,
  openSettings,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import {isAuthenticated} from '@okta/okta-react-native';

const LandingScreen = () => {
  const navigation = useNavigation();
  const [appState, setAppState] = useState(AppState.currentState);
  const [hasReturnedFromBackground, setHasReturnedFromBackground] =
    useState(false);
  const [hasClickedOnSettings, setHasClickedOnSettings] = useState(false);

  useEffect(() => {
    checkUserLocationAccess();
  }, []);

  useEffect(() => {
    //Event Listener for changes in app state
    const handleAppStateChange = nextAppState => {
      if (
        appState === 'background' &&
        nextAppState === 'active' &&
        hasClickedOnSettings
      ) {
        //The app has returned from the background
        setHasReturnedFromBackground(true);
      }
      setAppState(nextAppState);
    };

    //subscribe to app state changes
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    //cleanup when component unmounts
    return () => {
      subscription.remove();
    };
  }, [appState]);

  useEffect(() => {
    if (hasReturnedFromBackground) {
      //Do something when the app returns from the background
      checkUserLocationAccess();
      setHasReturnedFromBackground(false); //reset the flag
      setHasClickedOnSettings(false);
    }
  }, [hasReturnedFromBackground]);

  /**
   * This function is used to check whether user enabled location permission or not
   */
  const checkUserLocationAccess = () => {
    //for android
    if (Platform.OS === 'android') {
      check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
        if (result == RESULTS.GRANTED) {
          getUserLocation();
        } else {
          requestLocationPermission();
        }
      });
    } else {
      //for ios
      check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
        if (result == RESULTS.GRANTED) {
          getUserLocation();
        } else {
          requestLocationPermission();
        }
      });
    }
  };

  /**
   * This function is used to display dialog when user denied location permission
   * @returns location permission denied dialog
   */
  const displayPermissionDeniedDialog = () => {
    return Alert.alert(
      'Require Location Permission',
      'App need location access to prompt you to check-in and out from app',
      [
        {
          text: 'OK',
          onPress: () => {
            checkUserLocationAccess();
          },
        },
      ],
      {cancelable: false},
    );
  };

  /**
   * This function is used to display dialog when user permanently denied/blocked location permission
   * @returns location permission permanently denied/blocked dialog
   */
  const displayOpenSettingsDialog = () => {
    return Alert.alert(
      'Require Location Permission',
      'App need location access to prompt you to check-in and out from app',
      [
        {
          text: 'Open Settings',
          onPress: () => {
            openSettings();
            setHasClickedOnSettings(true);
          },
        },
      ],
      {cancelable: false},
    );
  };

  /**
   * This function is used to report location permission
   */
  const requestLocationPermission = () => {
    //for android
    if (Platform.OS === 'android') {
      request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
        if (result == RESULTS.GRANTED) {
          getUserLocation();
        } else if (result == RESULTS.DENIED) {
          displayPermissionDeniedDialog();
        } else if (result == RESULTS.BLOCKED) {
          displayOpenSettingsDialog();
        }
      });
    } else {
      //for ios
      request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
        if (result == RESULTS.GRANTED) {
          getUserLocation();
        } else if (result == RESULTS.DENIED) {
          displayPermissionDeniedDialog();
        } else if (result == RESULTS.BLOCKED) {
          displayOpenSettingsDialog();
        }
      });
    }
  };

  /**
   * This method is used to get user location
   */
  const getUserLocation = () => {
    Geolocation.getCurrentPosition(
      //will give you the current location
      position => {
        //getting the longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        getPostalAddress();
      },
      error => {
        console.log(
          'Get One Time Location permission denied',
          JSON.stringify(error),
        );
      },
      {
        enableHighAccuracy: false,
        timeout: 300000,
        maximumAge: 1000,
      },
    );
  };

  const getPostalAddress = async () => {
    console.log('Getting Postal Address');
    checkAuthentication();
  };

  /**
   * This Method is used to check whether user authenticated or not
   * @todo navigate to actual screen when user logged in
   */
  const checkAuthentication = async () => {
    const result = await isAuthenticated();
    if (result.authenticated) {
      navigation.replace('signInLoad');
    } else {
      navigation.replace('Home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.containerView}>
          <View style={styles.topContainerView}>
            <View style={styles.logoContainer}>
              <View style={styles.logoImageContainer}>
                <Image style={styles.logo} source={require('')} />
              </View>
            </View>
            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Sign In</Text>
              <Text style={styles.signInDescriptionText}>
                Crud Example Needs Sign In
              </Text>
            </View>
          </View>
          <View style={styles.bottomContainerView}>
            <Text style={styles.appVersion}>
              {app_name} {app_version}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingScreen;
