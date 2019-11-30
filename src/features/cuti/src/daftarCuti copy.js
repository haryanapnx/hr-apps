import React, {useState} from 'react';
import {bulan, tahun} from '../../../commons/data';
import dayjs from 'dayjs';
import {
  Container,
  DatePicker,
  Item,
  Icon,
  Input,
  Content,
  Accordion,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Button,
  Badge,
  Label,
  Picker
} from 'native-base';
import {WhiteSpace} from '@ant-design/react-native';
import {View} from 'react-native';
import {Row, Col} from '../../../components/Grid';
import Text from '../../../components/Text';
import {isEmpty} from '../../../commons/helper';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const DaftarCuti = ({listCuti, loading,defaultGetCuti, bln, thn, handleDate}) => {
  const [chosenDate, setdate] = useState(new Date());
  const setDate = newDate => {
    setdate(newDate);
  };
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
              <Text bold={true}>{item.jns_cuti}</Text>
              <Badge warning style={{height: 18}}>
                <Content>
                  <Text size={11} color="#fff">
                    {item.status}
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
                  <Text bold={true}>{item.nama}</Text>
                  <Text>Nrp: {item.nrp}</Text>
                </View>
              </Col>
              <Col size={4}>
                <View>
                  <Text size={12}>Dari:</Text>
                  <Text bold={true}>
                    {dayjs(item.tgl_mulai).format('DD MMM YYYY')}
                  </Text>
                  <Text size={12}>Sampai</Text>
                  <Text bold={true}>
                    {dayjs(item.tgl_selesai).format('DD MMM YYYY')}
                  </Text>
                </View>
              </Col>
              <Col size={4}>
                <View>
                  <Text size={12}>Tgl Pengajuan:</Text>
                  <Text bold={true}>
                    {dayjs(item.tgl_pengajuan).format('DD MMM YYYY')}
                  </Text>
                  <Text size={12}>Tgl Approval</Text>
                  <Text bold={true}>
                    {!isEmpty(item.tgl_approval) &&
                      dayjs(item.tgl_approval).format('DD MMM YYYY')}
                  </Text>
                </View>
              </Col>
            </Row>
          </CardItem>
          <CardItem>
            <View>
              <Text size={12}>Alasan</Text>
              <Text bold={true}>{item.alasan}</Text>
            </View>
          </CardItem>
          <CardItem>
            <View>
              <Text size={12}>Catatan Approval</Text>
              <Text bold={true}>{item.catatan_approval}</Text>
            </View>
          </CardItem>
        </Card>
        <WhiteSpace />
      </>
    );
  };
  console.log({listCuti});
  const isLoading = [1, 2, 4];

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
          <Button onPress={defaultGetCuti} transparent iconLeft>
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
          : !isEmpty(listCuti) && (
              <Accordion
                dataArray={listCuti}
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

export default DaftarCuti;
