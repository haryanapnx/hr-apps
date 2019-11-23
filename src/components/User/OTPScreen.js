import React, { Component } from 'react';
import Styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import Text from '../Text';
import OTPInput from 'react-native-otp'
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

class OTPScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
		return {
            header: null
      };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      otp: ''
    };
  }

  handleOTPChange = (otp) => {
    this.setState({ otp })
  }

  clearOTP = () => {
    this.setState({ otp: undefined })
  }

  autoFill = () => {
    this.setState({ otp: '221198' })
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
                <Text size={18} textAlign='center' style={{ marginTop: 32 }}>Input OTP number</Text>
                <View style={{ marginTop: 45 }}>
                    <OTPInput
                        value={this.state.otp}
                        onChange={this.handleOTPChange}
                        tintColor="rgba(253, 131, 84, 1)"
                        offTintColor="rgba(253, 131, 84, 1)"
                        otpLength={4}
                        cellStyle={{  borderBottomWidth: 1, borderWidth: 0 }}
                        allowFontScaling={false}
                    />
                </View>
                
            </Container>
            <TouchableOpacity style={{ position: 'absolute', bottom: -1, left: 0, width: '100%' }}>
                <LinearGradient style={{ paddingVertical: 12, width: '95%', alignSelf: 'center', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(254, 95, 117, 0.7)', 'rgba(252, 152, 66, 0.7)']}>
                    <Text color='#fff' style={{ fontFamily: 'Heebo-Medium' }}>Confirm</Text>
                </LinearGradient>
            </TouchableOpacity>
        </MainView>
    );
  }
}


export default OTPScreen;

