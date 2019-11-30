import React, {useState} from 'react';
import dayjs from 'dayjs';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {
  Container,
  Item,
  Icon,
  Content,
  Accordion,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Button,
  Badge,
  Picker,
} from 'native-base';
import {WhiteSpace} from '@ant-design/react-native';
import {View} from 'react-native';
import {Row, Col} from '../../../components/Grid';
import {bulan, tahun} from '../../../commons/data';
import Text from '../../../components/Text';
import {isEmpty} from '../../../commons/helper';

const ActivitasLembur = ({
  handleDate,
  listLembur,
  defaultGetLembur,
  bln,
  thn,
  loading,
}) => {
  const _renderHeader = (item, expanded) => {
    return (
      <Card
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 0,
        }}>
        <CardItem>
          <Left>
            <Body>
              <Text bold={true}>Nomor: </Text>
              <Text bold={true}>{item.nomor}</Text>
              <Text size={12}>Perihal:</Text>
              <Text bold={true}>{item.perihal}</Text>
              <Text size={12}>Tempat:</Text>
              <Text bold={true}>{item.tempat}</Text>
              <Text size={12}>Tanggal:</Text>
              <Text bold={true}>
                {dayjs(item.tanggal).format('DD MMM YYYY')}
              </Text>
              <Badge warning style={{height: 18}}>
                <Content>
                  <Text size={11} color="#fff">
                    {item.approval.status}
                  </Text>
                </Content>
              </Badge>
            </Body>
          </Left>
          <Right>
            <Icon name="remove-circle" />
          </Right>
        </CardItem>
      </Card>
    );
  };
  const _renderContent = item => {
    return (
      <>
        <Card style={{marginTop: 0, backgroundColor: '#deedff'}}>
          <CardItem>
            <Row>
              <Col size={4}>
                <View>
                  <Text>Jam Mulai: {item.jam_mulai}</Text>
                  <Text>Jam Selesai: {item.jam_selesai}</Text>
                </View>
              </Col>
              <Col size={4}>
                <View>
                  <Text size={12}>Approval:</Text>
                </View>
              </Col>
              <Col size={4}>
                <View>
                  <Text bold={true} size={12}>
                    {!isEmpty(item.approval) && item.approval.nama}
                  </Text>
                  <Text size={12}>Tgl Approval</Text>
                  {!isEmpty(item.approval) && (
                    <Text bold={true}>
                      {!isEmpty(item.approval.tgl_approval) &&
                        dayjs(item.approval.tgl_approval).format('DD MMM YYYY')}
                    </Text>
                  )}
                </View>
              </Col>
            </Row>
          </CardItem>
          <CardItem>
            <View>
              <Text size={12}>Catatan Approval</Text>
              <Text bold={true}>
                {!isEmpty(item.approval) && item.approval.catatan_approval}
              </Text>
            </View>
          </CardItem>
        </Card>
        <WhiteSpace />
      </>
    );
  };
  const isLoading = [1, 2, 4];
  return (
    <>
      <Container style={{elevation: 5}}>
        <Row>
          <Col size={5}>
            <Item>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="Bulan"
                  style={{width: undefined}}
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  selectedValue={bln}
                  onValueChange={val => handleDate('bln', val)}>
                  {bulan.map(({label, value}, i) => (
                    <Picker.Item key={i} label={label} value={value} />
                  ))}
                </Picker>
              </Item>
            </Item>
          </Col>
          <Col size={5}>
            <Item>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="Bulan"
                  style={{width: undefined}}
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  selectedValue={thn}
                  onValueChange={val => handleDate('thn', val)}>
                  {tahun.map(({label}, i) => (
                    <Picker.Item key={i} label={label} value={label} />
                  ))}
                </Picker>
              </Item>
            </Item>
          </Col>
          <Col size={2}>
            <Button onPress={defaultGetLembur} transparent iconLeft>
              <Icon name="ios-search" />
            </Button>
          </Col>
        </Row>
        <Content>
          {loading
            ? isLoading.map(item => (
                <ShimmerPlaceHolder
                  key={item}
                  width={400}
                  height={50}
                  autoRun={true}
                  style={{marginBottom: 5}}
                />
              ))
            : !isEmpty(listLembur) && (
                <Accordion
                  dataArray={listLembur}
                  animation={true}
                  expanded={true}
                  renderHeader={_renderHeader}
                  renderContent={_renderContent}
                />
              )}
        </Content>
      </Container>
    </>
  );
};

export default ActivitasLembur;
