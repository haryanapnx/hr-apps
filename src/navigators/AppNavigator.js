import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {Icon} from '@ant-design/react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import Sidebar from '../components/Sidebar';
import Home from '../features/home/home';
import Absensi from '../features/absensi/absensi';
import Cuti from '../features/cuti/cuti';

class Screen3 extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 23}}> Screen 3 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.dispatch(DrawerActions.toggleDrawer());
  };
  render() {
    return (
      <View style={{flexDirection: 'row', padding: 10}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Icon name="menu-fold" />
          {/* <Button onPress={this.toggleDrawer.bind(this)} title="klik" /> */}
        </TouchableOpacity>
      </View>
    );
  }
}

const HomeScreen = createStackNavigator({
  First: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
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
  },
});

const AbsensiScreen = createStackNavigator({
  Second: {
    screen: Absensi,
    navigationOptions: ({navigation}) => ({
      title: 'Absensi',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
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
  },
});

const CutiScreen = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Cuti,
    navigationOptions: ({navigation}) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
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
  },
});
const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({navigation}) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#144e92',
      },
      headerTintColor: '#fff',
    }),
  },
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
  },
  {
    contentComponent: Sidebar,
    drawerWidth: 300,
  },
);
const App = createAppContainer(AppNavigator);
// const AppNavigator = createStackNavigator(
//   {
//         App: MainStack,
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//   },
// );

export default App;
