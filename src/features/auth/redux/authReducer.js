import * as constant from './constant';

const initialState = {
  token: null,
  loading: false,
  error: null,
  data: null,
};

const authRducers = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_TOKEN:
      return {...state, data: action.data};
    case constant.SAVE_TOKEN:
      return {...state, token: action.token};
    case constant.REMOVE_TOKEN:
      return {...state, token: null, data: null, error: null, loading: false};
    case constant.LOADING:
      return {...state, loading: action.bool};
    case constant.AUTH_ERROR:
      return {...state, error: action.error};
    default:
      return state;
  }
};

export default authRducers;
