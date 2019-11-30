import {GET_CUTI, LOADING_CUTI, GET_JENIS_CUTI} from './cutiConstant';
import {apiCall} from '../../../commons/apiCall';

export const setLoading = bool => ({
  type: LOADING_CUTI,
  bool,
});

export const getCuti = (
  token,
  bln = '',
  thn = '',
  page = 1,
  limit = 100,
) => async dispatch => {
  dispatch(setLoading(true));
  const res = await dispatch(
    apiCall({
      method: 'GET',
      url: '/cuti',
      data: {
        params: {bln, thn, page, limit},
        headers: {Authorization: token},
      },
    }),
  );
  if (res.statusCode === 200) {
    dispatch(setLoading(false));
    const {data} = res.data;
    return dispatch({
      type: GET_CUTI,
      data,
    });
  } else {
    dispatch(setLoading(false));
  }
};

export const createCuti = (token, data) => async dispatch => {
  dispatch(setLoading(true));
  const res = await dispatch(
    apiCall({
      method: 'post',
      url: '/cuti',
      data: {
        data,
        headers: {Authorization: token},
      },
    }),
  );
  if (res.statusCode === 201) {
    dispatch(setLoading(false));
  } else {
    dispatch(setLoading(false));
  }
  return res;
};

export const getJenisCuti = token => async dispatch => {
  dispatch(setLoading(true));
  const res = await dispatch(
    apiCall({
      method: 'GET',
      url: '/cuti/jenis',
      data: {
        headers: {Authorization: token},
      },
    }),
  );
  if (res.statusCode === 200) {
    dispatch(setLoading(false));
    const {data} = res;
    return dispatch({
      type: GET_JENIS_CUTI,
      data,
    });
  } else {
    dispatch(setLoading(false));
  }
};
