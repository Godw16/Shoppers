import React from 'react'
import {AppBar,Typography,Toolbar,Tabs,Tab,useMediaQuery,useTheme} from "@mui/material"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Drawercomponent from '../pages/Drawercomponent';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);
  return (
    <div>
      <AppBar sx={{backgroundColor:"rgba(6, 116, 136, 0.986)"}}>
        <Toolbar>
        <Typography sx={{ cursor:"pointer"}}> Shoppers</Typography>
        <LocalMallIcon sx={{ cursor:"pointer"}}/>
        {
          isMatch  ? (
            <> 
        <Drawercomponent/>
            </>
            ):(
              <>
               <Tabs sx={{marginLeft:'auto', cursor:"pointer"}}  textColor='white' >
               <Tab label="Home" value="/home" to="/home" component={Link} />
               <Tab label="Product" value="/product" to="/product" component={Link} />
               <Tab icon={<ShoppingCartCheckoutIcon/>}  value="/cart" to="/cart" component={Link}/>
               <Tab icon={<AccountCircleIcon/>} value="/login" to="/login" component={Link}/>
          
        </Tabs></>

            )
        }
       
       
        </Toolbar>
      
     </AppBar>
    </div>
  )
}

export default Navbar
