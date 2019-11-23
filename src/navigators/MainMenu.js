import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListContact from '../components/Contact/ListContact';
import GradientView from '../components/GradientView';
import {
  Platform,
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

class IconWithBadge extends React.Component {
  render() {
    const {name, badgeCount, color, source, routeName, iconName} = this.props;
    return (
      <View
        style={{
          width: 43,
          alignItems: 'center',
          height: 24,
          marginTop: 5,
          marginBottom: 20,
        }}>
        <Image
          source={source}
          style={{resizeMode: 'contain', width: 20, height: 20}}
        />
        <Text
          style={{
            fontSize: 10,
            marginTop: 3,
            color: 'rgba(145, 158, 159, 1)',
            fontFamily: 'Heebo-Bold',
          }}>
          {routeName}
        </Text>
      </View>
    );
  }
}
const SIZE = 80;
const SIZEROUND = 50;
class AddButton extends React.Component {
  mode = new Animated.Value(0);

  toggleView = () => {
    Animated.timing(this.mode, {
      toValue: this.mode._value === 0 ? 1 : 0,
      duration: 300,
    }).start();
  };

  render() {
    return (
      <View>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: SIZE,
              height: SIZE,
              marginBottom: 15,
              borderRadius: SIZE / 2,
              borderWidth: 1,
              elevation: 1,
              borderColor: '#ddd',
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: SIZEROUND,
                height: SIZEROUND,
                borderRadius: SIZE / 2,
                backgroundColor: 'rgba(247, 169, 1, 1)',
              }}>
              <Icon name="plus" size={28} color="#fff" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Schedule') {
    iconName = require('../../assets/icons/calendar.png');
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Contact') {
    iconName = require('../../assets/icons/users.png');
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'History') {
    iconName = require('../../assets/icons/clock.png');
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Setting') {
    iconName = require('../../assets/icons/settings.png');
    IconComponent = HomeIconWithBadge;
  }

  // You can return any component that you like here!
  return <IconComponent source={iconName} routeName={routeName} />;
};

const MainMenu = createBottomTabNavigator(
  {
    Schedule: {
      screen: createStackNavigator({HomeScreen: HomeScreen}),
      navigationOptions: ({navigation}) => ({
        headerTitle: null,
        tabBarLabel: 'Schedule',
        tabBarIcon: ({focused, tintColor}) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
    },
    Contact: {
      screen: createStackNavigator({ListContact: ListContact}),
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Contact',
        tabBarIcon: ({focused, tintColor}) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
    },
    Adding: {
      screen: () => null, // Empty screen
      navigationOptions: () => ({
        tabBarLabel: 'Janjian',
        tabBarIcon: <AddButton />, // Plus button component
      }),
    },
    History: {
      screen: () => null,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'History',
        tabBarIcon: ({focused, tintColor}) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
    },
    Setting: {
      screen: () => null,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Setting',
        tabBarIcon: ({focused, tintColor}) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
    },
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#fff', // TabBar background
      },
    },
  },
);

export default MainMenu;
