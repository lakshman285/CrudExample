import {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {name as app_name, version as app_version} from '../../../package.json';
import {signInWithBrowser, EventEmitter, isAuthenticated, createConfig, signOut, getAccessToken, getUser, getUserFromIdToken, refreshTokens} from '@okta/okta-react-native';
import {useNavigation} from '@react-navigation/native';
import {accessibility} from '../../helpers/Accessibility';
import styles from './styles';

/**
 * This page is used for user sign in using okta react native
 * @returns sign in component
 */

const SignInScreen = () => {
  const navigation = useNavigation();

  //code for future reference
  const [authenticated, setAuthenticated] = useState(false);
  const [context, setContext] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //main and short code
    // const loginEvent = EventEmitter.addListener('signInSuccess', () => {
    //   navigation.navigate('home');
    // });
    // return () => {
    //   loginEvent.remove();
    // };

    EventEmitter.addListener('signInSuccess', function (loginResponse) {
        if(loginResponse){
            console.log('Access Token', loginResponse);
            setContext(loginResponse.error_message);
            //invokeAccessTokenLogin();
            return;
        }

        setAuthenticated(true);
        setContext('Logged It')
    });

    EventEmitter.addListener('signOutSuccess', function (error) {
        if(error){
           console.warn(error);
            setContext(error.error_message);
            return;
        }

        setAuthenticated(false);
        setContext('Logged Out')
    });

    EventEmitter.addListener('onError', function (error) {
       console.warn(error);
       setContext(error.error_message);
    });

    EventEmitter.addListener('onCancelled', function (error) {
        console.warn(error);
     });

     checkAuthentication();

     return () => {
        EventEmitter.removeAllListeners('signInSuccess');
        EventEmitter.removeAllListeners('signOutSuccess');
        EventEmitter.removeAllListeners('onError');
        EventEmitter.removeAllListeners('onCancelled');
     }

  }, []);

  

  /**
   * Function used to handle sign in click
   */
  const handleSignInClick = async () => {
    await signInWithBrowser();
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.logoContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.logo} source={require('image')} />
              </View>
            </View>
            <View style={styles.signInContainer}>
              <Text style={styles.signInTitleText}>Sign In With Crud</Text>
              <Text style={styles.signInText}>
                Need to sign in with sign in app
              </Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.appVersion}>
              {app_name}
              {app_version}
            </Text>
            <View style={styles.border}>
              <TouchableOpacity
                onPress={handleSignInClick}
                style={styles.button}
                {...accessibility('login')}>
                <Text style={styles.txtColor}>Sign In With Crud Example</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
