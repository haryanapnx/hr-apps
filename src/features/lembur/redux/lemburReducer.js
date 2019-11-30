import * as constant from './lemburConstant';

const initialState = {
  listLembur: [],
  loading: false,
};

const lemburReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_LEMBUR:
      return {
        ...state,
        listLembur: action.data,
      };
    case constant.LOADING_LEMBUR:
      return {
        ...state,
        loading: action.bool,
      };
    default:
      return state;
  }
};

export default lemburReducer;
