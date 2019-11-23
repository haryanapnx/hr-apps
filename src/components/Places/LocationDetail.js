import React, { Component } from 'react';
import Styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconLine from 'react-native-vector-icons/SimpleLineIcons';
import IconFeather from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import Text from '../Text';
import Header from '../Header';
import CardPlaces from '../Card/CardPlaces';
import GradientView from '../GradientView';
import { Row, Col } from '../Grid';
import { View, Dimensions, Modal, TouchableOpacity, Image, BackHandler, ScrollView, FlatList, ActivityIndicator } from 'react-native';


const { height, width} = Dimensions.get('window');

const MainView = Styled(View)`
	backgroundColor: #fff
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
    margin: 31px 32px 25px 32px
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


class LocationDetail extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
		return {
			header: <Header  title='Location Details' showLeftButton />,
	 };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  renderItem = ({ item, index }) =>
  (
    <View>
        <CardPlaces />
    </View>
    
  )

  render() {
  
    return (
      <MainView>
        <ScrollView>
            <Container>
                <View style={{ marginBottom: 22 }}>
                    <Text color='#FD8354' type='bold    '>Restaurant</Text>
                    <Text>4.6/5.0 <Ionicons name='md-star' size={16} color='black' />
                    <Ionicons name='md-star' size={16} color='black' />
                    <Ionicons name='md-star' size={16} color='black' />
                    <Ionicons name='md-star' size={16} color='black' />
                    <Ionicons name='md-star' size={16} color='black' />
                    </Text>
                </View>
                <View>
                    <Text size={26} color='rgba(7, 18, 21, 1)' type='bold'>Location Name</Text>
                </View>
            </Container>
                <ScrollView horizontal={true} style={{ marginLeft: 20 }}>
                    <TouchableOpacity style={{ marginRight: 20 }}>
                        <Image style={{ height: 180, width: 300 }} resizeMode='stretch' source={require('../../../assets/images/d4.jpeg')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 20 }}>
                        <Image style={{ height: 180, width: 300 }} resizeMode='stretch' source={require('../../../assets/images/d4.jpeg')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 20 }}>
                        <Image style={{ height: 180, width: 300 }} resizeMode='stretch' source={require('../../../assets/images/d4.jpeg')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 20 }}>
                        <Image style={{ height: 180, width: 300 }} resizeMode='stretch' source={require('../../../assets/images/d4.jpeg')} />
                    </TouchableOpacity>
                </ScrollView>
            <Container style={{ marginTop: 11 }}>
                <View style={{ marginBottom: 17 }}>
                    <Text style={{ marginBottom: 18 }} size={12} color='rgba(145, 158, 159, 1)' type='bold'>Address</Text>
                    <Text size={14} color='rgba(7, 18, 21, 1)'>The Papilion, Lantai Rooftop, Jl. Kemang Raya No. 45AA, Kemang, Jakarta</Text>
                </View>
                <View style={{ marginBottom: 17 }}>
                    <Text style={{ marginBottom: 18 }} size={12} color='rgba(145, 158, 159, 1)' type='bold'>Information</Text>
                    <Text size={14} color='rgba(7, 18, 21, 1)'>dia.lo.gue is a common artspace that is open to the public . Our intent is to provide a space where a genuine creative dialogue can start to happen between artists, designers and the general public. This ethos is reflected in our name, which translates in local Betawi language as ‘He/She – You – Me’, and in our logogram, which can be interpreted as individuals of many different characters, ages and personalities.</Text>
                </View>
                <View style={{ marginBottom: 17 }}>
                    <Text style={{ marginBottom: 18 }} size={12} color='rgba(145, 158, 159, 1)' type='bold'>Open Hour</Text>
                    <Row>
                        <Col size={2}>
                            <Text>Sabtu</Text>
                            <Text>Sabtu</Text>
                            <Text>Sabtu</Text>
                            <Text>Sabtu</Text>
                            <Text>Sabtu</Text>
                            <Text>Sabtu</Text>
                        </Col>
                        <Col size={10}>
                            <Text>18.00 PM - 03.00 AM</Text>
                            <Text>18.00 PM - 03.00 AM</Text>
                            <Text>18.00 PM - 03.00 AM</Text>
                            <Text>18.00 PM - 03.00 AM</Text>
                            <Text>18.00 PM - 03.00 AM</Text>
                            <Text>18.00 PM - 03.00 AM</Text>
                        </Col>
                    </Row>
                </View>
                <TouchableOpacity style={{ width: '90%', borderColor: 'rgba(246, 95, 6, 1)', borderWidth: 2, height: 42, borderRadius: 5, marginBottom: 23, justifyContent: 'center' }}>
                    <Text textAlign='center' color='rgba(246, 95, 6, 1)'>Make Event from this location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '90%', justifyContent: 'center' }}>
                    <Text textAlign='center' color='rgba(246, 95, 6, 1)' type='bold'><IconFeather name='map-marker-outline' size={18} /> View on map</Text>
                </TouchableOpacity>
            </Container>

                {/* <TouchableOpacity>
                    <Text textAlign='center' color='rgba(246, 95, 6, 1)' style={{ fontFamily: 'Heebo-Medium' }}>View More</Text>
                </TouchableOpacity> */}
        </ScrollView>
      </MainView>
    );
  }
}


export default LocationDetail;

