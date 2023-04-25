export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOG_OUT = 'LOG_OUT';
export const SET_USER = 'SET_USER';

export const login = (username, password) => ({
  type: LOGIN,
  payload: { username, password },
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOG_OUT,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});