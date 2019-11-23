const initialState = {
  token: '',
  user: null,
  register: {
    status: false,
  },
  error: '',
  errorRegister: '',
  loading: false,
};

const Auth = (state = initialState, action) => {
  console.log(action, 'reducers');
  switch (action.type) {
    case 'USER.ADD_AUTH_TOKEN':
      return {
        ...state,
        token: action.token,
        loading: false,
      };
      break;
    case 'USER.ADD_USER':
      return {
        ...state,
        user: action.user,
        loading: false,
      };
      break;
    case 'USER.FETCH_LOGIN':
      return {
        ...state,
        loading: true,
      };
      break;
    case 'USER.REGISTER':
      return {
        ...state,
        register: {status: action.status},
        loading: false,
      };
      break;
    case 'USER.REGISTER_ERROR':
      return {
        ...state,
        errorRegister: action.error,
        loading: false,
      };
      break;
    case 'USER.LOGIN_ERROR':
      return {
        ...state,
        error: action.error,
        loading: false,
      };
      break;
    case 'USER.LOGOUT':
      return initialState;
      break;
    case 'USER.CLEAR_LOGIN':
      return initialState;
      break;
    case 'USER.CLEAR_REGISTER':
      return initialState;
      break;
    default:
      return state;
  }
};

export default Auth;
