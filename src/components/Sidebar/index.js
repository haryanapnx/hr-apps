import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationActions} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {
  ScrollView,
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Row, Col} from '../Grid';
import {Icon} from '@ant-design/react-native';
import {removeUserToken} from '../../features/auth/redux/action';

const menu = [
  {name: 'Home', icon: 'home', section: false, link: 'home'},
  {name: 'Absensi', icon: 'calendar', section: false, link: 'absensi'},
  {name: 'Cuti', icon: 'carry-out', section: false, link: 'cuti'},
  {name: 'Lembur', icon: 'reload-time', section: true, link: 'lembur'},
  {name: 'Perdin', icon: 'book', section: false, link: 'perdin'},
  {name: 'Ukes', icon: 'medicine-box', section: false, link: 'ukes'},
  {name: 'Approval', icon: 'check-square', section: true, link: 'Screen4'},
  //   {name: 'Logout', icon: 'logout', section: false, link: 'Screen4'},
];
const SideBar = props => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.auth);

  const navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    props.navigation.dispatch(navigateAction);
  };

  const signOut = async () => {
    dispatch(removeUserToken());
    props.navigation.navigate('AuthLoading');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          colors={['rgba(65,162,247,1)', 'rgba(20,78,146,1)']}>
          <View style={styles.profile}>
            <TouchableHighlight style={[styles.profileImgContainer]}>
              <Image
                source={require('../../../assets/images/d1.jpeg')}
                style={styles.profileImg}
              />
            </TouchableHighlight>

            <Row>
              <Col size={8}>
                <Text style={styles.profileText}> {data.name}</Text>
                <Text style={styles.profileText}> {data.nip}</Text>
              </Col>
              <Col
                style={{textAlign: 'right', justifyContent: 'flex-end'}}
                size={4}>
                <Text style={styles.version}>HRMS V1.0.0</Text>
              </Col>
            </Row>
          </View>
        </LinearGradient>
        {menu.map((item, i) => (
          <View key={i} style={styles.navSectionStyle}>
            <Row>
              <Col size={2}>
                <Icon name={item.icon} />
              </Col>
              <Col style={{textAlignVertical: 'center'}} size={4}>
                <TouchableOpacity onPress={navigateToScreen(item.link)}>
                  <Text style={styles.navItemStyle}>{item.name}</Text>
                </TouchableOpacity>
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
        <View style={styles.navSectionStyle}>
          <Row>
            <Col size={2}>
              <Icon name="logout" />
            </Col>
            <Col style={{textAlignVertical: 'center'}} size={4}>
              <TouchableOpacity onPress={signOut}>
                <Text style={styles.navItemStyle}>Logout</Text>
              </TouchableOpacity>
            </Col>
          </Row>
        </View>
      </ScrollView>
    </View>
  );
};

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
    //  backgroundColor: '#144e92',
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
