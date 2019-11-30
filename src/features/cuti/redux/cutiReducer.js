import {GET_CUTI, LOADING_CUTI, GET_JENIS_CUTI} from './cutiConstant';

const initialState = {
  listCuti: [],
  jenisCuti: [],
  loading: false,
};

const cutiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUTI:
      return {
        ...state,
        listCuti: action.data,
      };
    case GET_JENIS_CUTI:
      return {
        ...state,
        jenisCuti: action.data,
      };
    case LOADING_CUTI:
      return {
        ...state,
        loading: action.bool,
      };
    default:
      return state;
  }
};

export default cutiReducer;
