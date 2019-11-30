import React from 'react';
import dayjs from 'dayjs';
import DateRange from '../../../components/DateRange';
import Styled from 'styled-components';
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
import ValidationComponent from '../../../components/validation/form';
import {Icon} from '@ant-design/react-native';
import {isEmpty} from '../../../commons/helper';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const bekal = [
  {label: 'Ya', value: true},
  {label: 'Tidak', value: false},
];
const jatah = [
  {label: 'Tahun ini', value: 0},
  {label: 'Tahun lalu', value: 1},
  {label: 'Tahun Depan', value: 2},
];
class AmbilCuti extends ValidationComponent {
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

  resetState = () => {
    this.setState({
      isBekal: '',
      startDate: '',
      endDate: '',
      isJatah: '',
      alasan: '',
      rekomen: '',
      diputuskan: '',
      jenisCuti: '',
    });
  };

  handleDate = (startDate, endDate) => {
    this.setState({startDate, endDate});
  };

  isRequired = () => {
    return this.validate({
      endDate: {required: true},
      isBekal: {required: true},
      isJatah: {required: true},
      rekomen: {required: true},
      diputuskan: {required: true},
      jenisCuti: {required: true},
    });
  };

  handleCreate = async () => {
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
    this.isRequired();
    if (this.isFormValid()) {
      await this.props.handleCreateCuti({
        jenis_cuti_id: jenisCuti,
        tgl_mulai: dayjs(startDate).format('YYYY-MM-DD'),
        tgl_selesai: dayjs(endDate).format('YYYY-MM-DD'),
        user_id_rekomendasi: rekomen,
        user_id_approval: diputuskan,
        tgl_pengajuan: dayjs().format('YYYY-MM-DD'),
        note_alasan: alasan,
        jatah_cuti: isJatah,
        bekal_cuti: isBekal,
      });
      this.resetState();
    }
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
    const {listJenisCuti, listApproval, isLoading} = this.props;
    return (
      <>
        {isLoading && (
          <Loading>
            <ActivityIndicator size="large" />
          </Loading>
        )}
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
                    ref="jenisCuti"
                    style={{width: undefined}}
                    placeholderStyle={{color: '#bfc6ea'}}
                    placeholderIconColor="#007aff"
                    selectedValue={jenisCuti}
                    onValueChange={jenisCuti => this.setState({jenisCuti})}>
                    <Picker.Item label="" value="" />
                    {!isEmpty(listJenisCuti) &&
                      listJenisCuti.map(({id, nama}) => (
                        <Picker.Item key={id} label={nama} value={id} />
                      ))}
                  </Picker>
                </Item>
              </Item>
              <TextError>{this.getErrorsInField('jenisCuti')}</TextError>
              <Item style={{alignItems: 'flex-start'}} stackedLabel>
                <Label>Jatah Tahun</Label>
                <RadioForm
                  radio_props={jatah}
                  ref="isJatah"
                  initial={isJatah}
                  formHorizontal={true}
                  buttonSize={8}
                  radioStyle={styles.radioStyle}
                  onPress={value => {
                    this.setState({isJatah: value});
                  }}
                />
              </Item>
              <TextError>{this.getErrorsInField('isJatah')}</TextError>
              <Item stackedLabel>
                <Label>Mulai tanggal</Label>
                <DateRange
                  ref="endDate"
                  initialRange={[startDate, endDate]}
                  onSuccess={(s, e) => this.handleDate(s, e)}
                  theme={{markColor: 'teal', markTextColor: 'white'}}
                />
              </Item>
              <TextError>{this.getErrorsInField('endDate')}</TextError>
              <Item stackedLabel>
                <Label>Alasan</Label>
                <Input
                  ref="alasan"
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
                    placeholder="Rekomendasi"
                    ref="rekomen"
                    style={{width: undefined}}
                    placeholderStyle={{color: '#bfc6ea'}}
                    placeholderIconColor="#007aff"
                    selectedValue={rekomen}
                    onValueChange={rekomen => this.setState({rekomen})}>
                    <Picker.Item label="" value="" />
                    {!isEmpty(listApproval) &&
                      listApproval.map(({id, nmpegawai}) => (
                        <Picker.Item key={id} label={nmpegawai} value={id} />
                      ))}
                  </Picker>
                </Item>
              </Item>
              <TextError>{this.getErrorsInField('rekomen')}</TextError>
              <Item stackedLabel>
                <Label>Diputuskan</Label>
                <Item picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    placeholder="Diputuskan"
                    ref="diputuskan"
                    style={{width: undefined}}
                    placeholderStyle={{color: '#bfc6ea'}}
                    placeholderIconColor="#007aff"
                    selectedValue={diputuskan}
                    onValueChange={diputuskan => this.setState({diputuskan})}>
                    <Picker.Item label="" value="" />
                    {!isEmpty(listApproval) &&
                      listApproval.map(({id, nmpegawai}) => (
                        <Picker.Item key={id} label={nmpegawai} value={id} />
                      ))}
                  </Picker>
                </Item>
              </Item>
              <TextError>{this.getErrorsInField('diputuskan')}</TextError>
              <Item style={{alignItems: 'flex-start'}} stackedLabel>
                <Label>Ambil Bekal Cuti</Label>
                <RadioForm
                  radio_props={bekal}
                  ref="isBekal"
                  initial={isBekal}
                  formHorizontal={true}
                  buttonSize={8}
                  radioStyle={styles.radioStyle}
                  onPress={value => {
                    this.setState({isBekal: value});
                  }}
                />
              </Item>
              <TextError>{this.getErrorsInField('isBekal')}</TextError>
              <Button onPress={this.handleCreate} block style={{margin: 20}}>
                <Text>Submit</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      </>
    );
  }
}

export default AmbilCuti;

const styles = StyleSheet.create({
  radioStyle: {paddingRight: 30, marginTop: 20, marginBottom: 10},
});

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
