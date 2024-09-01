import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Portfolio from '../Pages/Portfolio'

const AllRoute = () => {
  return (
    <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/portfolio'element={<Portfolio/>}/>
        <Route path='/contact'element={<Contact/>}/>
    </Routes>
  )
}

export default AllRoute