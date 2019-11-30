import React from 'react';
import {Button, StyleSheet, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {saveUserToken} from './redux/action';

class SignInScreen extends React.Component {
  //   static navigationOptions = {
  //     title: 'Please sign in',
  //   };
  _signInAsync = async () => {
    await this.props
      .saveUserToken()
      .then(() => {
        this.props.navigation.navigate('App');
      })
      .catch(error => {
        this.setState({error});
      });
  };

  render() {
    if (this.props.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  token: state.auth.token,
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => ({
  saveUserToken: () => dispatch(saveUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
