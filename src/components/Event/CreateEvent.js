import React, { Component } from 'react';
import Styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconLine from 'react-native-vector-icons/SimpleLineIcons';
import IconFeather from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import Text from '../Text';
import Header from '../Header';
import LinearGradient from 'react-native-linear-gradient';
import CardPlaces from '../Card/CardPlaces';
import GradientView from '../GradientView';
import { Row, Col } from '../Grid';
import { View, Dimensions, Modal, TouchableOpacity, Image, BackHandler, ScrollView, FlatList, ActivityIndicator } from 'react-native';


const { height, width} = Dimensions.get('window');

const MainView = Styled(View)`
	backgroundColor: rgba(242, 244, 244, 1)
  height: 100%
  width: 100%
`;

const Button = Styled(TouchableOpacity)`
    width: 48%
    justifyContent: center
    alignItems: center
    height: 36px
    flexDirection: row
    borderWidth: 1px
    borderColor: rgba(214, 222, 222, 1)
    borderRadius: 15px
`;

const Container = Styled(View)`
    margin: 20px
`;

const pictureSource = [{
  source: require('../../../assets/images/d1.jpeg'),
  title: 'Samsung',
  price: '200000',
  discon: '10'
},
{
  source: require('../../../assets/images/d2.jpeg'),
  title: 'Oppo',
  price: '200000',
  discon: '10'
},
{
  source: require('../../../assets/images/d3.jpeg'),
  title: 'Vivo',
  price: '200000'
},
{
  source: require('../../../assets/images/d2.jpeg'),
  title: 'Oppo',
  price: '200000',
  discon: '10'
},
{
  source: require('../../../assets/images/d3.jpeg'),
  title: 'Vivo',
  price: '200000'
},
{
  source: require('../../../assets/images/d3.jpeg'),
  title: 'Vivo',
  price: '200000'
}
];


class CreateEvent extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
		return {
			header: <Header  title='Create Event' showLeftButton />,
	 };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
  
    return (
      <MainView>
        <ScrollView>
            <Container>
            <TouchableOpacity>
                <LinearGradient style={{ height: 150, width: '100%', marginBottom: 20, borderRadius: 5, justifyContent: 'flex-end', paddingLeft: 12, paddingBottom: 12 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(246, 95, 6, 1)', 'rgba(253, 131, 84, 1)', 'rgba(246, 95, 6, 1)', 'rgba(183, 240, 3, 0.2)']}>
                   <Text size={26} color='#fff' type='bold'>Regular Event</Text>
                </LinearGradient>
             </TouchableOpacity>
                <TouchableOpacity style={{ height: 150, width: '100%', marginBottom: 20, backgroundColor: 'blue', borderRadius: 5, justifyContent: 'flex-end', paddingLeft: 12, paddingBottom: 12 }}>
                    <Text size={26} color='#fff' type='bold'>Regular Event</Text>
                </TouchableOpacity>
            </Container>
        </ScrollView>
      </MainView>
    );
  }
}


export default CreateEvent;

