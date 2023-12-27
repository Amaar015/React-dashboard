import { faker } from "@faker-js/faker";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Chat, Code, Folder } from "phosphor-react";
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
export const links = [
    { id: 1, title: 'Profile',icon:<AccountCircleIcon sx={{ color:"white"}}/> },
    { id: 2, title: 'Projects', icon:<Folder color="white"/> },
    { id: 3, title: 'Rooms', icon:<Chat color="white"/> },
    { id: 4, title: 'Edittor', icon:<Code color="white"/> },
    { id: 5, title: 'Update', icon:<EditIcon sx={{ color:"white"}}/> },
    { id: 6, title: 'Logout', icon:<LogoutIcon sx={{ color:"white"}}/> },
];
