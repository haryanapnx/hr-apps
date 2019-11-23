// import storage from 'redux-persist/es/storage';
import AsyncStorage from '@react-native-community/async-storage';
import {persistCombineReducers} from 'redux-persist';

import Auth from './user/auth';
import userDevice from './device/userDevice';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = persistCombineReducers(config, {
  user: Auth,
  device: userDevice,
});

export default reducer;
