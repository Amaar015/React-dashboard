import React, { useState } from 'react'
import Right from './Right'
import Sidebar from './Sidebar'
import './sidebar.css'
const Dashboard = () => {
     const [data,setData] =useState('1')
     console.log(data);
  return (
    <div className='main'>
    <Sidebar />
    <Right/>
    </div>
  )
}

export default Dashboard
