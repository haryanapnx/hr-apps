import React from 'react';
import dayjs from 'dayjs';
import DateTimePicker from '@react-native-community/datetimepicker';
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
import {pegawai} from '../../../commons/data';
import {StyleSheet} from 'react-native';
import {Icon} from '@ant-design/react-native';
import {isEmpty} from '../../../commons/helper';
import TimePicker from './timePicker';

class FormLembur extends React.Component {
  state = {
    isBekal: '',
    isJatah: '',
    alasan: '',
    rekomen: '',
    diputuskan: '',
    jenisCuti: '',

    startDate: new Date(),
    endDate: new Date(),
    mode: '',
    show: false,
    timeStart: false,
    timeEnd: false,
  };

  setStartDate = (e, date) => {
    date = date || this.state.startDate;
    this.setState({
      [this.state.mode]: false,
      startDate: date,
    });
  };
  setEndDate = (e, date) => {
    date = date || this.state.endDate;
    this.setState({
      [this.state.mode]: false,
      endDate: date,
    });
  };

  show = mode => {
    this.setState({[mode]: true, mode});
  };

  handlePicker = val => {
    this.show(val);
  };

  handleDate = (startDate, endDate) => {
    this.setState({startDate, endDate});
  };

  render() {
    const {
      startDate,
      show,
      endDate,
      isBekal,
      isJatah,
      alasan,
      rekomen,
      diputuskan,
      jenisCuti,
      timeStart,
      timeEnd,
    } = this.state;

    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Nomor</Label>
              <Input
                value={alasan}
                onChangeText={alasan => this.setState({alasan})}
              />
            </Item>
            <Item stackedLabel>
              <Label>Tanggal</Label>
              <Button
                style={{justifyContent: 'flex-start'}}
                onPress={() => this.handlePicker('show')}
                block
                transparent
                iconLeft>
                <Icon name="calendar" />
                <Text>{dayjs(startDate).format('DD MMM YYYY')}</Text>
              </Button>
              {show && (
                <DateTimePicker
                  value={startDate}
                  mode="date"
                  display="default"
                  onChange={this.setStartDate}
                />
              )}
            </Item>
            <TimePicker
              title="Jam Mulai"
              setTime={this.setStartDate}
              value={startDate}
              isShow={timeStart}
              onPress={() => this.handlePicker('timeStart')}
            />
            <TimePicker
              title="Jam Akhir"
              setTime={this.setEndDate}
              value={endDate}
              onPress={() => this.handlePicker('timeEnd')}
              isShow={timeEnd}
            />
            <Item stackedLabel>
              <Label>Pemberi Tugas</Label>
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
                  {pegawai.map(({name}, i) => (
                    <Picker.Item key={i} label={name} value={name} />
                  ))}
                </Picker>
              </Item>
            </Item>

            <Item stackedLabel>
              <Label>Maksud / Tujuan Lembur</Label>
              <Input
                value={alasan}
                onChangeText={alasan => this.setState({alasan})}
              />
            </Item>
            <Item stackedLabel>
              <Label>Tempat</Label>
              <Input
                value={alasan}
                onChangeText={alasan => this.setState({alasan})}
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

export default FormLembur;

const styles = StyleSheet.create({
  radioStyle: {paddingRight: 30, marginTop: 20, marginBottom: 10},
});
