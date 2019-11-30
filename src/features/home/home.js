import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, View, Card, CardItem} from 'react-native';
import {Carousel} from '@ant-design/react-native';
import {Row, Col} from '../../components/Grid';
import {getHome, getHomeAbsen} from './redux/homeAction';
import {isEmpty} from '../../commons/helper';
import dayjs from 'dayjs';

const Home = () => {
  const dispatch = useDispatch();
  const {absen, loading, kumulasi_absen} = useSelector(state => state.home);
  const {data, token} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getHome(token));
    dispatch(getHomeAbsen(token));
  }, [dispatch, token]);
  const onHorizon = index => {};

  return (
    <>
      <View>
        <Carousel
          style={styles.wrapper}
          selectedIndex={1}
          autoplay
          infinite
          afterChange={onHorizon}>
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
              <Text style={styles.profileText}> {data.name}</Text>
              <Text style={styles.profileText}> {data.nip}</Text>
            </Col>
            <Col size={2}>
              {/* <IconFill name="bell" size={20} color="white" /> */}
            </Col>
          </Row>
        </View>
        <View style={[styles.notif, styles.center, {backgroundColor: '#fff'}]}>
          <Text style={{marginBottom: 10}}>
            {' '}
            {dayjs().format('DD MMMM YYYY mm:ss')}
          </Text>
          <Row>
            <Col align="center" size={6}>
              <View
                style={[
                  styles.center,
                  styles.checkN,
                  {backgroundColor: 'grey'},
                ]}>
                <Text style={[styles.white, {fontSize: 10}]}>Jam Keluar</Text>
                <Text
                  style={[styles.white, {fontSize: 20, fontWeight: 'bold'}]}>
                  {isEmpty(absen) ? <Text>-</Text> : absen.jam_masuk}
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
                <Text style={[styles.white, {fontSize: 10}]}>Jam Masuk</Text>
                <Text
                  style={[styles.white, {fontSize: 20, fontWeight: 'bold'}]}>
                  {isEmpty(absen) ? '-' : absen.jam_keluar}
                </Text>
              </View>
            </Col>
          </Row>
        </View>
      </View>
      <View style={styles.bottomAbsen}>
        {!isEmpty(kumulasi_absen) && (
          <Row>
            <Col size={3}>
              <Text style={styles.profileText}> Total Telat:</Text>
            </Col>
            <Col size={3}>
              <Text style={styles.profileText}>
                {kumulasi_absen.total_jam.hours}:
                {kumulasi_absen.total_jam.minutes}:
                {kumulasi_absen.total_jam.seconds} Jam
              </Text>
            </Col>
            <Col size={3}>
              <Text style={styles.profileText}>Total Hari:</Text>
            </Col>
            <Col size={3}>
              <Text style={styles.profileText}>
                {kumulasi_absen.total_hari} Hari
              </Text>
            </Col>
          </Row>
        )}
      </View>
    </>
  );
};
export default Home;

const styles = StyleSheet.create({
  bottomAbsen: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'orange',
    width: '96%',
    left: '2%',
    padding: 5,
    borderRadius: 5,
  },
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
