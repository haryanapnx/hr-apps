import {GET_UKES, LOADING_UKES} from './ukesConstant';
import {apiCall} from '../../../commons/apiCall';

export const setLoading = bool => ({
  type: LOADING_UKES,
  bool,
});

export const getUkesList = (
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
      url: '/ukes',
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
      type: GET_UKES,
      data,
    });
  } else {
    dispatch(setLoading(false));
  }
};

export const createUkes = (token, data) => async dispatch => {
  dispatch(setLoading(true));
  const res = await dispatch(
    apiCall({
      method: 'post',
      url: '/ukes',
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
