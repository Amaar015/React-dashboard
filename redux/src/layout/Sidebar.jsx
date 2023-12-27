import React, { useState } from 'react'
import './sidebar.css'
import logo from '../images/logo.png'
import { Divider, IconButton, Stack, Typography } from '@mui/material'
import { links } from '../data'
import styled from '@emotion/styled'
import Profile from '../pages/Profile'
import Project from '../pages/Project'
import Editor from '../pages/Editor'
import Rooms from '../pages/Rooms'
import Update from '../pages/Update'
import Logout from '../pages/Logout'
import Navbar from '../component/Navbar'
import r_logo from '../images/r-logo.jpeg'
import { useSelector } from '../redux/store'

const StyleDivider =styled(Divider)({
         width:"100%",
         height:"4px",
         color:'green',
})
const Sidebar = () => {
   const [active,Setactive]=useState(1);
   const handleActive=(id)=>{
     Setactive(id);
   }
   const {sidebar}=useSelector((store)=>store.app);

  
  return (
    

<div className='main'>
   <Stack  direction={'column'}  position={{xs :'absolute', md:'relative'} }   sx={{width: {xs:'90%' ,sm:'300px'},height:"100%", zIndex:999 ,background:"#3d2b4f",
              display: sidebar.open? 'inline-block' : "none",
              // {xs:"none",  md:'inline-block'} 
              }}>
          <Stack  direction={'column'} alignItems={'center'} justifyContent={'center'} >
              <img src={logo} alt="" className='logo' />
          </Stack>
          
          <ul className='list'>
            {links.map((menu)=>(
              <li  key={menu.id} onClick={()=>{handleActive(menu.id)
              //  handleCloseSidebar()
              }}
              className={menu.id===active ? 'list-item active' : 'list-item'}
              >
                <IconButton >
                  {menu.icon}
                </IconButton>
                <Typography  className='list-text'>{menu.title}</Typography>
              </li>
            ))}
          </ul>
         <div className="card-view">
              <Stack direction={'column'} spacing={3}>
                 <div className="card-img">
                <img src={r_logo} alt="" />
                </div>
                <span>AI Assistant</span>
              </Stack>
         </div>
       
    </Stack> 
        <Stack sx={{width: "800%", height:"100%", background:"#bdbabb", padding:"1rem"}}>
         
           <Navbar active={active}/> 
       {active == '1' && <Profile/>}
       {active == '2' && <Project/>}
       {active == '3' && <Rooms/>}
       {active == '4' && <Editor/>}
       {active == '5' && <Update/>}
       {active == '6' && <Logout/>}
       </Stack>
    </div>
  )
}

export default Sidebar
