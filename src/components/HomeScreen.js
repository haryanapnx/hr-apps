import React, { Component } from 'react';
import Styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconLine from 'react-native-vector-icons/SimpleLineIcons';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import axios from 'axios';
import Text from './Text';
import GradientView from './GradientView';
import { Row, Col } from './Grid';
import { View, Dimensions, Modal, TouchableOpacity, Image, BackHandler, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import ModalInvitation from './Modal/ModalInvitation';


const { height, width} = Dimensions.get('window');

const MainView = Styled(View)`
	backgroundColor: #fff
  height: 100%
  width: 100%
`;

const Container = Styled(View)`
    marginHorizontal: 20px
    marginVertical: 10px
    marginBottom: 40px
`;

const RoundView = Styled(View)`
  borderRadius: 50px
  alignItems: center
  backgroundColor: black
  padding: 2px 5px
`;

const ContentPerView = Styled(View)`
  minHeight: 1px
  flexDirection: row
`;

const SubContentView = Styled(TouchableOpacity)`
  marginRight: 10px 
  borderRadius: 2px
`;

const ContentView = Styled(View)`
  flexDirection: row 
`;

const SliderView = Styled(View)`
  flexDirection: column
  marginBottom: 20px
`;

const CardImage = Styled(Image)`
  width: 80px
  height: 80px
`;

const CardImageVertical = Styled(Image)`
  width: 100%
  height: 120px
`;

const ImageView = Styled(View)`
  shadowOpacity: 1
  minHeight: 1px
  shadowColor: black
  shadowOpacity: 0.5
  borderRadius: 10px
`;

const CardViewVertical = Styled(TouchableOpacity)`
  marginRight: 10px
`;


const pictureSource = [{
  source: require('../../assets/images/d1.jpeg'),
  title: 'Samsung',
  price: '200000',
  discon: '10'
},
{
  source: require('../../assets/images/d2.jpeg'),
  title: 'Oppo',
  price: '200000',
  discon: '10'
},
{
  source: require('../../assets/images/d3.jpeg'),
  title: 'Vivo',
  price: '200000'
},
{
  source: require('../../assets/images/d2.jpeg'),
  title: 'Oppo',
  price: '200000',
  discon: '10'
},
{
  source: require('../../assets/images/d3.jpeg'),
  title: 'Vivo',
  price: '200000'
}
];


class HomeScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
		return {
			headerLeft: <Text style={{ marginLeft: 18 }} size={18} type='bold'>Janjian.</Text>,
			headerRight: <IconLine name='bell' size={22} style={{ marginRight: 20 }} />,
      };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

   componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', function() {
      return false;
    });
   }

  componentWillUnmount() {
  }

  renderItem ({item, index}) {
    return (
      <CardViewVertical onPress={() => this.props.navigation.navigate('DetailActivities')}>
        <ImageView style={{ elevation: 2, borderColor: '#ddd' }}>
            <CardImageVertical resizeMode='stretch' source={require('../../assets/images/d4.jpeg')} />
        </ImageView>
        <View>
            <Text>4.6/5.0 <Ionicons name='md-star' size={16} color='black' />
                <Ionicons name='md-star' size={16} color='black' />
                <Ionicons name='md-star' size={16} color='black' />
                <Ionicons name='md-star' size={16} color='black' />
                <Ionicons name='md-star' size={16} color='black' />
            </Text>
            <Text size={12} type='bold' color='#8fd0ca'>Restaurant</Text>
            <Text size={16} type='bold'>Full day visit nusa kambangan</Text>
            <Text size={10} style={{ marginBottom: 10 }}>Probolinggi, jawa timur</Text>
        </View>
    </CardViewVertical>
    );
}

  render() {
  
    return (
      <MainView>
        <ScrollView>
        <Container>
          <ScrollView horizontal={true}>
           <TouchableOpacity style={{ width: 250, marginRight: 12, marginBottom: 20, borderRadius: 5 }}>
            <GradientView style={{ padding: 12 }}>
            <View style={{ flexDirection: 'row', width: '70%', marginBottom: 16 }}>
                <View style={{ width: '70%' }}>
                  <Text color='#fff' size={8}>Created by <Text color='#fff' size={8} type='bold'>John Doe</Text></Text>
                </View>
                <View>
                  <Text color='#fff' size={8} type='bold'>REGULAR EVENT</Text>
                </View>
              </View>
              <Text color='#fff' size={12} type='bold' style={{ marginBottom: 14 }}>Event Title</Text>
              <Text color='#fff' size={12} style={{ marginBottom: 14 }}>Name(Conditional), Address and city</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '33%' }}>
                  <Text color='#fff' size={8}>start</Text>
                  <Text color='#fff' size={12} type='bold'>15 Jan 2019</Text>
                  <Text color='#fff' size={10}>Tue, 15:00 AM</Text>
                </View>
                <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                  <View style={{ height: 8, width: 8, borderRadius: 5, backgroundColor: '#fff' }}></View>
                  <View style={{ height: 8, width: 40, borderTopWidth: 1, marginTop: 5, borderTopColor: '#fff' }}></View>
                  <View style={{ height: 8, width: 8, borderRadius: 5, backgroundColor: '#fff' }}></View>
                </View>
                <View style={{ width: '33%' }}>
                  <Text color='#fff' size={8}>end</Text>
                  <Text color='#fff' size={12} type='bold'>15 Jan 2019</Text>
                  <Text color='#fff' size={10}>Tue, 15:00 AM</Text>
                </View>
              </View>
              
            </GradientView>
            </TouchableOpacity>
          </ScrollView>
          <TouchableOpacity style={{ marginBottom: 26, borderColor: '#CFE3E5', paddingVertical: 9, borderWidth: 1, borderRadius: 15, width: '100%',alignItems: 'center', flexDirection: 'row' }}>
            <Image source={require('../../assets/icons/search.png')} resizeMode='contain' style={{ height: 20, width: 20, marginHorizontal: 18, }} />
            <Text color='#869B9A'>Search Place</Text>
          </TouchableOpacity>
          <View> 
          {pictureSource.length !== 0 && <View >
            <Text size={18} type='bold' color='black' style={{ marginBottom: 5 }}>New Promotion</Text>
            <Text size={14} style={{ marginBottom: 15 }}>Special offers for you to held an event on these places.</Text>
            <ScrollView horizontal={true}>
                  <CardViewVertical style={{ width: 150, borderRadius: 3 }} onPress={() => this.props.navigation.navigate('DetailActivities')}>
                    <ImageView style={{ borderColor: '#ddd', borderRadius: 20 }}>
                        <CardImageVertical style={{ height: 90, width: 150, borderRadius: 20 }} resizeMode='stretch' source={require('../../assets/images/d4.jpeg')} />
                        <GradientView style={{ position: 'absolute', top:0, borderBottomRightRadius: 6, paddingHorizontal: 12, paddingVertical: 6, left: 0 }}>
                        <View>
                          <Text color='#fff' type='bold'>Promo</Text>
                        </View>
                        </GradientView>
                    </ImageView>
                    <View>
                        <Text>4.6/5.0 <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                        </Text>
                        <Text size={8} type='bold' color='#24CBE1'>Restaurant</Text>
                        <Text size={12} type='bold'>Eighty Nine Eatery & Coffee</Text>
                        <Text size={10} style={{ marginBottom: 10 }}>Probolinggi, jawa timur</Text>
                    </View>
                  </CardViewVertical>
                  <CardViewVertical style={{ width: 150, borderRadius: 3 }} onPress={() => this.props.navigation.navigate('DetailActivities')}>
                    <ImageView style={{ borderColor: '#ddd', borderRadius: 20 }}>
                        <CardImageVertical style={{ height: 90, width: 150, borderRadius: 20 }} resizeMode='stretch' source={require('../../assets/images/d4.jpeg')} />
                        <GradientView style={{ position: 'absolute', top:0, borderBottomRightRadius: 6, paddingHorizontal: 12, paddingVertical: 6, left: 0 }}>
                        <View>
                          <Text color='#fff' type='bold'>Promo</Text>
                        </View>
                        </GradientView>
                    </ImageView>
                    <View>
                        <Text>4.6/5.0 <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                        </Text>
                        <Text size={8} type='bold' color='#24CBE1'>Restaurant</Text>
                        <Text size={12} type='bold'>Eighty Nine Eatery & Coffee</Text>
                        <Text size={10} style={{ marginBottom: 10 }}>Probolinggi, jawa timur</Text>
                    </View>
                  </CardViewVertical>
                  <CardViewVertical style={{ width: 150, borderRadius: 3 }} onPress={() => this.props.navigation.navigate('DetailActivities')}>
                    <ImageView style={{ borderColor: '#ddd', borderRadius: 20 }}>
                        <CardImageVertical style={{ height: 90, width: 150, borderRadius: 20 }} resizeMode='stretch' source={require('../../assets/images/d4.jpeg')} />
                        <GradientView style={{ position: 'absolute', top:0, borderBottomRightRadius: 6, paddingHorizontal: 12, paddingVertical: 6, left: 0 }}>
                        <View>
                          <Text color='#fff' type='bold'>Promo</Text>
                        </View>
                        </GradientView>
                    </ImageView>
                    <View>
                        <Text>4.6/5.0 <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                        </Text>
                        <Text size={8} type='bold' color='#24CBE1'>Restaurant</Text>
                        <Text size={12} type='bold'>Eighty Nine Eatery & Coffee</Text>
                        <Text size={10} style={{ marginBottom: 10 }}>Probolinggi, jawa timur</Text>
                    </View>
                  </CardViewVertical>
                  
            </ScrollView>
          </View>}

            <TouchableOpacity style={{ borderColor: '#CFE3E5', marginBottom: 32, paddingVertical: 14, borderWidth: 1, borderRadius: 3, width: '100%',alignItems: 'center' }}>
              <Text color='#869B9A' type='bold'>View More</Text>
          </TouchableOpacity>

          <View style={{ marginBottom: 30 }}>
            <Text size={18} type='bold' color='#121F22'>Trending Events</Text>
            <Text size={12} color='#121F22' style={{ marginBottom: 10 }}>Recommended events for your appointment.</Text>
            <ScrollView horizontal={true}>
                <ContentView>
                  <SubContentView onPress={() => this.props.navigation.navigate('SearchActivities')}>
                    <GradientView style={{ marginRight: 10, height: 60, width: 120, justifyContent: 'flex-end' }}>
                      <Text color='#fff' style={{ fontFamily: 'Heebo-Medium', marginLeft:6, marginBottom: 12 }}>Buka Puasa</Text>
                    </GradientView>
                  </SubContentView>
                  <SubContentView onPress={() => this.props.navigation.navigate('SearchActivities')}>
                    <GradientView style={{ marginRight: 10, height: 60, width: 120, justifyContent: 'flex-end' }}>
                      <Text color='#fff' style={{ fontFamily: 'Heebo-Medium', marginLeft: 6, marginBottom: 12 }}>Buka Puasa</Text>
                    </GradientView>
                  </SubContentView>
                  <SubContentView onPress={() => this.props.navigation.navigate('SearchActivities')}>
                    <GradientView style={{ marginRight: 10, height: 60, width: 120, justifyContent: 'flex-end' }}>
                      <Text color='#fff' style={{ fontFamily: 'Heebo-Medium', marginLeft: 6, marginBottom: 12 }}>Saur Bersama</Text>
                    </GradientView>
                  </SubContentView>
                  <SubContentView onPress={() => this.props.navigation.navigate('SearchActivities')}>
                    <GradientView style={{ marginRight: 10, height: 60, width: 120, justifyContent: 'flex-end' }}>
                      <Text color='#fff' style={{ fontFamily: 'Heebo-Medium', marginLeft: 6, marginBottom: 12 }}>Saur Bersama</Text>
                    </GradientView>
                  </SubContentView>
                </ContentView>
            </ScrollView>
          </View>

          <View >
            <Text size={16} type='bold' color='black' style={{ marginBottom: 5 }}>Top Places Nearby</Text>
            <Text size={14} style={{ marginBottom: 15 }}>Special offers for you to held an event on these places.</Text>
            <ScrollView horizontal={true}>
                  <CardViewVertical style={{ width: 150, borderRadius: 3 }} onPress={() => this.props.navigation.navigate('DetailActivities')}>
                    <ImageView style={{ borderColor: '#ddd', borderRadius: 20 }}>
                        <CardImageVertical style={{ height: 90, width: 150, borderRadius: 20 }} resizeMode='stretch' source={require('../../assets/images/d4.jpeg')} />
                        
                    </ImageView>
                    <View>
                        <Text>4.6/5.0 <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                        </Text>
                        <Text size={8} type='bold' color='#24CBE1'>Restaurant</Text>
                        <Text size={12} type='bold'>Never Been Better</Text>
                        <Text size={10} style={{ marginBottom: 10 }}>Probolinggi, jawa timur</Text>
                    </View>
                  </CardViewVertical>
                  <CardViewVertical style={{ width: 150, borderRadius: 3 }} onPress={() => this.props.navigation.navigate('DetailActivities')}>
                    <ImageView style={{ borderColor: '#ddd', borderRadius: 20 }}>
                        <CardImageVertical style={{ height: 90, width: 150, borderRadius: 20 }} resizeMode='stretch' source={require('../../assets/images/d4.jpeg')} />
                        
                    </ImageView>
                    <View>
                        <Text>4.6/5.0 <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                        </Text>
                        <Text size={8} type='bold' color='#24CBE1'>Restaurant</Text>
                        <Text size={12} type='bold'>Koi Kemang</Text>
                        <Text size={10} style={{ marginBottom: 10 }}>Probolinggi, jawa timur</Text>
                    </View>
                  </CardViewVertical>
                  <CardViewVertical style={{ width: 150, borderRadius: 3 }} onPress={() => this.props.navigation.navigate('DetailActivities')}>
                    <ImageView style={{ borderColor: '#ddd', borderRadius: 20 }}>
                        <CardImageVertical style={{ height: 90, width: 150, borderRadius: 20 }} resizeMode='stretch' source={require('../../assets/images/d4.jpeg')} />
                        
                    </ImageView>
                    <View>
                        <Text>4.6/5.0 <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                            <Ionicons name='md-star' size={16} color='black' />
                        </Text>
                        <Text size={8} type='bold' color='#24CBE1'>Restaurant</Text>
                        <Text size={12} type='bold'>Antipodean Kemang</Text>
                        <Text size={10} style={{ marginBottom: 10 }}>Probolinggi, jawa timur</Text>
                    </View>
                  </CardViewVertical>
                  
            </ScrollView>
          </View>

          </View>
          
          <TouchableOpacity style={{ borderColor: '#CFE3E5', marginBottom: 32, paddingVertical: 14, borderWidth: 1, borderRadius: 3, width: '100%',alignItems: 'center' }}>
              <Text color='#869B9A' type='bold'>View More</Text>
          </TouchableOpacity>

 
        <LinearGradient style={{ borderRadius: 3, paddingHorizontal: 15, paddingVertical: 20 }} start={{ x: 1, y: 1 }} end={{ x: 1, y: 1 }} colors={['rgba(246, 95, 6, 1)', 'rgba(253, 131, 84, 1)', 'rgba(246, 95, 6, 1)', 'rgba(183, 240, 3, 0.2)']}>
          <View style={{ alignSelf: 'center', width: '95%',  borderRadius: 3 }}>
                <Text color='#fff' size={18} type='bold'>Question of the day</Text>
                <Text color='#fff' size={12} style={{ marginBottom: 10 }}>What do you do in your free time ?</Text>
                <TouchableOpacity style={{ marginBottom: 10, backgroundColor: '#fff', padding: 8, borderRadius: 3 }}>
                  <Text size={10}>Sendirian di rumah</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 10, backgroundColor: '#fff', padding: 8, borderRadius: 3 }}>
                  <Text size={10}>Nongkrong dicafe sama teman</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 10, backgroundColor: '#fff', padding: 8, borderRadius: 3 }}>
                  <Text size={10}>Melakuka kegiatan keagamaan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 10, backgroundColor: '#fff', padding: 8, borderRadius: 3 }}>
                  <Text size={10}>Berpesta di rumah teman</Text>
                </TouchableOpacity>
          </View>
        </LinearGradient>
        </Container>
        </ScrollView>
        <ModalInvitation 
          visible={false}
        />
      </MainView>
    );
  }
}


export default HomeScreen;

