import React from 'react';
import dayjs from 'dayjs';
import DateRange from '../../../components/DateRange';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Button,
  Text,
} from 'native-base';
import RadioForm from 'react-native-simple-radio-button';

import {StyleSheet} from 'react-native';
import {Icon} from '@ant-design/react-native';

const bekal = [
  {label: 'Ya', value: 0},
  {label: 'Tidak', value: 1},
];
const jatah = [
  {label: 'Tahun ini', value: 0},
  {label: 'Tahun lalu', value: 1},
  {label: 'Tahun Depan', value: 2},
];
class AmbilCuti extends React.Component {
  state = {
    isBekal: '',
    startDate: '',
    endDate: '',
    isJatah: '',
    alasan: '',
    rekomen: '',
    diputuskan: '',
    jenisCuti: '',
  };

  handleDate = (startDate, endDate) => {
    this.setState({startDate, endDate});
  };

  render() {
    const {
      startDate,
      endDate,
      isBekal,
      isJatah,
      alasan,
      rekomen,
      diputuskan,
      jenisCuti,
    } = this.state;
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Jenis Cuti</Label>
              <Item picker>
                <Picker
                  name="jenisCuti"
                  // inlineLabel={true}
                  mode="dropdown"
                  iosIcon={<Icon name="down" />}
                  placeholder="Jenis Cuti"
                  style={{width: undefined}}
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  selectedValue={jenisCuti}
                  onValueChange={jenisCuti => this.setState({jenisCuti})}>
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Wallet" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>
              </Item>
            </Item>
            <Item style={{alignItems: 'flex-start'}} stackedLabel>
              <Label>Jatah Tahun</Label>
              <RadioForm
                radio_props={jatah}
                initial={isJatah}
                formHorizontal={true}
                buttonSize={8}
                radioStyle={styles.radioStyle}
                onPress={value => {
                  this.setState({isJatah: value});
                }}
              />
            </Item>
            <Item stackedLabel>
              <Label>Mulai tanggal</Label>
              <DateRange
                initialRange={[startDate, endDate]}
                onSuccess={(s, e) => this.handleDate(s, e)}
                theme={{markColor: 'teal', markTextColor: 'white'}}
              />
            </Item>
            <Item stackedLabel>
              <Label>Alasan</Label>
              <Input
                value={alasan}
                onChangeText={alasan => this.setState({alasan})}
              />
            </Item>
            <Item stackedLabel>
              <Label>Rekomendasi</Label>
              <Item picker>
                <Picker
                  // inlineLabel={true}
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="Jenis Cuti"
                  style={{width: undefined}}
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  selectedValue={rekomen}
                  onValueChange={rekomen => this.setState({rekomen})}>
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Wallet" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>
              </Item>
            </Item>
            <Item stackedLabel>
              <Label>Diputuskan</Label>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="Jenis Cuti"
                  style={{width: undefined}}
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  selectedValue={diputuskan}
                  onValueChange={diputuskan => this.setState({diputuskan})}>
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Wallet" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>
              </Item>
            </Item>
            <Item style={{alignItems: 'flex-start'}} stackedLabel>
              <Label>Ambil Bekal Cuti</Label>
              <RadioForm
                radio_props={bekal}
                initial={isBekal}
                formHorizontal={true}
                buttonSize={8}
                radioStyle={styles.radioStyle}
                onPress={value => {
                  this.setState({isBekal: value});
                }}
              />
            </Item>
            <Button block style={{margin: 20}}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default AmbilCuti;

const styles = StyleSheet.create({
  radioStyle: {paddingRight: 30, marginTop: 20, marginBottom: 10},
});
