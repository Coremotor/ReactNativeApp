import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const STORAGE_TOKEN_KEY = '@token';

// Storing string value
export const putDataInStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    Alert.alert('Error Store Data', e);
  }
};

// // Storing object value
// export const storeData = async (value: {}) => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem('@storage_Key', jsonValue);
//   } catch (e) {
//     Alert.alert('Error Store Data', e);
//   }
// };

// Reading string value
export const getDataFromStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    Alert.alert('Error Store Data', e);
  }
};

// // Reading object value
// const getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('@storage_Key');
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch (e) {
//     // error reading value
//   }
// };

// removeItem
export const removeValueInStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    Alert.alert('Error Store Data', e);
  }
};

// export const clearStorage = async () => {
//   try {
//     await AsyncStorage.clear();
//   } catch (e) {
//     console.log(e);
//   }
// };
