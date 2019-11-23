import React, { Component } from 'react';
import { Text as ReactText } from 'react-native';
import Styled from 'styled-components';

const BaseText = Styled(ReactText)`
  fontSize: ${props => (props.size ? props.size : 14)};
  fontFamily: ${props => (props.type === 'bold' ? 'Heebo-Bold' : 'Heebo-Regular')};
  fontStyle: ${props => (props.fontStyle ? props.fontStyle : 'normal')};
  color: ${props => (props.color ? props.color : 'rgba(0,0,0,0.7)')};
  textAlign: ${props => (props.textAlign ? props.textAlign : 'left')};
  textDecorationLine: ${props => (props.textDecorationLine ? props.textDecorationLine : 'none')};
`;

class Text extends Component {
    render() {
        const { children, ...style } = this.props;
        return (
            <BaseText {...style} {...this.props} allowFontScaling={false}>
              {children}
            </BaseText>
        );
    }
}

export default Text;
