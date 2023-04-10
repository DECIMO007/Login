import React from 'react'
import Login from './Login/Login'
import Signup from './Login/Signup'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reduxsaga/authReducer';
import rootSaga from './reduxsaga/authSaga';
import { Provider } from 'react-redux';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes >
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App