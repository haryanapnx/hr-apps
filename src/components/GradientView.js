import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text as ReactText } from 'react-native';
import Styled from 'styled-components';


class GradientView extends Component {
    render() {
        const { children, ...style } = this.props;
        return (
            <LinearGradient {...style} {...this.props} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(247, 169, 1, 0.5)', 'rgba(246, 95, 6, 0.5)']}>
             {children}
            </LinearGradient>
        );
    }
}

export default GradientView;
