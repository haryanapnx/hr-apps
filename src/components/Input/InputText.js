import React, {Component} from 'react';
import Styled from 'styled-components';
import Text from '../Text';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity, ToastAndroid, Image, TextInput, Platform, ActivityIndicator, Modal } from 'react-native';

const BaseText = Styled(Text)`
	color: #ff9900
`;
const ContentView = Styled(View)`
    marginBottom: 15px
`;

const LabelContent = Styled(View)`
    justifyContent: center
    paddingHorizontal: 3px
    position: absolute
    top: -10
    marginLeft: 10px
    minWidth: 2px
    backgroundColor: #fff

`;

const LeftContent = Styled(View)`
	width: 100%
    width: 100%
    flexDirection: row
	borderBottomColor: #D6DEDE
    borderBottomWidth: 2px
`;

const StyledInput = Styled(TextInput)`
    fontSize: 12px;
    paddingBottom: ${Platform.OS === 'ios' ? 5 : 0};
    marginTop: 0;
    paddingLeft: 0;
    paddingTop: 5px
    paddingBottom: 5px
`

class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false
        };
      }

    onChangeText = (value) => {
        const { name } = this.props;
        this.props.onChangeValue(name, value);
    }

    onBlur = () => {
        const { name } = this.props;
        if (this.props.onBlurValue !== undefined) {

            if (this.props.id !== undefined) {
                this.props.onBlurValue(name, this.props.id);
            } else {
              this.props.onBlurValue(name);
            }
        }
    }

    onFocusChange = () => {
        this.setState({ isFocused: true });
    }

  render() {
        const { name, label, error } = this.props;
        console.log(error, name, 'valid')
    return (
        <ContentView>
            <View>
                {name !== 'password' ? <LeftContent style={ this.state.isFocused && {borderBottomColor: '#24CBE1', borderBottomWidth: 2}} >
                    <View style={{ width: '100%' }}>
                        <StyledInput
                            onChangeText={(text) => this.onChangeText(text)}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            placeholderTextColor='#bcbcbc'
                            onFocus={this.onFocusChange}
                            onBlur={this.onBlur}
                            autoCorrect={false}
                            {...this.props}
                        />
                    </View>
                </LeftContent>
                :
                    <LeftContent  style={ this.state.isFocused && {borderColor: '#ff9900', borderWidth: 2 }}>
                        <View style={{ width: '90%' }}>
                        <StyledInput
                            onChangeText={(text) => this.onChangeText(text)}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            onFocus={this.onFocusChange}
                            placeholderTextColor='rgba(240, 245, 247, 1)'
                            onBlur={this.onBlur}
                            autoCorrect={false}
                            {...this.props}
                        />
                        </View>
                        
                        <TouchableOpacity onPress={() => this.props.onVisible('password', this.props.secureText)} style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>{this.props.secureText ? <Icon name='md-eye-off' size={18} /> : <Icon name='md-eye' size={18} />} </Text>
                        </TouchableOpacity>
                        { this.state.isFocused &&<LabelContent>
                            <BaseText>{label}</BaseText>
                        </LabelContent>}
                    </LeftContent>
                }
                { error &&
                        <Text color='red'>
                            {error}
                        </Text>
                    }
            </View>
        </ContentView>
    );
  }
}

export default InputText;
