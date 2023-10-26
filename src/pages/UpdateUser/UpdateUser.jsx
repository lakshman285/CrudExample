import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
} from 'react-native';
import AppTextInput from '../../components/inputData';
import AppButton from '../../components/button/AppButton';
import Realm from 'realm';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header/Header';
import styles from './styles';

/**
 * This component is used to update user
 * @returns Update user component
 */
const UpdateUser = ({route}) => {
  const [userName, setUserName] = useState('');
  const [userContact, setUserContact] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const navigation = useNavigation();

  const {userId} = route.params;

  useEffect(() => {
    Realm.open({path: 'UserDatabase.realm'}).then(openedRealm => {
      realm = openedRealm;
    });
    const user_details = realm
      .objects('user_details')
      .filtered('user_id =' + userId);
    if (user_details.length > 0) {
      setUserName(user_details[0].userName);
      setUserContact(user_details[0].userContact);
      setUserAddress(user_details[0].userAddress);
    } else {
      alert('No user found');
      setUserName('');
      setUserContact('');
      setUserAddress('');
    }
  }, []);

  /**
   * Function used to update user
   */
  const updateUser = useCallback(() => {
    if (userName && userContact && userAddress) {
      if (userContact.length == 10) {
        realm.write(() => {
          const obj = realm
            .objects('user_details')
            .filtered('user_id =' + userId);
          if (obj.length > 0) {
            obj[0].userName = userName;
            obj[0].userContact = userContact;
            obj[0].userAddress = userAddress;
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => goBack(),
                },
              ],
              {cancelable: false},
            );
          } else {
            alert('User Updation Failed');
          }
        });
      }
    } else if (!userName) {
      alert('Please fill Name');
    } else if (!userContact) {
      alert('Please fill Contact Number');
    } else {
      alert('Please fill Address');
    }
  }, [userName, userContact, userAddress]);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={'Update User'} callBack={goBack} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.keyboardAvoidingView}>
          <View>
            <AppTextInput
              placeholder="Enter Name"
              value={userName}
              onChangeText={text => setUserName(text)}
            />
            <AppTextInput
              placeholder="Enter Contact No"
              value={'' + userContact}
              onChangeText={text => setUserContact(text)}
              maxLength={10}
              keyboardType="numeric"
            />
            <AppTextInput
              value={userAddress}
              placeholder="Enter Address"
              onChangeText={text => setUserAddress(text)}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={styles.addressInputStyle}
            />
            <AppButton title="Update User" customClick={updateUser} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateUser;
