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
import {isEmpty} from '../../../commons/helper';

const CardAbsensi = ({
  listAbsen,
  visible,
  detailAbsen,
  handleDetail,
  handleCreate,
}) => {
  let data = visible ? detailAbsen : listAbsen;

  return (
    <>
      {!isEmpty(data) &&
        data.map((item, i) => (
          <WingBlank key={i}>
            <Card padder>
              <TouchableOpacity onPress={() => handleDetail([item])}>
                <CardItem bordered>
                  <Body>
                    <Row>
                      <Col size={5}>
                        <Text note>NRP :</Text>
                      </Col>
                      <Col size={7}>
                        <Text>{item.nrp}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col size={5}>
                        <Text note>Tanggal :</Text>
                      </Col>
                      <Col size={7}>
                        <Text>
                          {!isEmpty(item.tanggal) &&
                            dayjs(item.tanggal).format('DD MMM YYYY')}
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col size={5}>
                        <Text note>Jam Masuk :</Text>
                      </Col>
                      <Col size={7}>
                        <Text>
                          {!isEmpty(item.jam_masuk) &&
                            dayjs(item.jam_masuk).format('hh:mm:ss')}
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col size={5}>
                        <Text note>Jam Keluar :</Text>
                      </Col>
                      <Col size={7}>
                        <Text>
                          {!isEmpty(item.jam_keluar) &&
                            dayjs(item.jam_keluar).format('hh:mm:ss')}
                        </Text>
                      </Col>
                    </Row>
                  </Body>
                </CardItem>
              </TouchableOpacity>
              {!isEmpty(visible) &&
                item.need_kontigensi &&
                !isEmpty(item.kontigensi) && (
                  <>
                    <CardItem header bordered>
                      <Text>Kontigensi</Text>
                    </CardItem>
                    <CardItem bordered>
                      <Body>
                        <Row>
                          <Col size={5}>
                            <Text note>Jam Masuk :</Text>
                          </Col>
                          <Col size={7}>
                            <Text>
                              {!isEmpty(item.kontigensi.jam_masuk) &&
                                dayjs(item.kontigensi.jam_masuk).format(
                                  'hh:mm:ss',
                                )}
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col size={5}>
                            <Text note>Jam Keluar :</Text>
                          </Col>
                          <Col size={7}>
                            <Text>
                              {!isEmpty(item.kontigensi.jam_keluar) &&
                                dayjs(item.kontigensi.jam_keluar).format(
                                  'hh:mm:ss',
                                )}
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col size={5}>
                            <Text note>Di Approve :</Text>
                          </Col>
                          <Col size={7}>
                            <Text>{item.kontigensi.user_approval}</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col size={5}>
                            <Text note>Jam Keluar :</Text>
                          </Col>
                          <Col size={7}>
                            <Text>
                              {!isEmpty(item.kontigensi.jam_keluar) &&
                                dayjs(item.kontigensi.jam_keluar).format(
                                  'hh:mm:ss',
                                )}
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col size={5}>
                            <Text note>Di Approve :</Text>
                          </Col>
                          <Col size={7}>
                            <Text>{item.kontigensi.user_approval}</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col size={5}>
                            <Text note>Alasan :</Text>
                          </Col>
                          <Col size={7}>
                            <Text>{item.kontigensi.alasan}</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col size={5}>
                            <Text note>Status :</Text>
                          </Col>
                          <Col size={7}>
                            <Text style={styles.textStatus}>
                              {item.kontigensi.status}
                            </Text>
                          </Col>
                        </Row>
                      </Body>
                    </CardItem>
                  </>
                )}
              <CardItem style={{justifyContent: 'flex-end'}} footer bordered>
                <Left>
                  <Text style={styles.textStatus}>{item.status}</Text>
                </Left>
                <Right>
                  {isEmpty(visible) &&
                    item.need_kontigensi &&
                    isEmpty(item.kontigensi) && (
                      <Button
                        small
                        onPress={() => handleCreate([item])}
                        warning>
                        <Text>Kontigensi</Text>
                      </Button>
                    )}
                </Right>
              </CardItem>
            </Card>
          </WingBlank>
        ))}
    </>
  );
};

export default CardAbsensi;

const styles = StyleSheet.create({
  textStatus: {
    color: '#fff',
    padding: 4,
    backgroundColor: 'lightgrey',
    borderRadius: 8,
    fontSize: 12,
  },
});
