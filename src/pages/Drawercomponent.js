import React, { useState } from 'react'
import { Drawer, IconButton, List,  ListItemButton, ListItemText} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Drawercomponent = () => {
  const [openDrawer,setOpenDrawer] = useState(false);
  return (
    <div>
      <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)} >
        <List>
          <ListItemButton LinkComponent={"a"} href='/home'>
            <ListItemText >Home</ListItemText>
          </ListItemButton>
          <ListItemButton LinkComponent={"a"} href='/product'>
            <ListItemText>Product</ListItemText>
          </ListItemButton>
          <ListItemButton LinkComponent={"a"} href='/cart'>
            <ListItemText>Cart</ListItemText>
          </ListItemButton>
          <ListItemButton LinkComponent={"a"} href='/login'>
            <ListItemText>Login</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      
      <IconButton  onClick={()=> setOpenDrawer(!openDrawer)} sx={{marginLeft:"auto", color:"white"}}  >
  <MenuIcon/>
      </IconButton>
      
    </div>
  )
}
export default Drawercomponent
