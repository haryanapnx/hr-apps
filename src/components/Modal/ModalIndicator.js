import React from 'react';
import Styled from 'styled-components';
// import {  DotIndicator, SkypeIndicator, BarIndicator } from 'react-native-indicators';
import { View, ActivityIndicator, Modal, Text } from 'react-native';


  const Wrapper = Styled(View)`
    background-color: rgba(0, 0, 0, 0.4);
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 15px;
  `;

  const Body = Styled(View)`
    background-color: ${props => (props.transparent ? 'transparent' : '#FFF')};
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 5px;
    minWidth: 1px
  `;

  const ContainerIndicator = Styled(View)`
  `;

  const BodyText = Styled(View)`
    width: 100%
    margin-top: 15px;
    justify-content: center;
  `;

  const MessageText = Styled(Text)`
    textAlign: center;
  `;

  export default class ModalIndicator extends React.Component {

    render() {
      const { onClose, visible, count, message, type, transparent } = this.props;
      return (
        <Modal transparent animationType='fade' visible={visible} onRequestClose={() => onClose()}>
            <Wrapper {...this.props}>
              <Body type={type} transparent={transparent}>
                {/* <ContainerIndicator> */}
                  <ActivityIndicator size='large' count={count} color='#231F20' />
                {/* </ContainerIndicator> */}
                {message && <BodyText>
                  <MessageText>{message}</MessageText>
                </BodyText>}
              </Body>
            </Wrapper>
        </Modal>
      );
    }
}
