import React from 'react';
import {Container, Tab, Tabs} from 'native-base';
import DaftarCuti from './src/daftarCuti';
import AmbilCuti from './src/ambilCuti';

export default class Cuti extends React.PureComponent {
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
          <Tab heading="Daftar Cuti">
            <DaftarCuti />
          </Tab>
          <Tab heading="Ambil Cuti">
            <AmbilCuti />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
