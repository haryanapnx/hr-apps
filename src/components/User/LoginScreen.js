import React from 'react';
import Styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import Text from '../Text';
import ValidationComponent from '../validation/form';
import {Row, Col} from '../Grid';
import Loader from '../../components/Loader';
import {Item, Label, Icon, Input, Spinner} from 'native-base';
import {View, TouchableOpacity, Image} from 'react-native';
import {saveUserToken, loginAction} from '../../features/auth/redux/action';

class LoginScreen extends ValidationComponent {
  static navigationOptions = ({navigation, screenProps}) => {
    return {
      header: null,
    };
  };
  state = {
    username: '',
    password: '',
    secureText: true,
  };

  _onPressButton = async () => {
    const {username, password} = this.state;
    this.validate({
      username: {required: true},
      password: {required: true},
    });
    if (this.isFormValid()) {
      let res = await this.props.dispatch(loginAction(username, password));
      if (res) {
        this.props.navigation.navigate('AuthLoading');
      }
    }
  };
  render() {
    const {secureText, username, password} = this.state;
    return (
      <MainView>
        {this.props.loading && <Loader />}
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          colors={['rgba(65,162,247,1)', 'rgba(20,78,146,1)']}>
          <HeaderView>
            <Container>
              <Row>
                <Col size={6}>
                  <Text size={16} color="#fff" style={{marginBottom: 36}}>
                    HRMS+
                  </Text>
                </Col>
                <Col style={{}} size={6}>
                  <Image
                    style={{
                      width: 50,
                      height: 40,
                      position: 'absolute',
                      right: 0,
                    }}
                    source={require('../../../assets/images/bjb.png')}
                  />
                </Col>
              </Row>

              <Text size={26} color="#fff">
                Welcome to HRMS App
              </Text>
            </Container>
          </HeaderView>
        </LinearGradient>

        <ContainerLogin>
          <Text size={18} type="bold" style={{marginTop: 12}}>
            <Icon name="person" color="#dfdfdf" /> Sign in
          </Text>
          <View style={{marginTop: 30, marginBottom: 30}}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                ref="username"
                onChangeText={username => this.setState({username})}
                value={username}
              />
              <Icon name="person" color="#dfdfdf" />
            </Item>
            <Input
              ref="username"
              onChangeText={username => this.setState({username})}
              value={username}
            />
            <TextError>{this.getErrorsInField('username')}</TextError>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                ref="password"
                onChangeText={password => this.setState({password})}
                value={password}
                secureTextEntry={secureText}
              />
              <Icon
                name={secureText ? 'eye-off' : 'eye'}
                onPress={() => this.setState({secureText: !secureText})}
              />
            </Item>
            <TextError>{this.getErrorsInField('password')}</TextError>
          </View>
          <TouchableOpacity onPress={this._onPressButton}>
            <LinearGradient
              style={{
                marginRight: 10,
                paddingVertical: 12,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 0}}
              colors={['rgba(65,162,247,1)', 'rgba(65,162,247,1)']}>
              <Text color="#fff" style={{fontFamily: 'Heebo-Medium'}}>
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ContainerLogin>
      </MainView>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
  data: state.auth.data,
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const MainView = Styled(View)`
    height: 100%
    width: 100%
    backgroundColor:#f1f1f1
`;

const Container = Styled(View)`
    marginHorizontal: 20px
    marginVertical: 16px
`;
const ContainerLogin = Styled(View)`
    borderRadius: 1px
    marginTop:-25px
    height: 100%
    width: 94%
    backgroundColor:#fff
    padding:30px
    marginLeft:3%
    elevation:10
`;

const HeaderView = Styled(View)`
    height: 160px
`;

const TextError = Styled(Text)`
   color: red
   fontStyle: italic   
`;
