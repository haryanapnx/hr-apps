import {GET_PERDIN, LOADING_PERDIN} from './perdinConstant';
import {apiCall} from '../../../commons/apiCall';

export const setLoading = bool => ({
  type: LOADING_PERDIN,
  bool,
});

export const getPerdin = (
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
      url: '/perdin',
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
      type: GET_PERDIN,
      data,
    });
  } else {
    dispatch(setLoading(false));
  }
};
