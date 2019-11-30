import * as constant from './homeConstant';

const initialState = {
  absen: null,
  loading: false,
  kumulasi_absen: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.SET_HOME:
      return {
        ...state,
        absen: action.data.absen,
      };
    case constant.SET_HOME_KUMULASI:
      return {
        ...state,
        kumulasi_absen: action.data,
      };
    case constant.HOME_LOADING:
      return {...state, loading: action.bool};
    default:
      return state;
  }
};

export default homeReducer;
