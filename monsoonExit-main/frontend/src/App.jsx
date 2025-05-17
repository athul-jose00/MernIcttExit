import React from 'react'
import { Route,Routes } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './components/Home'
import Add from './components/Add'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
    </Routes>
    </>
  )
}

export default App