import React, {useState, useEffect} from 'react';
import {Container, Picker, Item, Icon, Button, Content} from 'native-base';
import CardUkes from './cardUkes';
import {Row, Col} from '../../../components/Grid';
import {bulan, tahun} from '../../../commons/data';
import LoaderCard from '../../../components/LoaderCard';
import {isEmpty} from '../../../commons/helper';

const Kehadiran = ({
  handleDate,
  listUkes,
  defaultGetUkes,
  bln,
  thn,
  loading,
  createUkes,
}) => {
  const [visible, setVisible] = useState(false);
  const [detailAbsen, setDetail] = useState([]);
  const [kontigensi, setKontigensi] = useState('');
  const [modalKontigensi, setModalKontigensi] = useState(false);
  const handleCreate = (item = []) => {
    setDetail(item);
    setModalKontigensi(!modalKontigensi);
  };
  const handleDetail = (item = []) => {
    setDetail(item);
    setVisible(!visible);
  };
  useEffect(() => {
    setModalKontigensi(false);
    setVisible(false);
  }, []);

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
          <Button onPress={defaultGetUkes} transparent iconLeft>
            <Icon name="ios-search" />
          </Button>
        </Col>
      </Row>
      <Content>
        {loading ? (
          <LoaderCard count={3} />
        ) : (
          !isEmpty(listUkes) && (
            <CardUkes
              listUkes={listUkes}
              handleCreate={handleCreate}
              handleDetail={handleDetail}
              detailAbsen={detailAbsen}
              visible={visible}
            />
          )
        )}
      </Content>
      {/* <CreateKontigensi
        visible={modalKontigensi}
        setModalKontigensi={setModalKontigensi}
        listApproval={listApproval}
        data={detailAbsen[0]}
        handleCreate={handleCreate}
        createKontigensi={createKontigensi}
        isLoading={loading}
      /> */}
    </Container>
  );
};

export default Kehadiran;
