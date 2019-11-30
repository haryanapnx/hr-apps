import React from 'react';
import Styled from 'styled-components';
import dayjs from 'dayjs';
import {
  Picker,
  Label,
  Item,
  Icon,
  Button,
  Text,
  Content,
  Title,
  Left,
  Body,
  Header,
  Form,
  Input,
} from 'native-base';
import {isEmpty} from '../../../commons/helper';
import {Modal} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {View, ActivityIndicator} from 'react-native';
import ValidationComponent from '../../../components/validation/form';

class CreateAbsens extends ValidationComponent {
  state = {
    jamKeluar: '',
    jamMasuk: '',
    alasan: '',
    approval: '',
    isJamMasuk: false,
  };

  UNSAFE_componentWillMount() {
    const {data} = this.props;
    if (!isEmpty(data)) {
      if (!isEmpty(data.jam_masuk)) {
        this.setState({
          jamMasuk: dayjs(data.jamMasuk).format('H:MM'),
          isJamMasuk: true,
        });
      }
    }
  }
  resetState = () => {
    this.setState({
      jamKeluar: '',
      jamMasuk: '',
      alasan: '',
      approval: '',
      isJamMasuk: false,
    });
  };

  convertJam = jam => {
    return dayjs(jam).format('hh:mm:ss');
  };

  createAbsen = async () => {
    const {jamKeluar, jamMasuk, approval, alasan} = this.state;
    const {data, handleCreate} = this.props;
    this.validate({
      alasan: {required: true},
      approval: {required: true},
      jamMasuk: {required: true},
      jamKeluar: {required: true},
    });
    if (this.isFormValid()) {
      let tgl = dayjs(data.tanggal).format('YYYY-MM-DD');
      let state = {
        id_absen: data.id,
        jam_masuk: `${tgl} ${jamMasuk}:00`,
        jam_keluar: `${tgl} ${jamKeluar}:00`,
        alasan,
        user_id_approval: approval,
      };
      await this.props.createKontigensi(state);
      handleCreate([]);
      this.resetState();
    }
  };
  render() {
    const {visible, data, handleCreate, listApproval, isLoading} = this.props;
    const isData = isEmpty(data);
    const {jamKeluar, jamMasuk, approval, alasan, isJamMasuk} = this.state;

    return (
      <>
        {isLoading && (
          <Loading>
            <ActivityIndicator size="large" />
          </Loading>
        )}
        <Modal
          animationType="slide"
          transparent={false}
          visible={visible}
          onRequestClose={() => handleCreate([])}>
          <Header>
            <Left>
              <Button onPress={() => handleCreate([])} transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Create Kontigensi</Title>
            </Body>
          </Header>
          <Content>
            <Form>
              <Item stackedLabel>
                <Label>Tanggal</Label>
                <Label>
                  {!isData && dayjs(data.tanggal).format('DD MMM YYYY')}
                </Label>
              </Item>
              <Item stackedLabel style={{alignItems: 'flex-start'}}>
                <Label>Jam Masuk</Label>
                <DatePicker
                  date={jamMasuk}
                  mode="time"
                  placeholder="pilih waktu"
                  format="H:MM"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{
                    dateInput: {
                      borderWidth: 0,
                      alignItems: 'flex-start',
                    },
                    disabled: {
                      backgroundColor: '#fff',
                    },
                  }}
                  disabled={isJamMasuk}
                  ref="jamMasuk"
                  is24Hour
                  onDateChange={jamMasuk => {
                    this.setState({jamMasuk});
                  }}
                />
              </Item>
              <TextError>{this.getErrorsInField('jamMasuk')}</TextError>
              <Item stackedLabel style={{alignItems: 'flex-start'}}>
                <Label>Jam Keluar</Label>
                <DatePicker
                  date={jamKeluar}
                  mode="time"
                  placeholder="pilih waktu"
                  format="H:MM"
                  cancelBtnText="Cancel"
                  ref="jamKeluar"
                  showIcon={false}
                  customStyles={{
                    dateInput: {borderWidth: 0, alignItems: 'flex-start'},
                  }}
                  is24Hour
                  onDateChange={jamKeluar => {
                    this.setState({jamKeluar});
                  }}
                />
              </Item>
              <TextError>{this.getErrorsInField('jamKeluar')}</TextError>
              <Item stackedLabel>
                <Label>Maksud / Tujuan Lembur</Label>
                <Input
                  value={alasan}
                  ref="alasan"
                  onChangeText={alasan => this.setState({alasan})}
                />
              </Item>
              <TextError>{this.getErrorsInField('alasan')}</TextError>
              <Item stackedLabel>
                <Label>Approval</Label>
                <Item picker>
                  <Picker
                    name="approval"
                    mode="dropdown"
                    iosIcon={<Icon name="down" />}
                    placeholder="Approval"
                    style={{width: undefined}}
                    placeholderStyle={{color: '#bfc6ea'}}
                    placeholderIconColor="#007aff"
                    selectedValue={approval}
                    ref="approval"
                    onValueChange={approval => this.setState({approval})}>
                    <Picker.Item label="" value="" />
                    {!isEmpty(listApproval) &&
                      listApproval.map(({nmpegawai, id}, i) => (
                        <Picker.Item key={i} label={nmpegawai} value={id} />
                      ))}
                  </Picker>
                </Item>
              </Item>
              <TextError>{this.getErrorsInField('approval')}</TextError>
              <Button onPress={this.createAbsen} block style={{margin: 20}}>
                <Text>Submit</Text>
              </Button>
            </Form>
          </Content>
        </Modal>
      </>
    );
  }
}

export default CreateAbsens;

const TextError = Styled(Text)`
   color: red
   fontStyle: italic   
`;
const Loading = Styled(View)`
   position: absolute
   left: 0
   right: 0
   top: 0
   bottom: 0
   alignItems: center
   justifyContent: center  
`;
