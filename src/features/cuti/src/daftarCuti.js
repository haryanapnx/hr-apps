import React, {useState} from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import {Container, DatePicker, Item, Icon, Input} from 'native-base';
import {Row, Col} from '../../../components/Grid';

const DaftarCuti = () => {
  const [chosenDate, setdate] = useState(new Date());
  const setDate = newDate => {
    setdate(newDate);
  };
  return (
    <Container style={{elevation: 5}}>
      <Row>
        <Col size={6}>
          <Item style={{padding: 4.1}}>
            <Icon name="calendar" color="#999" style={{marginLeft: 5}} />
            <DatePicker
              defaultDate={chosenDate}
              minimumDate={new Date(2000, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={dayjs.locale('id')}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'spinner'}
              placeHolderText="Filter by Date"
              textStyle={{color: 'green'}}
              // placeHolderTextStyle={{color: '#d3d3d3'}}
              onDateChange={setDate}
              disabled={false}
            />
          </Item>
        </Col>
        <Col size={6}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
        </Col>
      </Row>
    </Container>
  );
};

export default DaftarCuti;
