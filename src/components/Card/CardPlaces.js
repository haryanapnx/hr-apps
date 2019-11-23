import React from 'react';
import Styled from 'styled-components';
import GradientView from '../GradientView';
import Text from '../Text';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {  DotIndicator, SkypeIndicator, BarIndicator } from 'react-native-indicators';
import { View, TouchableOpacity, Modal, Image } from 'react-native';


const CardImageVertical = Styled(Image)`
    height: 90px
    width: 150px
    borderRadius: 15px
`;

const CardViewVertical = Styled(TouchableOpacity)`
    marginRight: 20px
    width: 150px
    borderRadius: 3
    marginBottom: 20px
`;

const ImageView = Styled(View)`
  shadowOpacity: 1
  minHeight: 1px
  shadowColor: black
  shadowOpacity: 0.5
  borderRadius: 15px
`;


  export default class CardPlaces extends React.Component {

    render() {
      return (
        <CardViewVertical onPress={() => this.props.navigation.navigate('DetailActivities')}>
            <ImageView style={{ borderColor: '#ddd', borderRadius: 20 }}>
                <CardImageVertical resizeMode='stretch' source={require('../../../assets/images/d4.jpeg')} />
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
      );
    }
}
