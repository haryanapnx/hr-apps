// import storage from 'redux-persist/es/storage';
// import AsyncStorage from '@react-native-community/async-storage';
// import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';

import {
  authReducer,
  cutiReducer,
  perdinReducer,
  homeReducer,
  absenReducer,
  lemburReducer,
  ukesReducer,
} from '../../features/reducersFeature';

// const config = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['auth'],
// };
const rootReducers = combineReducers({
  auth: authReducer,
  cuti: cutiReducer,
  perdin: perdinReducer,
  home: homeReducer,
  absenReducer,
  lembur: lemburReducer,
  ukes: ukesReducer,
});
// const reducer = persistReducer(config, rootReducers);

export default rootReducers;
