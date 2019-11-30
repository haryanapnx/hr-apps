/* eslint-disable prettier/prettier */
import React from 'react';
import {Container, Tab, Tabs} from 'native-base';
import Kehadiran from './src/kehadiran';
import StatusAbsensi from './src/statusAbsensi';
import {connect} from 'react-redux';
import {
  getAbsenList,
  getApprovalAbsen,
  createKontigensi,
} from './redux/absenAction';
import dayjs from 'dayjs';
import Toast from 'react-native-easy-toast';

class Absensi extends React.Component {
  state = {
    tabActive: 0,
    bln: dayjs().format('MM'),
    thn: dayjs().format('YYYY'),
    limit: 100,
    page: 1,
    listKehadiran: [],
  };
  UNSAFE_componentWillReceiveProps(newProps) {
    this.defaultState(newProps);
  }
  defaultState = props => {
    this.setState({listKehadiran: props.listAbsen});
  };
  UNSAFE_componentWillMount() {
    this.defaultState(this.props);
  }
  componentDidMount() {
    this.defaultGetAbsen();
    this.props.dispatch(getApprovalAbsen(this.props.token));
  }
  // shouldComponentUpdate(_, nextState) {
  //   if (nextState.tabActive !== this.state.tabActive) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  defaultGetAbsen = () => {
    const {dispatch, token} = this.props;
    const {bln, thn, limit, page} = this.state;
    dispatch(getAbsenList(token, bln, thn, page, limit));
  };

  handleDate = (name, value) => {
    this.setState({[name]: value});
  };

  handleCreate = async data => {
    const {token, dispatch} = this.props;
    const res = await dispatch(createKontigensi(token, data));
    if (res) {
      this.refs.toast.show('Berhasil disimpan');
      this.defaultGetAbsen();
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
            heading="Catatan Kehadiran">
            <Kehadiran
              handleDate={this.handleDate}
              listAbsen={this.state.listKehadiran}
              defaultGetAbsen={this.defaultGetAbsen}
              bln={bln}
              thn={thn}
              listApproval={this.props.listApproval}
              loading={this.props.loading}
              createKontigensi={this.handleCreate}
            />
          </Tab>
          <Tab
            activeTabStyle={{backgroundColor: '#144b8b'}}
            tabStyle={{backgroundColor: '#144e92'}}
            heading="Status Absensi">
            <StatusAbsensi />
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
  const {listAbsen, loading, listApproval} = state.absenReducer;
  return {listAbsen, loading, listApproval, token: state.auth.token};
};
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Absensi);
