import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'native-base';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Sidebar from '../components/Sidebar';
import LoginScreen from '../components/User/LoginScreen';
import {
  Login,
  AuthLoading,
  Home,
  Absensi,
  Cuti,
  Lembur,
  Perdin,
  Ukes,
} from '../features';

const NaviDrawerStructure = ({nav}) => {
  const toggleDrawer = () => {
    nav.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <View style={{flexDirection: 'row', padding: 10}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon name="menu" style={{color: 'white'}} />
      </TouchableOpacity>
    </View>
  );
};

const menuDrawer = title => {
  return {
    navigationOptions: ({navigation}) => ({
      title: title,
      headerLeft: <NaviDrawerStructure nav={navigation} />,
      headerRight: (
        <Image
          style={{width: 50, height: 40, marginRight: 8}}
          source={require('../../assets/images/bjb.png')}
        />
      ),
      headerStyle: {
        backgroundColor: '#144e92',
      },
      headerTintColor: '#fff',
    }),
  };
};

const HomeScreen = createStackNavigator({
  1: {screen: Home, ...menuDrawer('Home')},
});

const AbsensiScreen = createStackNavigator({
  2: {screen: Absensi, ...menuDrawer('Absensi')},
});

const CutiScreen = createStackNavigator({
  3: {screen: Cuti, ...menuDrawer('Cuti')},
});
const LemburScreen = createStackNavigator({
  4: {screen: Lembur, ...menuDrawer('Lembur')},
});
const PerdinScreen = createStackNavigator({
  5: {screen: Perdin, ...menuDrawer('Perdin')},
});
const UkesScreen = createStackNavigator({
  5: {screen: Ukes, ...menuDrawer('Ukes')},
});

const AppNavigator = createDrawerNavigator(
  {
    home: {
      screen: HomeScreen,
    },
    absensi: {
      screen: AbsensiScreen,
    },
    cuti: {
      screen: CutiScreen,
    },
    lembur: {
      screen: LemburScreen,
    },
    perdin: {
      screen: PerdinScreen,
    },
    ukes: {
      screen: UkesScreen,
    },
  },
  {
    contentComponent: Sidebar,
    drawerWidth: 300,
    initialRouteName: 'home',
  },
);

const Auth = createStackNavigator({Login: LoginScreen});

const App = createAppContainer(
  createSwitchNavigator(
    {
      App: AppNavigator,
      AuthLoading: AuthLoading,
      Auth: Auth,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default App;
