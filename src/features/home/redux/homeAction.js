import * as constant from './homeConstant';
import {apiCall} from '../../../commons/apiCall';

export const loading = bool => {
  return {
    type: constant.HOME_LOADING,
    bool,
  };
};

export const getHome = token => async dispatch => {
  dispatch(loading(true));
  const res = await dispatch(
    apiCall({
      method: 'get',
      url: '/dashboard',
      data: {headers: {Authorization: token}},
    }),
  );
  if (res.statusCode === 200) {
    const {data} = res;
    return dispatch({
      type: constant.SET_HOME,
      data,
    });
  }
  dispatch(loading(false));
};

export const getHomeAbsen = token => async dispatch => {
  dispatch(loading(true));
  const res = await dispatch(
    apiCall({
      method: 'get',
      url: '/absen/kumulasi/telat',
      data: {headers: {Authorization: token}},
    }),
  );
  if (res.statusCode === 200) {
    const {data} = res;
    return dispatch({
      type: constant.SET_HOME_KUMULASI,
      data,
    });
  }
  dispatch(loading(false));
};
