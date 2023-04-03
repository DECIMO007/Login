import React from 'react'
import Login from './Login/Login'
import Signup from './Login/Signup'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes >
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App