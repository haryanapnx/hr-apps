import React, { Component } from 'react';
import Styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import Text from '../Text';
import Header from '../Header';
import InputText from '../Input/InputText';
import CardPlaces from '../Card/CardPlaces';
import { Row, Col } from '../Grid';
import { View, Dimensions, TouchableOpacity, Image, BackHandler, ScrollView, FlatList, ActivityIndicator } from 'react-native';


const { height, width} = Dimensions.get('window');

const MainView = Styled(View)`
    height: 100%
    width: 100%
    backgroundColor: #fff
`;

const Container = Styled(View)`
    padding: 10px 20px
`;

const GreyView = Styled(View)`
    padding: 10px 20px
    backgroundColor: #F2F4F4
`;
class TimeAndLocation extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
		return {
            header: <Header showLeftButton screenProps title='Voting Event' />
      };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      email: '',
      error: {
          email: null
      },
      refresh: []
    };
  }

  onValidate = () => {

  }

  onChangeValue = () => {

  }

 

  render() {
  
    return (
        <MainView>
             <ScrollView>
                <GreyView>
                    <Text size={18} style={{ lineHeight: 38 }}>Step 3/3</Text>
                    <Text type='bold' size={26} style={{ lineHeight: 38 }}>Time & Location</Text>
                </GreyView>
                <Container>
                    <View style={{ marginTop: 32 }}>
                        <Text type='bold' style={{ marginBottom: 14 }}>Expiration Date</Text>
                        <View>
                            <TouchableOpacity>
                                <Row style={{ height: 40, paddingLeft: 20, alignItems: 'center', borderColor: '#D6DEDE', borderWidth: 1, borderRadius: 5 }}>
                                    <Col size={10}>
                                        <Text type='bold'>14 April 2019</Text>
                                    </Col>
                                    <Col size={2} style={{ height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FD8354', borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                                        <Icon size={20} color='#fff' name='access-time' />
                                    </Col>
                                </Row>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Row style={{ height: 40, paddingLeft: 20, alignItems: 'center', borderColor: '#D6DEDE', borderWidth: 1, borderBottomRightRadius: 5, borderBottomLeftRadius: 5 }}>
                                    <Col size={12}>
                                        <Text size={12}>Wednesday, 14 April 2019 at 09.00</Text>
                                    </Col>
                                </Row>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 24, marginBottom: 14 }}>
                        <Text type='bold'>Preference</Text>
                    </View>
                    <View style={{ paddingVertical: 12,marginBottom: 6, paddingHorizontal: 18, borderRadius: 5, borderColor: 'rgba(12, 69, 83, 0.12)', borderWidth: 1 }}>
                        <View style={{ width: '100%', marginBottom: 6, flexDirection: 'row'  }}>
                            <View style={{ width: '70%' }}>
                                <Text size={12}>Place name, 0, Full address name, city name, province name.</Text>
                            </View>
                            <View style={{ width: '30%' }}>
                                <TouchableOpacity style={{ height: 36, borderColor: 'rgba(246, 95, 6, 1)', borderWidth: 2, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text color='rgba(246, 95, 6, 1)'>Change</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: '100%',marginBottom: 6, flexDirection: 'row'  }}>
                            <View style={{ width: '70%' }}>
                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <View style={{ width: '35%' }}>
                                <Text color='rgba(7, 18, 21, 1)' size={8}>start</Text>
                                    <Text color='rgba(7, 18, 21, 1)' size={12} type='bold'>15 Jan 2019</Text>
                                    <Text color='rgba(7, 18, 21, 1)' size={10}>Tue, 15:00 AM</Text>
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                    <View style={{ height: 8, width: 8, borderRadius: 5, backgroundColor: 'rgba(214, 222, 222, 1)' }}></View>
                                    <View style={{ height: 8, width: 20, borderTopWidth: 1, marginTop: 5, borderTopColor: 'rgba(214, 222, 222, 1)' }}></View>
                                    <View style={{ height: 8, width: 8, borderRadius: 5, backgroundColor: 'rgba(214, 222, 222, 1)' }}></View>
                                </View>
                                <View style={{ width: '35%' }}>
                                    <Text color='rgba(7, 18, 21, 1)' textAlign='right' size={8}>end</Text>
                                    <Text color='rgba(7, 18, 21, 1)' textAlign='right' size={12} type='bold'>15 Jan 2019</Text>
                                    <Text color='rgba(7, 18, 21, 1)' textAlign='right' size={10}>Tue, 15:00 AM</Text>
                                </View>
                            </View>
                            </View>
                            <View style={{ width: '30%' }}>
                                <TouchableOpacity style={{ height: 36, borderColor: 'rgba(12, 69, 83, 0.12)', borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text color='rgba(109, 118, 118, 1)'>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 12,marginBottom: 6, paddingHorizontal: 18, borderRadius: 5, borderColor: 'rgba(12, 69, 83, 0.12)', borderWidth: 1 }}>
                        <View style={{ width: '100%', marginBottom: 6, flexDirection: 'row'  }}>
                            <View style={{ width: '70%' }}>
                                <Text size={12}>Place name, 0, Full address name, city name, province name.</Text>
                            </View>
                            <View style={{ width: '30%' }}>
                                <TouchableOpacity style={{ height: 36, borderColor: 'rgba(246, 95, 6, 1)', borderWidth: 2, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text color='rgba(246, 95, 6, 1)'>Change</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: '100%',marginBottom: 6, flexDirection: 'row'  }}>
                            <View style={{ width: '70%' }}>
                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <View style={{ width: '35%' }}>
                                <Text color='rgba(7, 18, 21, 1)' size={8}>start</Text>
                                    <Text color='rgba(7, 18, 21, 1)' size={12} type='bold'>15 Jan 2019</Text>
                                    <Text color='rgba(7, 18, 21, 1)' size={10}>Tue, 15:00 AM</Text>
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                    <View style={{ height: 8, width: 8, borderRadius: 5, backgroundColor: 'rgba(214, 222, 222, 1)' }}></View>
                                    <View style={{ height: 8, width: 20, borderTopWidth: 1, marginTop: 5, borderTopColor: 'rgba(214, 222, 222, 1)' }}></View>
                                    <View style={{ height: 8, width: 8, borderRadius: 5, backgroundColor: 'rgba(214, 222, 222, 1)' }}></View>
                                </View>
                                <View style={{ width: '35%' }}>
                                    <Text color='rgba(7, 18, 21, 1)' textAlign='right' size={8}>end</Text>
                                    <Text color='rgba(7, 18, 21, 1)' textAlign='right' size={12} type='bold'>15 Jan 2019</Text>
                                    <Text color='rgba(7, 18, 21, 1)' textAlign='right' size={10}>Tue, 15:00 AM</Text>
                                </View>
                            </View>
                            </View>
                            <View style={{ width: '30%' }}>
                                <TouchableOpacity style={{ height: 36, borderColor: 'rgba(12, 69, 83, 0.12)', borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text color='rgba(109, 118, 118, 1)'>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 12,marginBottom: 6, paddingHorizontal: 18, borderRadius: 5, borderColor: 'rgba(12, 69, 83, 0.12)', borderWidth: 1 }}>
                        <View style={{ width: '100%', marginBottom: 6, flexDirection: 'row'  }}>
                            <View style={{ width: '70%' }}>
                                <Text size={12}>Place name, 0, Full address name, city name, province name.</Text>
                            </View>
                            <View style={{ width: '30%' }}>
                                <TouchableOpacity style={{ height: 36, borderColor: 'rgba(246, 95, 6, 1)', borderWidth: 2, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text color='rgba(246, 95, 6, 1)'>Change</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: '100%',marginBottom: 6, flexDirection: 'row'  }}>
                            <View style={{ width: '70%' }}>
                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <View style={{ width: '35%' }}>
                                <Text color='rgba(7, 18, 21, 1)' size={8}>start</Text>
                                    <Text color='rgba(7, 18, 21, 1)' size={12} type='bold'>15 Jan 2019</Text>
                                    <Text color='rgba(7, 18, 21, 1)' size={10}>Tue, 15:00 AM</Text>
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                    <View style={{ height: 8, width: 8, borderRadius: 5, backgroundColor: 'rgba(214, 222, 222, 1)' }}></View>
                                    <View style={{ height: 8, width: 20, borderTopWidth: 1, marginTop: 5, borderTopColor: 'rgba(214, 222, 222, 1)' }}></View>
                                    <View style={{ height: 8, width: 8, borderRadius: 5, backgroundColor: 'rgba(214, 222, 222, 1)' }}></View>
                                </View>
                                <View style={{ width: '35%' }}>
                                    <Text color='rgba(7, 18, 21, 1)' textAlign='right' size={8}>end</Text>
                                    <Text color='rgba(7, 18, 21, 1)' textAlign='right' size={12} type='bold'>15 Jan 2019</Text>
                                    <Text color='rgba(7, 18, 21, 1)' textAlign='right' size={10}>Tue, 15:00 AM</Text>
                                </View>
                            </View>
                            </View>
                            <View style={{ width: '30%' }}>
                                <TouchableOpacity style={{ height: 36, borderColor: 'rgba(12, 69, 83, 0.12)', borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text color='rgba(109, 118, 118, 1)'>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                 
                </Container>
           </ScrollView>
                <Container>
                    <TouchableOpacity style={{ marginBottom: 15, backgroundColor: 'rgba(242, 244, 244, 1)', borderRadius: 5, height: 42, justifyContent: 'center', alignItems: 'center' }}>
                        <Text size={24}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: 15, borderWidth: 2, borderColor: 'rgba(246, 95, 6, 1)', borderRadius: 5, height: 42, justifyContent: 'center', alignItems: 'center' }}>
                        <Text size={16} color='rgba(246, 95, 6, 1)'>Publish</Text>
                    </TouchableOpacity>
                </Container>
        </MainView>
    );
  }
}


export default TimeAndLocation;

