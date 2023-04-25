import { LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT,SET_USER } from "./authAction";

const initialState = {
  user: null,
  error: null,
  isLoggedIn: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        isLoggedIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
        isLoggedIn: false,
      };
      case LOG_OUT:
        return initialState;
      
      case SET_USER:
          return {
            ...state,
            user: action.payload,
            isLoggedIn: true,
          };
    default:
      return state;
  }
}
