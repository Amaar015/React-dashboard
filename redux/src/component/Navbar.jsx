import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { links } from '../data';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import user from '../images/user5.jpg'
import './Navbar.css'
import { styled } from '@mui/material/styles';
import logo from '../images/r-logo.jpeg'
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { store, useDispatch, useSelector } from '../redux/store';
import { ToggleSideBar } from '../redux/slices/app';

const StylesIcon=styled(IconButton)({
         color:"#9274da",
         width:"2rem",
         height:"2rem"
})


const Navbar = () => {
  const {sidebar} =useSelector((store)=>store.app);
  // const {sidebar} =useSelector((store)=>store.app);
    console.log(sidebar.open)
    const dispatch=useDispatch();
  return (
    <Stack >
    <div className='Navbar'>
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
            <IconButton
                   onClick={()=>{dispatch(ToggleSideBar())}}
                  // onClick={()=>{setActiveMenu(!activeMenu)}}
                  >
                <MenuIcon color='#473b33'/>
            </IconButton>
             <Avatar src={logo} sx={{width:"50px", height:'50px',
             display:{sm:"inline-block",md:"none"}
             }}/> 
        </Stack>
        <Stack spacing={3} direction={'row'}>
                  
             <div className='navbar-icon'>
                <div className="user-detail">
                    <Avatar src={user}/>
                     <Typography variant='span' sx={{display:{xs:"none",sm:'inline-block'}}}>Abdullah</Typography>
                </div>
                <StylesIcon 
                onClick={()=>{}
                  // handleClick('notification')
                }
                > 
                <NotificationsIcon sx={{fontSize:"1.8rem", width:"2rem"}}/>
                </StylesIcon>
                <StylesIcon 
                onClick={()=>{}
                  // handleClick('chat')
                }
                >
                <ChatIcon sx={{fontSize:"1.8rem", width:"2rem"}}/>
                </StylesIcon>
                <StylesIcon 
                onClick={()=>{}
                  // handleClick('notification')
                }
                > 
                <PersonAddAltIcon sx={{fontSize:"1.8rem", width:"2rem"}}/>
                </StylesIcon >
                <StylesIcon 
                 onClick={()=>{}
                  // handleClick('chat')
                }
                 >
                <LiveHelpIcon sx={{fontSize:"1.8rem", width:"2rem"}}/>
                </StylesIcon>
                     
                  </div>
                 </Stack>
                 </div>
                {/* {isClicked.chat && <Chat/>} */}
                {/* {isClicked.notification && <Notification/>} */}
    </Stack>
  )
}

export default Navbar
