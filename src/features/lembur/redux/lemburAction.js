import * as constant from './lemburConstant';
import {apiCall} from '../../../commons/apiCall';

export const setLoading = bool => ({
  type: constant.LOADING_LEMBUR,
  bool,
});

export const getLembur = (
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
      url: '/lembur',
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
      type: constant.GET_LEMBUR,
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
