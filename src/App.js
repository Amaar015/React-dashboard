import React from 'react'
import Dashboard from './layout'
import { Switch, Route, Link, Routes } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
const App = () => {
  return (
  <Routes>
  <Route path="/" 
    element={ <Sidebar />}
    />
   </Routes>
  )
}

export default App
