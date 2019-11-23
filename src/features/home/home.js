import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Carousel} from '@ant-design/react-native';
// import {IconFill} from '@ant-design/icons-react-native';
import {Row, Col} from '../../components/Grid';

export default class Home extends React.Component {
  onHorizontalSelectedIndexChange = index => {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index);
  };
  onVerticalSelectedIndexChange = index => {
    /* tslint:disable: no-console */
    console.log('vertical change to', index);
  };
  render() {
    return (
      <View>
        <Carousel
          style={styles.wrapper}
          selectedIndex={1}
          autoplay
          infinite
          afterChange={this.onHorizontalSelectedIndexChange}>
          <View style={[styles.containerHorizontal, {backgroundColor: 'grey'}]}>
            <Text>Carousel 1</Text>
          </View>
          <View style={[styles.containerHorizontal, {backgroundColor: 'gray'}]}>
            <Text>Carousel 2</Text>
          </View>
          <View style={[styles.containerHorizontal, {backgroundColor: 'aqua'}]}>
            <Text>Carousel 4</Text>
          </View>
        </Carousel>
        <View
          style={[styles.notif, {backgroundColor: '#ec5d67', paddingLeft: 10}]}>
          <Row>
            <Col size={10}>
              <Text style={styles.profileText}> Dadang Rohandi</Text>
              <Text style={styles.profileText}> 10.75.90</Text>
            </Col>
            <Col size={2}>
              {/* <IconFill name="bell" size={20} color="white" /> */}
            </Col>
          </Row>
        </View>
        <View style={[styles.notif, styles.center, {backgroundColor: '#fff'}]}>
          <Text style={{margin: 3}}> 20 Nov 2019</Text>
          <Row>
            <Col align="center" size={6}>
              <View
                style={[
                  styles.center,
                  styles.checkN,
                  {backgroundColor: 'grey'},
                ]}>
                <Text style={[styles.white, {fontSize: 10}]}>Check In</Text>
                <Text
                  style={[styles.white, {fontSize: 20, fontWeight: 'bold'}]}>
                  09.00.00
                </Text>
              </View>
            </Col>
            <Col align="center" size={6}>
              <View
                style={[
                  styles.center,
                  styles.checkN,
                  {backgroundColor: '#37bcf0'},
                ]}>
                <Text style={[styles.white, {fontSize: 10}]}>Check In</Text>
                <Text
                  style={[styles.white, {fontSize: 20, fontWeight: 'bold'}]}>
                  18.00.00
                </Text>
              </View>
            </Col>
          </Row>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  notif: {
    borderRadius: 3,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    margin: 3,
  },
  checkN: {
    height: 50,
    width: 110,
    borderRadius: 5,
  },
  white: {
    color: '#fff',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    color: 'white',
    textAlign: 'left',
    fontSize: 12,
  },
  wrapper: {
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});
