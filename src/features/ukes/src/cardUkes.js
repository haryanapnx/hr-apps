import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import dayjs from 'dayjs';
import {
  Button,
  Text,
  Content,
  CardItem,
  Card,
  Left,
  Right,
  Body,
} from 'native-base';
import {WingBlank} from '@ant-design/react-native';
import {Row, Col} from '../../../components/Grid';
import FormatMoney from '../../../components/FormatMoney';
import {isEmpty} from '../../../commons/helper';

const CardUkes = ({listUkes, handleDetail}) => {
  return (
    <>
      {listUkes.map((item, i) => (
        <WingBlank key={i}>
          <Card padder>
            <TouchableOpacity onPress={() => handleDetail([item])}>
              <CardItem bordered>
                <Body>
                  <Row>
                    <Col size={5}>
                      <Text note>Nama RS :</Text>
                    </Col>
                    <Col size={7}>
                      <Text>{item.nama_rs_dr}</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col size={5}>
                      <Text note>Tgl Periksa :</Text>
                    </Col>
                    <Col size={7}>
                      <Text>
                        {!isEmpty(item.tgl_periksa) &&
                          dayjs(item.tgl_periksa).format('DD MMM YYYY')}
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col size={5}>
                      <Text note>Tanggungan :</Text>
                    </Col>
                    <Col size={7}>
                      <Text>{item.nama_tanggungan}</Text>
                    </Col>
                  </Row>
                </Body>
              </CardItem>
            </TouchableOpacity>
            <CardItem style={{justifyContent: 'flex-end'}} footer bordered>
              <Row>
                <Col size={5}>
                  <Text note>Nominal :</Text>
                </Col>
                <Col size={7}>
                  <Text style={styles.textStatus}>
                    {FormatMoney.getFormattedMoney(item.nominal)}
                  </Text>
                </Col>
              </Row>
            </CardItem>
          </Card>
        </WingBlank>
      ))}
    </>
  );
};

export default CardUkes;

const styles = StyleSheet.create({
  textStatus: {
    color: '#fff',
    padding: 4,
    backgroundColor: 'orange',
    borderRadius: 8,
    fontSize: 12,
    textAlign: 'center',
  },
});
