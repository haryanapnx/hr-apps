import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Styled from 'styled-components';
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Row, Col } from './Grid';

const MainView = Styled(View)`
    width: 100%;
    height: 60px;
    backgroundColor: #fff
    elevation: 2
`;

const TransparentMainView = Styled(MainView)`
    backgroundColor: transparent;
`;

const RowView = Styled(Row)`
    height: 100%;
`;

const ColumnView = Styled(Col)`
    justifyContent: center;
    alignItems: center;
`;

const TransparentBackView = Styled(View)`
    width: 100%;
    maxWidth: 74;
    minHeight: 25;
    justifyContent: center;
    alignItems: flex-end;
    paddingRight: 10;
    backgroundColor: #FFFFFF;
    borderTopRightRadius: 30;
    borderBottomRightRadius: 30;
`;

const SideButton = Styled(TouchableOpacity)`
    flex: 1;
    width: 100%;
    alignItems: center;
    justifyContent: center;
`;

const SideIcon = Styled(Icon)`
    fontSize: 23;
    color: #FC9842;
`;

const SideIconRight = Styled(SideIcon)`
    fontSize: 14;
`;

const TitleText = Styled(Text)`
    fontSize: 14;
`;

const defaultProps = {
    color: '#fff',
    showLeftButton: false,
    iconLeftButton: 'arrow-back',
};

class Header extends React.Component {

  onPressRightButton = () => {
    if (this.props.onPressRightButton) this.props.onPressRightButton();
  }

  onPressLeftButton = () => {
    if (this.props.onPressLeftButton) this.props.onPressLeftButton();
    else this.props.navigation.pop();
  }

  renderTransparentMode() {
    const { showLeftButton, iconLeftButton, iconRightButton, children, ...style } = this.props;
    return (
      <TransparentMainView {...style}>
        <RowView>
          <ColumnView size={2}>
            {showLeftButton ? <SideButton onPress={this.onPressLeftButton}>
                <TransparentBackView><SideIcon name={iconLeftButton} /></TransparentBackView>
            </SideButton> : <View />}
          </ColumnView>

          <ColumnView size={8}>
            {children || <View />}
          </ColumnView>

          <ColumnView size={2}>
            {iconRightButton ? <SideButton onPress={this.onPressRightButton}>
              {iconRightButton}
            </SideButton> : <View />}
          </ColumnView>

        </RowView>
      </TransparentMainView>
    );
  }

  renderNormalMode() {
    const { showLeftButton, rootHeader, iconLeftButton, iconRightButton, titleRight, iconRightButtons, color, title, children, ...style } = this.props;
    return (
      <MainView {...style} {...this.props}>
        <RowView>
          <ColumnView size={2}>
            {showLeftButton ? <SideButton onPress={this.onPressLeftButton}>
                <SideIcon name={iconLeftButton} />
            </SideButton> : <View />}
          </ColumnView>

          <ColumnView size={7.6} style={{ justifyContent: 'center', alignItems: 'center' }}>
            {children || <TitleText type='bold' style={{ color: 'black' }}>{title}</TitleText>}
          
          </ColumnView>

          <ColumnView size={2.4}>
            {iconRightButton ? <SideButton onPress={this.onPressRightButton}>
              {iconRightButton}
            </SideButton> : <View />}
            {titleRight && <TitleText style={{ marginRight: 12 }} onPress={this.onPressRightButton}>{titleRight}
            <SideIconRight name={iconRightButtons} /></TitleText>}
          </ColumnView>

        </RowView>
      </MainView>
    );
  }

  render() {
    const { transparentMode } = this.props;
    if (!transparentMode) return this.renderNormalMode();
    return this.renderTransparentMode();
  }
}

Header.defaultProps = defaultProps;

export default withNavigation(Header);
