import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {
  ScrollView,
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {Row, Col} from '../Grid';
import {Icon} from '@ant-design/react-native';

const menu = [
  {name: 'Home', icon: 'home', section: false, link: 'home'},
  {name: 'Absensi', icon: 'calendar', section: false, link: 'absensi'},
  {name: 'Cuti', icon: 'carry-out', section: false, link: 'cuti'},
  {name: 'Lembur', icon: 'reload-time', section: true, link: 'Screen4'},
  {name: 'Perdin', icon: 'book', section: false, link: 'Screen4'},
  {name: 'Ukes', icon: 'medicine-box', section: false, link: 'Screen4'},
  {name: 'Approval', icon: 'check-square', section: true, link: 'Screen4'},
  {name: 'Logout', icon: 'logout', section: false, link: 'Screen4'},
];
class SideBar extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.profile}>
            <TouchableHighlight style={[styles.profileImgContainer]}>
              <Image
                source={require('../../../assets/images/d1.jpeg')}
                style={styles.profileImg}
              />
            </TouchableHighlight>
            <Row>
              <Col size={8}>
                <Text style={styles.profileText}> Dadang Rohandi</Text>
                <Text style={styles.profileText}> 10.75.90</Text>
              </Col>
              <Col
                style={{textAlign: 'right', justifyContent: 'flex-end'}}
                size={4}>
                <Text style={styles.version}>HRMS V1.0.0</Text>
              </Col>
            </Row>
          </View>
          {menu.map((item, i) => (
            <View key={i} style={styles.navSectionStyle}>
              <Row>
                <Col size={2}>
                  <Icon name={item.icon} />
                </Col>
                <Col style={{textAlignVertical: 'center'}} size={4}>
                  <Text
                    style={styles.navItemStyle}
                    onPress={this.navigateToScreen(item.link)}>
                    {item.name}
                  </Text>
                </Col>
              </Row>
              {item.section && (
                <View
                  style={{
                    marginTop: 20,
                    borderBottomColor: '#f2f2f2',
                    borderBottomWidth: 1,
                  }}
                />
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default SideBar;

const styles = StyleSheet.create({
  version: {
    fontSize: 10,
    color: 'lightgrey',
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  profileText: {
    color: 'lightgrey',
    textAlign: 'left',
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  profile: {
    height: 160,
    padding: 10,
    backgroundColor: '#144e92',
  },
  container: {
    flex: 1,
  },
  navItemStyle: {
    paddingTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  navSectionStyle: {
    backgroundColor: '#fff',
    padding: 10,
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
