import React from 'react';
import {connect} from 'react-redux';
import {getUserToken} from './redux/action';
import Loader from '../../components/Loader';

class Login extends React.Component {
  //   static navigationOptions = {
  //     header: null,
  //   };

  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = () => {
    this.props
      .getUserToken()
      .then(() => {
        this.props.navigation.navigate(
          this.props.token !== null ? 'App' : 'Auth',
        );
      })
      .catch(error => {
        this.setState({error});
      });
  };

  // Render any loading content that you like here
  render() {
    return <Loader />;
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  getUserToken: () => dispatch(getUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
