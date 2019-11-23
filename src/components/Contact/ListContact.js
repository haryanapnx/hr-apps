import React, { Component } from 'react';
import Styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
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

class ListContact extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
		return {
            header: <Header showLeftButton screenProps iconRightButton={<IconFeather size={24} name='user-plus' color='#FC9842' />} title='Contact' />
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
             <ScrollView>
            <Container>
                <TouchableOpacity style={{ flexDirection: 'row', height: 36, backgroundColor: '#F7F7F7', borderColor: '#AFAEA7', borderWidth: 1, borderRadius: 15, justifyContent: 'center', width: '100%' }}>
                    <LeftContent style={{ width: '10%' }}>
                        <Image style={{ height: 20, width: 20 }} source={require('../../../assets/icons/search.png')} />
                    </LeftContent>
                    <RightContent>
                        <Text color='#AFAEA7'>Search places</Text>
                    </RightContent>
                </TouchableOpacity>
            </Container>
            <ContentView>
                <LeftContent>
                    <Image style={{ height: 57, width: 57, borderRadius: 33, overflow: 'hidden' }} source={require('../../../assets/images/d1.jpeg')} />
                </LeftContent>
                <RightContent style={{ width: '80%' }}>
                    <Text>Carol Danners</Text>
                    <Text>only avaibel in weekend</Text>
                </RightContent>
            </ContentView>
            <ContentView>
                <LeftContent>
                    <Image style={{ height: 57, width: 57, borderRadius: 33, overflow: 'hidden' }} source={require('../../../assets/images/d1.jpeg')} />
                </LeftContent>
                <RightContent style={{ width: '80%' }}>
                    <Text>Carol Danners</Text>
                    <Text>only avaibel in weekend</Text>
                </RightContent>
            </ContentView>
            <ContentView>
                <LeftContent>
                    <Image style={{ height: 57, width: 57, borderRadius: 33, overflow: 'hidden' }} source={require('../../../assets/images/d1.jpeg')} />
                </LeftContent>
                <RightContent style={{ width: '80%' }}>
                    <Text>Carol Danners</Text>
                    <Text>only avaibel in weekend</Text>
                </RightContent>
            </ContentView>
            <ContentView>
                <LeftContent>
                    <Image style={{ height: 57, width: 57, borderRadius: 33, overflow: 'hidden' }} source={require('../../../assets/images/d1.jpeg')} />
                </LeftContent>
                <RightContent style={{ width: '80%' }}>
                    <Text>Carol Danners</Text>
                    <Text>only avaibel in weekend</Text>
                </RightContent>
            </ContentView>
            
            <ContentView>
                <LeftContent>
                    <Image style={{ height: 57, width: 57, borderRadius: 33, overflow: 'hidden' }} source={require('../../../assets/images/d1.jpeg')} />
                </LeftContent>
                <RightContent style={{ width: '80%' }}>
                    <Text>Carol Danners</Text>
                    <Text>only avaibel in weekend</Text>
                </RightContent>
            </ContentView>
            <ContentView>
                <LeftContent>
                    <Image style={{ height: 57, width: 57, borderRadius: 33, overflow: 'hidden' }} source={require('../../../assets/images/d1.jpeg')} />
                </LeftContent>
                <RightContent style={{ width: '80%' }}>
                    <Text>Carol Danners</Text>
                    <Text>only avaibel in weekend</Text>
                </RightContent>
            </ContentView><ContentView>
                <LeftContent>
                    <Image style={{ height: 57, width: 57, borderRadius: 33, overflow: 'hidden' }} source={require('../../../assets/images/d1.jpeg')} />
                </LeftContent>
                <RightContent style={{ width: '80%' }}>
                    <Text>Carol Danners</Text>
                    <Text>only avaibel in weekend</Text>
                </RightContent>
            </ContentView>
            <ContentView>
                <LeftContent>
                    <Image style={{ height: 57, width: 57, borderRadius: 33, overflow: 'hidden' }} source={require('../../../assets/images/d1.jpeg')} />
                </LeftContent>
                <RightContent style={{ width: '80%' }}>
                    <Text>Carol Danners</Text>
                    <Text>only avaibel in weekend</Text>
                </RightContent>
            </ContentView>
           </ScrollView>
        </MainView>
    );
  }
}


export default ListContact;

