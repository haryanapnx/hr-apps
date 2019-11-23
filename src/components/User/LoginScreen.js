import React, { Component } from 'react';
import Styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
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
    height: 285px
`;

const BackIcon = Styled(Icon)`
   fontSize: 24
   color: #fff   
   marginBottom: 36px  
`;

class LoginScreen extends Component {
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

  render() {
  
    return (
        <MainView>
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(254, 95, 117, 0.7)', 'rgba(252, 152, 66, 0.7)']}>
                <HeaderView>
                    <Container>
                        <BackIcon name='arrow-back' color='white' />
                        <Text size={16} color='#fff' style={{ marginBottom: 36 }}>Janjian</Text>
                        <Text size={26} color='#fff'>Welcome to Janjian App</Text>
                        
                    </Container>
                    <View style={{ position: 'absolute', bottom: 18, left: 20 }}>
                            <Text size={14} color='#fff'>Make your promise happen</Text>
                        </View>
                </HeaderView>
            </LinearGradient>

            <Container>
                <Text size={18} type='bold' style={{ marginTop: 32 }}>Sign in</Text>
                <View style={{ marginTop: 45 }}>
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
                        placeholder='Password'
                        label='Password'
                        value={this.state.email}
                        error={this.state.error.email}
                        onBlurValue={this.onValidate}
                    />
                    <Text textAlign='center' style={{ marginTop: 53, marginBottom: 36 }}>Not a member? <Text type='bold'>Sign up</Text> here</Text>
                </View>
                <TouchableOpacity>
                    <LinearGradient style={{ marginRight: 10, paddingVertical: 12, width: '100%', justifyContent: 'center', alignItems: 'center' }} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(36, 203, 225, 0.7)', 'rgba(21, 153, 201, 1)']}>
                      <Text color='#fff' style={{ fontFamily: 'Heebo-Medium' }}>Sign In</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Container>
        </MainView>
    );
  }
}


export default LoginScreen;

