/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {PureComponent} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import AppNavigator from './src/navigators/AppNavigator';
import {Provider as ProviderAntd} from '@ant-design/react-native';
// import {persistor, store} from './src/redux';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import {saveUserToken, getUserToken} from './src/features/auth/redux/action'
import rootReducers from './src/redux/reducers';
// import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore, persistReducer} from 'redux-persist';

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};
export const persistConfigClear = {key: 'root', storage: AsyncStorage};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export default class App extends PureComponent {
  render() {
    dayjs.locale('id');
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ProviderAntd>
            <AppNavigator />
          </ProviderAntd>
        </PersistGate>
      </Provider>
    );
  }
}
