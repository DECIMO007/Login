import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN, loginSuccess, loginFailure } from './authAction';

function loginApi(username, password) {
  return axios.post('http://localhost:3001/api/login', { username, password })
    .then((response) =>
     response.data)
    .catch((error) => { throw error; });
}

function* login(action) {
  console.log('testlogin')
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

export default function* authSaga() {
  yield takeLatest(LOGIN, login);
}
