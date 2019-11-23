import React, { Component } from 'react';
import Styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import Text from '../Text';
import InputText from '../Input/InputText';
import { Row, Col } from '../Grid';
import { View, Dimensions, TouchableOpacity, Image, BackHandler, ScrollView, FlatList, ActivityIndicator } from 'react-native';


const { height, width} = Dimensions.get('window');

const MainView = Styled(View)`
    height: 100%
    width: 100%
`;

const Container = Styled(View)`
    marginHorizontal: 20px
    marginVertical: 16px
`;

const HeaderView = Styled(View)`
    height: 100px
    justifyContent: center
`;

const BackIcon = Styled(Icon)`
   fontSize: 24
   color: #fff   
`;

class RegisterScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
		return {
            header: null
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

  submit = () => {
      
    const body = {
        fullname: 'riyan sugiharto',
        email: 'riyansugihart96@gmail.com',
        phone: '082318384851',
        password: 'admin123',
        password_confirmation: 'admin123',
        sign_in_token: '00000000'
      }

    const instance = axios.create({
        baseURL: 'https://admin88.infinitec.site/api/v1/member',
      });

      const res = instance.post('/register', body);
        res.then((res) => {
            console.log(res, 'login');
        })
        .catch((e) => {
            console.log(e.response, 'lag error')
        })
      
  }

  render() {
  
    return (
        <MainView>
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(254, 95, 117, 0.7)', 'rgba(252, 152, 66, 0.7)']}>
                <HeaderView>
                    <Container>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                            <View style={{ width: '10%' }}>
                                <BackIcon name='arrow-back' color='white' />
                            </View>
                            <View style={{ width: '80%' }}>
                                <Text textAlign='center' color='#fff'>Sign Up</Text>
                            </View>    
                        </View>
                    </Container>
                </HeaderView>
            </LinearGradient>

            <Container>
                <Text size={18} type='bold' style={{ marginTop: 30 }}>Let’s get started</Text>
                <View style={{ marginTop: 42 }}>
                    <InputText
                        name='email'
                        onChangeValue={this.onChangeValue}
                        placeholder='Email'
                        label='Email'
                        value={this.state.email}
                        error={this.state.error.email}
                        onBlurValue={this.onValidate}
                    />
                    <InputText
                        name='email'
                        onChangeValue={this.onChangeValue}
                        placeholder='Profil Name'
                        value={this.state.email}
                        error={this.state.error.email}
                        onBlurValue={this.onValidate}
                    />
                    <InputText
                        name='email'
                        onChangeValue={this.onChangeValue}
                        placeholder='Password'
                        label='Password'
                        value={this.state.email}
                        error={this.state.error.email}
                        onBlurValue={this.onValidate}
                    />
                    <InputText
                        name='email'
                        onChangeValue={this.onChangeValue}
                        placeholder='Re Password'
                        value={this.state.email}
                        error={this.state.error.email}
                        onBlurValue={this.onValidate}
                    />
                </View>
                <TouchableOpacity style={{ marginTop: 30 }} onPress={() => this.submit()}>
                    <LinearGradient style={{ marginRight: 10, borderRadius: 5, height: 45, width: '100%', justifyContent: 'center', alignItems: 'center' }} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(254, 95, 117, 0.7)', 'rgba(252, 152, 66, 0.7)']}>
                      <Text color='#fff' style={{ fontFamily: 'Heebo-Medium' }}>Sign In</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Container>
            <View style={{ marginTop: 30, flex: 1 }}>
                    <LinearGradient style={{ flex: 1, marginRight: 10, paddingVertical: 12, width: '100%', justifyContent: 'center', alignItems: 'center' }} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(254, 95, 117, 0.7)', 'rgba(252, 152, 66, 0.7)']}>
                      <Text color='#fff' style={{ fontFamily: 'Heebo-Medium' }}>Already a member? <Text color='#fff' onPress={() => this.props.navigation.pop()}>Sign in</Text></Text>
                    </LinearGradient>
                </View>
        </MainView>
    );
  }
}


export default RegisterScreen;

