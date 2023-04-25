import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN, loginSuccess, loginFailure, LOG_OUT, SET_USER } from './authAction';

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
    } else {
      yield put(loginFailure(response.message));
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}


function* logOut() {
  try {
    yield call(() => axios.post('http://localhost:3001/api/logout'));
    yield put({ type: LOG_OUT });
  } catch (error) {
    console.log(error);
  }
}

function* setUser() {
  try {
    const response = yield call(() =>
      axios.get('http://localhost:3001/api/checkSession')
    );
    if (response.status === 200) {
      yield put(setUser(response.data.userId));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(LOG_OUT, logOut);
  yield takeLatest(SET_USER, setUser);
}
