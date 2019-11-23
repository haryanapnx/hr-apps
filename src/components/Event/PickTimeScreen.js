import React, { Component } from 'react';
import Styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import Text from '../Text';
import CalendarPicker from 'react-native-calendar-picker';
import Header from '../Header';
import { Row, Col } from '../Grid';
import { View, Dimensions, TouchableOpacity, Image, BackHandler, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import GradientView from '../GradientView';


const { height, width} = Dimensions.get('window');

const MainView = Styled(View)`
    height: 100%
    width: 100%
`;

const Container = Styled(View)`
    margin: 20px
`;

class PickTimeScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
		return {
            header: <Header showLeftButton screenProps  title='Pick Time' />
      };
  };

  constructor(props) {
    super(props);
    this.state = {
        selectedStartDate: null,
        selectedEndDate: null,
      };
      this.onDateChange = this.onDateChange.bind(this);
  }


  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2019, 6, 3);
    const startDate  =  selectedStartDate ? selectedStartDate.format('DD MMM YYYY') : '';
    const endDate = selectedEndDate ? selectedEndDate.format('DD MMM YYYY') : '';
 
    return (
        <MainView>
             <ScrollView>
                 <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 15 }}>
                    <GradientView style={{ width: '50%', padding: 15, marginRight: 10, borderRadius: 5 }}>
                        <TouchableOpacity>
                            <Text color='#fff' size={10}>Start</Text>
                            <Text color='#fff'>{startDate}</Text>
                            <Text color='#fff' size={10}>09:00</Text>
                        </TouchableOpacity>
                    </GradientView>
                    <GradientView style={{ width: '50%', padding: 15, borderRadius: 5 }}>
                        <TouchableOpacity>
                            <Text color='#fff' size={10}>End</Text>
                            <Text color='#fff'>{endDate}</Text>
                            <Text color='#fff' size={10}>09:00</Text>
                        </TouchableOpacity>
                    </GradientView>
                 </View>
                 
                <View style={{ backgroundColor: '#fff' }}>
                    <CalendarPicker
                        style={{ padding: 20 }}
                        startFromMonday={true}
                        allowRangeSelection={true}
                        minDate={minDate}
                        previousTitle="<"
                        nextTitle=">"
                        maxDate={maxDate}
                        selectedDayColor="#FC9842"
                        selectedDayTextColor="#FFFFFF"
                        onDateChange={this.onDateChange}
                        textStyle={{
                            fontFamily: 'Heebo-Bold',
                            color: 'black',
                            fontSize: 12
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                    <View style={{ backgroundColor: '#fff', borderRadius: 5, height: 40, alignItems: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ width: '20%' }}>
                            <Text size={20} color='#FC9842' textAlign='center'>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '60%' }}>
                            <Text size={20} textAlign='center' style={{ fontFamily: 'Heebo-Medium' }}>09:00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '20%' }}>
                            <Text size={20} color='#FC9842' textAlign='center'>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ScrollView>
            <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                    <TouchableOpacity>
                        <GradientView style={{ borderRadius: 5, height: 40, justifyContent: 'center'}}>
                            <Text textAlign='center' color='#fff' type='bold'>Save</Text>
                        </GradientView>
                    </TouchableOpacity>
                </View>
        </MainView>
    );
  }
}


export default PickTimeScreen;

