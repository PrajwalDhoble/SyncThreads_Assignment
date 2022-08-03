import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../login'
import Cards from '../cards'
import Nagpur from '../nagpur'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/Home' element={<Cards/>} />
            <Route exact path='/nagpur' element={<Nagpur></Nagpur>}></Route>


            
        </Routes>
    
    </>
  )
  }

export default AllRoutes