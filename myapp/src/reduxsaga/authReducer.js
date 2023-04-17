import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGGED_IN, LOG_OUT } from "./authAction";

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
      case LOGGED_IN:
        return {
          ...state,
          isLoggedIn: true
        };
      case LOG_OUT:
        return {
          ...state,
          isLoggedIn: false
        };

    default:
      return state;
  }
}
