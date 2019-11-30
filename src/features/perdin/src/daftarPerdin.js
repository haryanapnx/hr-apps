import React from 'react';
import dayjs from 'dayjs';
import {
  Container,
  Picker,
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
} from 'native-base';
import {bulan, tahun} from '../../../commons/data';
import {WhiteSpace} from '@ant-design/react-native';
import {View} from 'react-native';
import {Row, Col} from '../../../components/Grid';
import Text from '../../../components/Text';
import {isEmpty} from '../../../commons/helper';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
const isLoading = [1, 2, 4];

const DaftarPerdin = ({
  handleDate,
  listPerdin,
  defaultGetPerdin,
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
              <Text size={12}>Jenis Perdin:</Text>
              <Text bold={true}>{item.jns_perdin}</Text>
              <Text size={12}>Wilayah:</Text>
              <Text bold={true}>{item.wilayah}</Text>
              <Text size={12}>Tgl Pengajuan:</Text>
              <Text bold={true}>
                {dayjs(item.tgl_pengajuan).format('DD MMM YYYY')}
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
                  <Text>Approval</Text>
                  <Text bold={true}>{item.approval.nama}</Text>
                </View>
                <View>
                  <Text size={12}>Tgl Approval</Text>
                  <Text bold={true}>
                    {!isEmpty(item.approval.tgl_approve) &&
                      dayjs(item.approval.tgl_approve).format('DD MMM YYYY')}
                  </Text>
                </View>
              </Col>
              <Col size={4}>
                <View>
                  <Text size={12}>Asal:</Text>
                  <Text bold={true}>{item.asal}</Text>
                  <Text size={12}>Tgl Mulai:</Text>
                  <Text bold={true}>
                    {dayjs(item.tgl_mulai).format('DD MMM YYYY')}
                  </Text>
                </View>
              </Col>
              <Col size={4}>
                <View>
                  <Text size={12}>Tujuan:</Text>
                  <Text bold={true}>{item.tujuan}</Text>
                </View>
                <Text size={12}>Tgl Selesai</Text>
                <Text bold={true}>
                  {dayjs(item.tgl_selesai).format('DD MMM YYYY')}
                </Text>
              </Col>
            </Row>
          </CardItem>
          <CardItem>
            <View>
              <Text size={12}>Catatan</Text>
              <Text bold={true}>{item.catatan}</Text>
            </View>
          </CardItem>
          <CardItem>
            <View>
              <Text size={12}>Catatan Approval</Text>
              <Text bold={true}>{item.approval.catatan_approval}</Text>
            </View>
          </CardItem>
        </Card>
        <WhiteSpace />
      </>
    );
  };
  return (
    <Container>
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
          <Button onPress={defaultGetPerdin} transparent iconLeft>
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
          : !isEmpty(listPerdin) && (
              <Accordion
                dataArray={listPerdin}
                animation={true}
                expanded={true}
                renderHeader={_renderHeader}
                renderContent={_renderContent}
              />
            )}
      </Content>
    </Container>
  );
};

export default DaftarPerdin;
