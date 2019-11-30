/* eslint-disable no-catch-shadow */
import AsyncStorage from '@react-native-community/async-storage';
import * as constant from './constant';
import {apiCall} from '../../../commons/apiCall';

export const getToken = token => ({
  type: constant.SAVE_TOKEN,
  token,
});

export const saveToken = token => ({
  type: constant.SAVE_TOKEN,
  token,
});

export const removeToken = data => ({
  type: constant.REMOVE_TOKEN,
  data,
});

export const loading = bool => {
  return {
    type: constant.AUTH_LOADING,
    bool,
  };
};

export const error = error => ({
  type: constant.AUTH_ERROR,
  error,
});

export const loginAction = (
  username,
  password,
  fcm = null,
) => async dispatch => {
  dispatch(loading(true));
  const res = await dispatch(
    apiCall({
      method: 'post',
      url: '/auth/login',
      data: {data: {username: username, password: password, fcm}},
    }),
  );
  if (res.statusCode === 200) {
    const {data} = res;
    dispatch(saveUserToken(`Bearer ${data.token}`));
    dispatch(loading(false));
    return dispatch({
      type: constant.GET_TOKEN,
      data,
    });
  }
};

export const getUserToken = () => async dispatch => {
  dispatch(loading(true));
  await AsyncStorage.getItem('userToken')
    .then(data => {
      dispatch(loading(false));
      dispatch(getToken(data));
    })
    .catch(err => {
      dispatch(loading(false));
      dispatch(error(err.message || constant.AUTH_ERROR));
    });
};

export const saveUserToken = data => async dispatch => {
  dispatch(loading(true));
  await AsyncStorage.setItem('userToken', data)
    .then(data => {
      dispatch(loading(false));
    })
    .catch(err => {
      dispatch(loading(false));
      dispatch(error(err.message || constant.AUTH_ERROR));
    });
};

export const removeUserToken = () => async dispatch => {
  dispatch(loading(true));
  await AsyncStorage.removeItem('userToken')
    .then(data => {
      dispatch(loading(false));
      dispatch(removeToken(data));
    })
    .catch(err => {
      dispatch(loading(false));
      dispatch(error(err.message || constant.AUTH_ERROR));
    });
};
