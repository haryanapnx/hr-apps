import {GET_PERDIN, LOADING_PERDIN} from './perdinConstant';

const initialState = {
  listPerdin: [],
  loading: false,
};

const perdinReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERDIN:
      return {
        ...state,
        listPerdin: action.data,
      };
    case LOADING_PERDIN:
      return {
        ...state,
        loading: action.bool,
      };
    default:
      return state;
  }
};

export default perdinReducer;
