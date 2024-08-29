import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home'
import Roompage from '../components/room'



const routes = () => {
  return(
      <Routes>
         <Route path='/'  element={<Home/>}  ></Route>
         <Route path='/room/:roomCode'  element={<Roompage/>}></Route>
      </Routes>
  )
}

export default routes