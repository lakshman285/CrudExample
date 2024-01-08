import AsyncStorage from '@react-native-async-storage/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';

/**
 * This function is used to get item from AsyncStorageHandler
 * @param - key is passed
 * @returns - item from localStorage
 * @memberof CostcoUtils
 */
const AsyncStorageHandler = {
  storeString: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      //saving error
      crashlytics().log('Async Storage Handler: storeData: Error: ' + e);
    }
  },

  storeObject: async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      //saving error
      crashlytics().log('Async Storage Handler: storeObject: Error: ' + e);
    }
  },

  getString: async key => {
    console.log('GetString Key', key);
    let asyncStorageValue = {};
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        asyncStorageValue = JSON.parse(value);
      }
    } catch (e) {
      //saving error
      crashlytics().log('Async Storage Handler: getString: Error: ' + e);
    }
    return asyncStorageValue;
  },

  getObject: async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      //saving error
      crashlytics().log('Async Storage Handler: getObject: Error: ' + e);
    }
  },
};

export default AsyncStorageHandler;
