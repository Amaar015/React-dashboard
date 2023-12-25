import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton, InputBase, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { links } from '../data';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import user from '../images/user5.jpg'
import './Navbar.css'
import { styled, alpha } from '@mui/material/styles';
import { useStateContext } from '../context/ContextProvider';
import Chat from './Chat';
import Notification from './Notification';
import logo from '../images/r-logo.jpeg'
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
  
    marginLeft: 0,
    width: '100%',
    boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
    
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
const StylesIcon=styled(IconButton)({
         color:"#9274da",
         width:"2rem",
         height:"2rem"
})


const Navbar = () => {
  const {activeMenu,
         setActiveMenu, 
         isClicked,
         setIsClicked,
         handleClick, 
         screenSize,
         setScreenSize,
        }=useStateContext();

        useEffect(()=>{
          const handleResize=()=>setScreenSize(window.innerWidth);
          window.addEventListener('resize',handleResize);
          handleResize();

          return ()=> window.removeEventListener('resize', handleResize)
        },[])
        useEffect(()=>{
          if(screenSize<=900){
            setActiveMenu(false);
          }else {
            setActiveMenu(true)
          }
        },[screenSize])
  return (
    <Stack >
    <div className='Navbar'>
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
            <IconButton
                  onClick={()=>{setActiveMenu(!activeMenu)}}>
                <MenuIcon color='#473b33'/>
            </IconButton>
             <Avatar src={logo} sx={{width:"50px", height:'50px',display:screenSize<=900 ?"inline-block":"none"}}/> 
        </Stack>
        <Stack spacing={3} direction={'row'}>
                  
             <div className='navbar-icon'>
                <div className="user-detail">
                    <Avatar src={user}/>
                     <Typography variant='span' sx={{display:{xs:"none",sm:'inline-block'}}}>Abdullah</Typography>
                </div>
                <StylesIcon onClick={()=>handleClick('notification')}> 
                <NotificationsIcon sx={{fontSize:"1.8rem", width:"2rem"}}/>
                </StylesIcon>
                <StylesIcon onClick={()=>handleClick('chat')}>
                <ChatIcon sx={{fontSize:"1.8rem", width:"2rem"}}/>
                </StylesIcon>
                <StylesIcon onClick={()=>handleClick('notification')}> 
                <PersonAddAltIcon sx={{fontSize:"1.8rem", width:"2rem"}}/>
                </StylesIcon >
                <StylesIcon  onClick={()=>handleClick('chat')}>
                <LiveHelpIcon sx={{fontSize:"1.8rem", width:"2rem"}}/>
                </StylesIcon>
                     
                  </div>
                 </Stack>
                 </div>
                {isClicked.chat && <Chat/>}
                {isClicked.notification && <Notification/>}
    </Stack>
  )
}

export default Navbar
