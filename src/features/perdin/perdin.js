import React from 'react';
import {Container, Tab, Tabs} from 'native-base';
import DaftarPerdin from './src/daftarPerdin';
import AmbilPerdin from './src/ambilPerdin';
import {connect} from 'react-redux';
import {getPerdin} from './redux/perdinAction';
import dayjs from 'dayjs';
import Toast from 'react-native-easy-toast';

class Perdin extends React.PureComponent {
  state = {
    tabActive: 1,
    bln: dayjs().format('MM'),
    thn: dayjs().format('YYYY'),
    limit: 100,
    page: 1,
  };
  componentDidMount() {
    this.defaultGetPerdin();
  }

  defaultGetPerdin = () => {
    const {dispatch, token} = this.props;
    const {bln, thn, limit, page} = this.state;
    dispatch(getPerdin(token, bln, thn, page, limit));
  };

  handleDate = (name, value) => {
    this.setState({[name]: value});
  };

  render() {
    const {loading, listPerdin} = this.props;
    const {bln, thn} = this.state;
    console.log({listPerdin});

    return (
      <Container>
        <Tabs>
          <Tab
            tabStyle={{backgroundColor: '#144e92'}}
            activeTabStyle={{backgroundColor: '#144b8b'}}
            heading="Daftar Perdin">
            <DaftarPerdin
              bln={bln}
              thn={thn}
              loading={loading}
              handleDate={this.handleDate}
              listPerdin={listPerdin}
              defaultGetPerdin={this.defaultGetPerdin}
            />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#144e92'}}
            activeTabStyle={{backgroundColor: '#144b8b'}}
            heading="Perdin">
            <AmbilPerdin />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  const {loading, listPerdin} = state.perdin;
  return {loading, listPerdin, token: state.auth.token};
};
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Perdin);
