import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Realm from 'realm';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faEdit, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import Utils from '../../Utils/AppUtils';
import {colors} from '../../typography/theme';

/**
 * Home screen contains list of users if exits
 * @returns Home screen component
 */
const Home = () => {
  const navigation = useNavigation();
  const [flatListItems, setFlatListItems] = useState([]);
  const [realm, setRealm] = useState(null);

  useEffect(() => {
    const initializeRealm = async () => {
      const newRealm = new Realm({
        path: 'UserDatabase.realm',
        schema: [
          {
            name: 'user_details',
            properties: {
              user_id: {type: 'int', default: 0},
              userName: 'string',
              userContact: 'string',
              userAddress: 'string',
            },
          },
        ],
      });
      setRealm(newRealm);
    };
    initializeRealm();
  }, []);

  useEffect(() => {
    // getUserData();
    // const realm = new Realm({path: 'UserDatabase.realm'});
    // const user_details = realm.objects('user_details');
    // setFlatListItems(user_details);
    const unsubscribe = navigation.addListener('focus', () => {
      getUserData();
    });

    return unsubscribe;
  }, [navigation]);

  const getUserData = () => {
    const realm = new Realm({path: 'UserDatabase.realm'});
    const user_details = realm.objects('user_details');
    setFlatListItems(user_details);
  };

  const renderUsersItem = item => {
    return (
      <View style={styles.userDataItemContainer}>
        <View style={styles.userDataItemView}>
          <Text>Id: {item.user_id}</Text>
          <Text>User Name: {item.userName}</Text>
          <Text>User Contact: {item.userContact}</Text>
          <Text>User Address: {item.userAddress}</Text>
        </View>
        <View style={styles.userDataItemButtonsView}>
          <TouchableOpacity
            style={styles.userDataItemButton}
            onPress={() => {
              navigation.navigate('updateUser', {
                userId: item.user_id.toString(),
              });
            }}>
            <FontAwesomeIcon icon={faEdit} size={20} color={colors.skyblue} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.userDataItemButton}
            onPress={() => deleteUser(item.user_id)}>
            <FontAwesomeIcon
              icon={faTrashCan}
              size={20}
              color={colors.buttons}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const deleteUser = inputUserId => {
    Realm.open({path: 'UserDatabase.realm'})
      .then(realm => {
        realm.write(() => {
          const userToDelete = realm
            .objects('user_details')
            .filtered('user_id =' + inputUserId);
          realm.delete(userToDelete);
          Alert.alert(
            'Success',
            'User deleted successfully',
            [
              {
                text: 'Ok',
                onPress: () => getUserData(),
              },
            ],
            {cancelable: false},
          );
        });
      })
      .catch(error => {
        console.log('Error opening Realm: ', error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.usersListText}>Users List</Text>
      {flatListItems.length !== 0 ? (
        <FlatList
          data={flatListItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => renderUsersItem(item)}
        />
      ) : (
        <View style={styles.noUserDataFoundView}>
          <Text style={styles.noUserDataFoundText}>No Users Data Found</Text>
        </View>
      )}
      <View style={styles.plusButtonContainer}>
        <TouchableOpacity
          style={styles.plusButtonView}
          onPress={() => navigation.navigate('addUser')}>
          <FontAwesomeIcon icon={faPlus} size={28} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
