import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import SignIn from './components/SignIn'
// import {BrowserRouter, Routes , Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/products' element={<Header/>}/>
      <Route path='/contact' element={<Footer/>}/>
      </Routes></BrowserRouter>
    </div>
  )
}

export default App
