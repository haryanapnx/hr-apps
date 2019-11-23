import React, { Component } from 'react';
import Styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Checkbox from 'react-native-custom-checkbox';
import IconLine from 'react-native-vector-icons/SimpleLineIcons';
import IconFeather from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import Text from '../Text';
import Header from '../Header';
import LinearGradient from 'react-native-linear-gradient';
import CardPlaces from '../Card/CardPlaces';
import GradientView from '../GradientView';
import { Row, Col } from '../Grid'; 
import InputText from '../Input/InputText'; 
import { View, Dimensions, Modal, TouchableOpacity, Image, BackHandler, ScrollView, FlatList, ActivityIndicator } from 'react-native';


const { height, width} = Dimensions.get('window');

const MainView = Styled(View)`
  backgroundColor: #fff
  height: 100%
  width: 100%
`;

const Container = Styled(View)`
    margin: 10px 20px
`;

const GreyView = Styled(View)`
    padding: 10px 20px
    backgroundColor: #F2F4F4
`;


class InvitePeople extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
		return {
			header: <Header  title='Invite People' showLeftButton />,
	 };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      groupChecked: false,
      potluckChecked: false,
      title: '',
      descirption: '',
      category: '',
      error:{
          title: null,
          descirption: null,
          category: null
      }
    };
  }

  checkedList = (name, checked) => {
      console.log(name, checked)
      this.setState({
        [name]: !this.state[name]
      })
  }

  onChangeValue = () => {

  }

  onValidate = () => {

  }

  render() {
  
    return (
      <MainView>
        <ScrollView>
                {/* <Checkbox
                    name='groupChecked'
                    size={25}
                    checked={this.state.groupChecked}
                    style={{backgroundColor: '#FD8354', color:'#fff',borderColor: '#FD8354', borderWidth: 0.2}}
                    onChange={(name, checked) => this.checkedList(name, checked)}
                /> */}
            <GreyView>
                <Text size={18} style={{ lineHeight: 38 }}>Step 1/3</Text>
                <Text type='bold' size={26} style={{ lineHeight: 38 }}>Event Details</Text>
            </GreyView>
            <Container>
                <InputText
                    name='title'
                    onChangeValue={this.onChangeValue}
                    placeholder='Judul'
                    value={this.state.title}
                    error={this.state.error.title}
                    onBlurValue={this.onValidate}
                />
                <InputText
                    name='category'
                    onChangeValue={this.onChangeValue}
                    placeholder='Select category'
                    value={this.state.category}
                    error={this.state.error.category}
                    onBlurValue={this.onValidate}
                />
                  <InputText
                    name='descirption'
                    onChangeValue={this.onChangeValue}
                    placeholder='Descirption'
                    value={this.state.descirption}
                    error={this.state.error.descirption}
                    onBlurValue={this.onValidate}
                />
            </Container>
            <GreyView style={{ flexDirection: 'row' }}>
                <View style={{ width: '12%' }}>
                    <Checkbox
                        name='groupChecked'
                        size={25}
                        checked={this.state.groupChecked}
                        style={{backgroundColor: '#FD8354', color:'#fff',borderColor: '#FD8354', borderWidth: 0.2}}
                        onChange={(name, checked) => this.checkedList(name, checked)}
                    />
                </View>
                <View style={{ width: '38%', justifyContent: 'center' }}>
                    <Text>Group</Text>
                </View>
                <View style={{ width: '12%' }}>
                    <Checkbox
                        name='potluckChecked'
                        size={25}
                        checked={this.state.potluckChecked}
                        style={{backgroundColor: '#FD8354', color:'#fff',borderColor: '#FD8354', borderWidth: 0.2}}
                        onChange={(name, checked) => this.checkedList(name, checked)}
                    />
                </View>
                <View style={{ width: '38%', justifyContent: 'center' }}>
                    <Text>Potluck</Text>
                </View>
            </GreyView>
            <Container style={{ flexDirection: 'row' }}>
                <View style={{ width: '50%' }}>
                    <Text>Max Person</Text>
                </View>
                <View style={{ width: '50%', borderBottomColor: '#D6DEDE', borderBottomWidth: 1, paddingBottom: 14 }}>
                    <Text> 1 People</Text>
                </View>
            </Container>
        </ScrollView>
        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
            <TouchableOpacity style={{ borderRadius: 5, borderColor: '#F65F06', justifyContent: 'center', borderWidth: 1, height: 42 }}>
                <Text textAlign='center' color='#F65F06' style={{ fontFamily: 'Heebo-Medium' }}>Next</Text>
            </TouchableOpacity>
        </View>
      </MainView>
    );
  }
}


export default InvitePeople;

