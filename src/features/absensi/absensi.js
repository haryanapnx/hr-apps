import React from 'react';
import {Container, Tab, Tabs} from 'native-base';
import {Text} from 'react-native';
// import {Tabs} from '@ant-design/react-native';
import Kehadiran from './src/kehadiran';
import StatusAbsensi from './src/statusAbsensi';

export default class Absensi extends React.PureComponent {
  state = {
    tabActive: 1,
    month: '',
    year: '',
  };

  render() {
    return (
      <Container>
        <Tabs
          style={{backgroundColor: '#144e92'}}
          tabBarBackgroundColor="#144e92">
          <Tab heading="Catatan Kehadiran">
            <Kehadiran />
          </Tab>
          <Tab heading="Status Absensi">
            <StatusAbsensi />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
