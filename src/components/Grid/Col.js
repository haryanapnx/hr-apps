import React, {Component} from 'react';
import {View} from 'react-native';
import Styled from 'styled-components';

const defaultProps = {
  size: 0,
};

const ContainerCol = Styled(View)`
    flex: 0 0 auto;
    ${props =>
      props.size !== 0
        ? `
        flex-basis: ${(100 / 12) * props.size}%;
        max-width: ${(100 / 12) * props.size}%;
    `
        : `
        flex-grow: 1;
        flex-basis: 0;
        max-width: 100%;
    `}
    width: 100%;
    min-height: 1px;
    ${props =>
      props.align &&
      `
        alignItems: ${props.align}
    `}
`;

class Col extends Component {
  render() {
    return <ContainerCol {...this.props}>{this.props.children}</ContainerCol>;
  }
}

Col.defaultProps = defaultProps;

export default Col;
