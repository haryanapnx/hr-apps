import React from 'react';
import {Container, Tab, Tabs} from 'native-base';
import DaftarCuti from './src/daftarCuti';
import AmbilCuti from './src/ambilCuti';
import {connect} from 'react-redux';
import {getCuti, getJenisCuti, createCuti} from './redux/cutiAction';
import {getApprovalAbsen} from '../absensi/redux/absenAction';
import dayjs from 'dayjs';
import Toast from 'react-native-easy-toast';

class Cuti extends React.Component {
  state = {
    tabActive: 0,
    bln: dayjs().format('MM'),
    thn: dayjs().format('YYYY'),
    limit: 100,
    page: 1,
  };
  componentDidMount() {
    const {token, dispatch} = this.props;
    this.defaultGetCuti();
    dispatch(getJenisCuti(token));
    dispatch(getApprovalAbsen(token));
  }

  // shouldComponentUpdate(_, nextState) {
  //   if (nextState.tabActive !== this.state.tabActive) {
  //     return true;
  //   }
  // }

  defaultGetCuti = async () => {
    const {token, dispatch} = this.props;
    const {bln, thn, limit, page} = this.state;
    await dispatch(getCuti(token, bln, thn, page, limit));
  };

  handleDate = (name, value) => {
    this.setState({[name]: value});
  };

  handleCreate = async data => {
    const {token, dispatch} = this.props;
    const res = await dispatch(createCuti(token, data));
    if (res) {
      this.refs.toast.show('Berhasil disimpan');
      this.defaultGetCuti();
      this.setState({tabActive: 0});
    }
  };

  render() {
    const {bln, thn, tabActive} = this.state;

    return (
      <Container>
        <Tabs
          page={tabActive}
          initialPage={tabActive}
          onChangeTab={({i}) => this.setState({tabActive: i})}>
          <Tab
            tabStyle={{backgroundColor: '#144e92'}}
            activeTabStyle={{backgroundColor: '#144b8b'}}
            heading="Daftar Cuti">
            <DaftarCuti
              loading={this.props.loading}
              bln={bln}
              thn={thn}
              listCuti={this.props.listCuti}
              handleDate={this.handleDate}
              defaultGetCuti={this.defaultGetCuti}
            />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#144e92'}}
            activeTabStyle={{backgroundColor: '#144b8b'}}
            heading="Ambil Cuti">
            <AmbilCuti
              listApproval={this.props.listApproval}
              listJenisCuti={this.props.jenisCuti}
              handleCreateCuti={this.handleCreate}
              isLoading={this.props.loading}
            />
          </Tab>
        </Tabs>
        <Toast
          style={{backgroundColor: 'green'}}
          position="top"
          positionValue={50}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          ref="toast"
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const {loading, listCuti, jenisCuti} = state.cuti;
  return {
    listCuti,
    jenisCuti,
    loading,
    token: state.auth.token,
    listApproval: state.absenReducer.listApproval,
  };
};
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Cuti);
