/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {PureComponent} from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import {Provider} from 'react-redux';
import {Provider as ProviderAntd} from '@ant-design/react-native';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistor, store} from './src/redux';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ProviderAntd>
            <AppNavigator />
          </ProviderAntd>
        </PersistGate>
      </Provider>
    );
  }
}
