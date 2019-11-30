import React from 'react';
import {Container, Tab, Tabs} from 'native-base';
import ActivitasLembur from './src/activitasLembur';
import FormLembur from './src/formLembur';
import {connect} from 'react-redux';
import {getLembur} from './redux/lemburAction';
import dayjs from 'dayjs';
import Toast from 'react-native-easy-toast';

class Lembur extends React.PureComponent {
  state = {
    tabActive: 1,
    bln: dayjs().format('MM'),
    thn: dayjs().format('YYYY'),
    limit: 100,
    page: 1,
  };
  componentDidMount() {
    this.defaultGetLembur();
  }
  defaultGetLembur = () => {
    const {dispatch, token} = this.props;
    const {bln, thn, limit, page} = this.state;
    dispatch(getLembur(token, bln, thn, page, limit));
  };

  handleDate = (name, value) => {
    this.setState({[name]: value});
  };

  render() {
    const {loading, listLembur} = this.props;
    const {bln, thn} = this.state;

    return (
      <Container>
        <Tabs>
          <Tab
            tabStyle={{backgroundColor: '#144e92'}}
            activeTabStyle={{backgroundColor: '#144b8b'}}
            heading="Aktifitas Lembur">
            <ActivitasLembur
              bln={bln}
              thn={thn}
              loading={this.props.loading}
              handleDate={this.handleDate}
              listLembur={this.props.listLembur}
              defaultGetLembur={this.defaultGetLembur}
            />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#144e92'}}
            activeTabStyle={{backgroundColor: '#144b8b'}}
            heading="Lembur">
            <FormLembur />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  const {loading, listLembur} = state.lembur;
  return {loading, listLembur, token: state.auth.token};
};
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Lembur);
