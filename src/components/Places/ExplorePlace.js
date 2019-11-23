import React, { Component } from 'react';
import Styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconLine from 'react-native-vector-icons/SimpleLineIcons';
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


class ExplorePlace extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
		return {
			header: <Header  title='Explore Places' showLeftButton />,
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
                <TouchableOpacity style={{ marginBottom: 26, backgroundColor: 'rgba(242, 244, 244, 1)', borderColor: 'rgba(12, 69, 83, 0.12)', paddingVertical: 9, borderWidth: 1, borderRadius: 15, width: '100%',alignItems: 'center', flexDirection: 'row' }}>
                    <Image source={require('../../../assets/icons/search.png')} resizeMode='contain' style={{ height: 20, width: 20, marginHorizontal: 18, }} />
                    <Text color='#869B9A'>Search Place</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between' }}>
                    <Button>
                        <View style={{ width: '80%', alignItems: 'center' }}>
                            <Text color='rgba(7, 18, 21, 1)' size={12}>Promo Only</Text>
                        </View>
                        <View style={{ width: '20%' }}>
                            <Image style={{ height: 6, width: 12 }} source={require('../../../assets/icons/chevron-down.png')} />
                        </View>
                    </Button>
                    <Button>
                        <View style={{ width: '80%', alignItems: 'center' }}>
                            <Text color='rgba(7, 18, 21, 1)' size={12}>All Category</Text>
                        </View>
                        <View style={{ width: '20%' }}>
                            <Image style={{ height: 6, width: 12 }} source={require('../../../assets/icons/chevron-down.png')} />
                        </View>
                    </Button>
                </View>

                <FlatList
                    ref="flatList"
                    extraData={this.state}
                    data={pictureSource}
                    numColumns={2}     
                    renderItem={this.renderItem}
                    keyExtractor={(index) => index.toString()}
                />
                <TouchableOpacity>
                    <Text textAlign='center' color='rgba(246, 95, 6, 1)' style={{ fontFamily: 'Heebo-Medium' }}>View More</Text>
                </TouchableOpacity>
            </Container>
        </ScrollView>
      </MainView>
    );
  }
}


export default ExplorePlace;

