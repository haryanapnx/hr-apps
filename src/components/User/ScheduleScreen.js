import React, { Component } from 'react';
import Styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import { Body, List, ListItem as Item, ScrollableTab, Tab, TabHeading, Tabs, Title } from 'native-base';

import { connect } from 'react-redux';
import Text from '../Text';
import Header from '../Header';
import InputText from '../Input/InputText';
import { Row, Col } from '../Grid';
import { View, Dimensions, TouchableOpacity, Image, BackHandler, ScrollView, FlatList, ActivityIndicator } from 'react-native';


const { height, width} = Dimensions.get('window');

const MainView = Styled(View)`
    height: 100%
    width: 100%
`;

const Container = Styled(View)`
    paddingHorizontal: 20px
    marginVertical: 14px
    borderBottomColor: #F7F7F7
    borderBottomWidth: 2px
    paddingBottom: 20px
`;
const BackIcon = Styled(Icon)`
   fontSize: 24 
`;

const ContentView = Styled(TouchableOpacity)`
    flexDirection: row
    paddingHorizontal: 20px
    borderBottomColor: #F7F7F7
    borderBottomWidth: 2px
    paddingBottom: 11px
    marginBottom: 12px
`;

const LeftContent = Styled(View)`
    width: 20%
    justifyContent: center
`;

const RightContent = Styled(View)`
    width: 80%
    justifyContent: center
`;

class ScheduleScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
		return {
            header: <Header showLeftButton screenProps title='Schedule' />
      };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      email: '',
      error: {
          email: null
      }
    };
  }

  onValidate = () => {

  }

  onChangeValue = () => {

  }

  render() {
  
    return (
        <MainView>
             <Tabs
              prerenderingSiblingsNumber={2}
              onChangeTab={({i}) => {
                this.setState({ activeTab: i})
              }}
              tabBarUnderlineStyle={{backgroundColor: '#345E6D', height: 1}}
            >
              <Tab heading="Feed" tabStyle={{backgroundColor: '#FAF9F9'}} textStyle={{fontSize: 14, color: '#427789', fontWeight: '600', fontFamily: 'Montserrat'}} activeTabStyle={{backgroundColor: '#FAF9F9', }} activeTextStyle={{fontSize: 14, color:'#427789', fontWeight: '600', fontFamily: 'Montserrat'}}>
              {this.state.activeTab === 0 && <View><Text>tab1</Text></View>}
              </Tab>
              <Tab heading="My Community" tabStyle={{backgroundColor: '#FAF9F9'}} textStyle={{fontSize: 14, color: '#427789', fontWeight: '600', fontFamily: 'Montserrat'}} activeTabStyle={{backgroundColor: '#FAF9F9', }} activeTextStyle={{fontSize: 14, color:'#427789', fontWeight: '600', fontFamily: 'Montserrat'}}>
              {this.state.activeTab === 1 && <View><Text>Tab 2</Text></View>}
              </Tab>
            </Tabs>
        </MainView>
    );
  }
}


export default ScheduleScreen;

