import React from 'react';
import Styled from 'styled-components';
import { View, Image, TouchableOpacity, Modal } from 'react-native';
import Text from '../Text';
import GradienView from '../GradientView';
// import { Modal } from 'antd-mobile';

  const Wrapper = Styled(View)`
    background-color: rgba(0, 0, 0, 0.4);
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 15px;
  `;

  const Body = Styled(View)`
    background-color: ${props => props.transparent ? 'transparent' : '#FFF'};
    padding: 15px;
    border-radius: 5px;
    minHeight: 1px
    width: ${props => props.type === 'small' ? '50%' : '100%'};
  `

  const BodyText = Styled(View)`
    width: 100%
    margin-top: 15px;
    justify-content: center;
  `

  const MessageText = Styled(Text)`
    textAlign: center;
    font-size: 14px;
  `

  class ModalInvitation extends React.Component {
    constructor() {
      super();
      this.closeModal = this.closeModal.bind(this);
    }
    closeModal = (key) => {
        this.props.closeModal(key);
    }

    render() {
      return (
          <Modal
            transparent={true}
            animationType="fade"
            visible={this.props.visible}
            onRequestClose={this.closeModal}
          >
              <Wrapper {...this.props}>
                <Body type={this.props.type} transparent={this.props.transparent}>
                    <View>
                            <View style={{ height: 22, flexDirection: 'row', marginBottom: 18 }}>
                                <View style={{ width: '50%' }}>
                                        <Text color='#071215' type='bold' size={14}>Pubblish Event</Text>
                                </View>
                                <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                                        <Text color='#F65F06' type='bold' size={10}>Regular Event</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 25 }}>
                                <View style={{ width: '25%' }}>
                                    <Image style={{ height: 48, width: 48, borderRadius: 30 }} source={require('../../../assets/images/d2.jpeg')}  />
                                </View>
                                <View style={{ width: '70%', justifyContent: 'center' }}>
                                    <Text color='#AFB9B9' type='bold' size={10}>Event Creator</Text>
                                    <Text color='#071215' type='bold' size={10}>Regular Event</Text>
                                </View>
                            </View>
                        </View>
                    <View style={{ marginBottom: 18 }}>
                        <Text color='#071215' type='bold'>Event TItle</Text>
                    </View>
                    <View style={{ marginBottom: 12 }}>
                        <Text><Text color='#071215' type='bold'>Place Name</Text>, 0, Full address name, city name, province name</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 18 }}>
                      <View style={{ width: '26%' }}>
                        <Text color='#071215' size={8}>start</Text>
                        <Text color='#071215' size={12} type='bold'>15 Jan 2019</Text>
                        <Text color='#071215' size={10}>Tue, 15:00 AM</Text>
                      </View>
                      <View style={{ width: '45%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ height: 8, width: 8, borderRadius: 5, backgroundColor: '#071215' }}></View>
                        <View style={{ height: 8, width: '100%', borderTopWidth: 1, marginTop: 5, borderTopColor: '#071215' }}></View>
                        <View style={{ height: 8, width: 8, borderRadius: 5, backgroundColor: '#071215' }}></View>
                      </View>
                      <View style={{ width: '26%', alignItems: 'flex-end' }}>
                        <Text color='#071215' size={8}>end</Text>
                        <Text color='#071215' size={12} type='bold'>15 Jan 2019</Text>
                        <Text color='#071215' size={10}>Tue, 15:00 AM</Text>
                      </View>
                    </View>
                    <View style={{ marginBottom: 18 }}>
                      <Text size={10}>Deskripsi adalah satu kaidah upaya pengolahan data menjadi sesuatu yang dapat diutarakan secara jelas dan tepat dengan tujuan agar dapat dimengerti oleh orang yang tidak langsung mengalaminya sendiri.</Text>
                    </View>
                    <View style={{ height: 36, marginBottom: 12 }}>
                      <Text size={12}><Text type='bold' size={12}>5 People</Text> attending,</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 24 }}>
                      <TouchableOpacity style={{ width: '45%', justifyContent: 'center', height: 36, borderColor: '#F65F06', borderRadius: 5, borderWidth: 2}}>
                          <Text textAlign='center' color='#F65F06'>Participate</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ width: '45%', justifyContent: 'center', height: 36,backgroundColor: '#F2F4F4', borderColor: '#0C4553', borderRadius: 5, borderWidth: 1 }}>
                          <Text textAlign='center'>Declline</Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <Text textAlign='center'>Decide Later</Text>
                    </View>
                </Body>
              </Wrapper>
          </Modal>
      );
    }
}

  export default ModalInvitation;
