import {
  GET_ABSEN,
  LOADING_ABSEN,
  GET_APPROVAL_KONTIGENSI,
} from './absenConstant';
import {apiCall} from '../../../commons/apiCall';

export const setLoading = bool => ({
  type: LOADING_ABSEN,
  bool,
});

export const getAbsenList = (
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
      url: '/absen',
      data: {
        params: {bln, thn, page, limit},
        headers: {Authorization: token},
      },
    }),
  );
  if (res.statusCode === 200) {
    const {data} = res;
    dispatch(setLoading(false));
    return dispatch({
      type: GET_ABSEN,
      data: data.data,
    });
  }
  dispatch(setLoading(false));
};

export const getApprovalAbsen = token => async dispatch => {
  const res = await dispatch(
    apiCall({
      method: 'GET',
      url: '/absen/approval/list-usr-kontigensi',
      data: {
        headers: {Authorization: token},
      },
    }),
  );
  if (res.statusCode === 200) {
    const {data} = res;
    return dispatch({
      type: GET_APPROVAL_KONTIGENSI,
      data,
    });
  }
};

export const createKontigensi = (token, data) => async dispatch => {
  dispatch(setLoading(true));
  const res = await dispatch(
    apiCall({
      method: 'post',
      url: '/absen/kontigensi',
      data: {
        data,
        headers: {Authorization: token},
      },
    }),
  );
  if (res.statusCode === 201) {
    dispatch(setLoading(false));
  }
  dispatch(setLoading(false));
};
