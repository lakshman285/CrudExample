import React, {useState, useEffect, useCallback} from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
} from 'react-native';
import Realm from 'realm';
import AppTextInput from '../../components/inputData/index.js';
import AppButton from '../../components/button/AppButton.js';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';

/**
 * Component used to add user
 * @returns add user component
 */
const AddUser = () => {
  const [userName, setUserName] = useState('');
  const [userContact, setUserContact] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    Realm.open({path: 'UserDatabase.realm'}).then(openedRealm => {
      realm = openedRealm;
    });
  }, []);

  /**
   * Function used to add user into database
   */
  const registerUser = useCallback(() => {
    if (userName) {
      if (userContact) {
        if (userAddress) {
          if (userContact.length === 10) {
            realm.write(() => {
              const user_details = realm.objects('user_details');
              const ID =
                user_details.sorted('user_id', true).length > 0
                  ? user_details.sorted('user_id', true)[0].user_id + 1
                  : 1;
              realm.create('user_details', {
                user_id: ID,
                userName,
                userContact,
                userAddress,
              });
              Alert.alert(
                'Success',
                'You are registered successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => goBack(),
                  },
                ],
                {cancelable: false},
              );
            });
          } else {
            alert('Please enter valid mobile number');
          }
        } else {
          alert('Please fill Address');
        }
      } else {
        alert('Please fill Contact Number');
      }
    } else {
      alert('Please fill Name');
    }
  }, [userName, userContact, userAddress, navigation]);

  /**
   * Function used to navigate previous page
   */
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Header headerTitle={'Add User'} callBack={goBack} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1, justifyContent: 'space-between'}}>
          <AppTextInput
            placeholder="Enter Name"
            onChangeText={text => setUserName(text)}
          />
          <AppTextInput
            placeholder="Enter Contact No"
            onChangeText={text => setUserContact(text)}
            maxLength={10}
            keyboardType="numeric"
          />
          <AppTextInput
            placeholder="Enter Address"
            onChangeText={text => setUserAddress(text)}
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{textAlignVertical: 'top'}}
          />
          <AppButton title="Submit" customClick={registerUser} />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AddUser;
