/* eslint-disable prettier/prettier */
import React from 'react';
import {Container, Tab, Tabs} from 'native-base';
import Kehadiran from './src/listUkes';
// import StatusAbsensi from './src/statusAbsensi';
import {connect} from 'react-redux';
import {getUkesList, createUkes} from './redux/ukesAction';
import dayjs from 'dayjs';
import Toast from 'react-native-easy-toast';

class Ukes extends React.Component {
  state = {
    tabActive: 0,
    bln: dayjs().format('MM'),
    thn: dayjs().format('YYYY'),
    limit: 100,
    page: 1,
  };

  componentDidMount() {
    this.defaultGetUkes();
  }
  // shouldComponentUpdate(_, nextState) {
  //   if (nextState.tabActive !== this.state.tabActive) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  defaultGetUkes = () => {
    const {dispatch, token} = this.props;
    const {bln, thn, limit, page} = this.state;
    dispatch(getUkesList(token, bln, thn, page, limit));
  };

  handleDate = (name, value) => {
    this.setState({[name]: value});
  };

  handleCreate = async data => {
    const {token, dispatch} = this.props;
    const res = await dispatch(createUkes(token, data));
    if (res) {
      this.refs.toast.show('Berhasil disimpan');
      this.defaultGetUkes();
      this.setState({tabActive: 0});
    }
  };

  render() {
    console.log(this.props.listUkes);
    
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
            heading="List Ukes">
            <Kehadiran
              handleDate={this.handleDate}
              listUkes={this.props.listUkes}
              defaultGetUkes={this.defaultGetUkes}
              bln={bln}
              thn={thn}
              loading={this.props.loading}
              createUkes={this.handleCreate}
            />
          </Tab>
          <Tab
            activeTabStyle={{backgroundColor: '#144b8b'}}
            tabStyle={{backgroundColor: '#144e92'}}
            heading="Input Ukes">
            {/* <StatusAbsensi /> */}
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
  const {listUkes, loading} = state.ukes;
  return {listUkes, loading, token: state.auth.token};
};
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Ukes);
