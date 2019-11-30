import * as constant from './absenConstant';

const initialState = {
  listAbsen: null,
  listApproval: [],
  loading: false,
};

const absenReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_ABSEN:
      return {
        ...state,
        listAbsen: action.data,
      };
    case constant.GET_APPROVAL_KONTIGENSI:
      return {
        ...state,
        listApproval: action.data,
      };
    case constant.LOADING_ABSEN:
      return {...state, loading: action.bool};
    default:
      return state;
  }
};

export default absenReducer;
