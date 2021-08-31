import {AppDispatch} from '../../store';
import {setAuth} from './reducer';
import {Alert} from 'react-native';
import {
  putDataInStorage,
  removeValueInStorage,
  STORAGE_TOKEN_KEY,
} from '../../../api/storage';

export const authorization = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setAuth(true));
      await putDataInStorage(STORAGE_TOKEN_KEY, 'tokenKey');
    } catch (e) {
      Alert.alert('Error authorization', e);
    }
  };
};

export const logout = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setAuth(false));
      await removeValueInStorage(STORAGE_TOKEN_KEY);
    } catch (e) {
      Alert.alert('Error authorization', e);
    }
  };
};
