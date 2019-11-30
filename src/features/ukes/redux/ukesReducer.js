import * as constant from './ukesConstant';

const initialState = {
  listUkes: null,
  loading: false,
};

const ukesReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_UKES:
      return {
        ...state,
        listUkes: action.data,
      };
    case constant.LOADING_UKES:
      return {...state, loading: action.bool};
    default:
      return state;
  }
};

export default ukesReducer;
