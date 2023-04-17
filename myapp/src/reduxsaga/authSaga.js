import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN, loginSuccess, loginFailure, LOGGED_IN, LOG_OUT } from './authAction';

function loginApi(username, password) {
  return axios.post('http://localhost:3001/api/login', { username, password })
    .then((response) =>
     response.data)
    .catch((error) => { throw error; });
}

function* login(action) {
  const { username, password } = action.payload;
 
  try {
    const response = yield call(loginApi, username, password);
    if (response.status === true) {
      yield put(loginSuccess(response.data));
      console.log('logged')
    } else {
      yield put(loginFailure(response.message));
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* loggedIn() {
  yield put({ type: LOGGED_IN });
}


function* logOut() {
  try {
    yield call(() => axios.post('http://localhost:3001/api/logout'));
    yield put({ type: LOG_OUT });
  } catch (error) {
    console.log(error);
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(LOGGED_IN, loggedIn);
  yield takeLatest(LOG_OUT, logOut);
}
