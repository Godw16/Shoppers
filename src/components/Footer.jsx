import React from 'react'
import { Button, Container, Grid, Typography, } from '@mui/material'
import LocalMallIcon from '@mui/icons-material/LocalMall';


const Footer = () => {
  return (
    <><br /><Container maxWidth={'xl'} sx={{ margin: 0, background: "rgba(3, 79, 92, 0.986)", color: "white", }}>


      <Grid container spacing={2} sx={{ flexGrow: 1 }}>

        <Grid xs={12} sm={6} md={4} lg={3}>
          <Typography sx={{ fontWeight: "bold", paddingLeft: 5, paddingTop: 5, fontSize: 20, direction: "column", justifyContent: "center", alignItems: "center" }}>Get to Know Us</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>About Us</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Careers</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Press Releases</Typography>

        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Typography sx={{ fontWeight: "bold", paddingTop: 5, paddingLeft: 5, fontSize: 20 }}>Connect with Us</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Facebook</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Thread</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Instagram</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Youtube</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Twitter</Typography>
        </Grid>

        <Grid xs={12} sm={6} md={4} lg={3}>
          <Typography sx={{ fontWeight: "bold", paddingTop: 5, paddingLeft: 5, fontSize: 20 }}>Make Money With Us</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Sell Shoppers</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Sell under Shoppers Accelerator</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Protect and Build Your Brand</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Shoppers Global selling</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Become an Affliate</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Shoppers Pay on Merchants</Typography>
        </Grid>

        <Grid xs={12} sm={6} md={4} lg={3}>
          <Typography sx={{ fontWeight: "bold", paddingTop: 5, paddingLeft: 5, fontSize: 20 }}>Let Us Help You</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>COVID- 19 and Amazon</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Your Account</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Returns Centre</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>100% Purchase Protection</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Shoppers App Download</Typography>
          <Typography sx={{ paddingLeft: 5, fontSize: 14 }}>Help</Typography>
        </Grid>
        <Grid paddingTop={5} margin={0} xs={12} sm={12} md={12} lg={12}>

          <hr />

        </Grid>
        <Grid margin={0} paddingTop={3}  paddingLeft={"50%"}display={"flex"}>

          <Typography display={"flex"} alignItems={"center"}  >Shoppers<LocalMallIcon/></Typography>
           
        </Grid>
      </Grid>
      <Grid margin={0} paddingTop={3} xs={12} sm={12} md={12} lg={12} >
      <marquee><footer  sx={{color:'white'}}>All Rights Reserved &copy;2023 Shoppers</footer></marquee> 
      </Grid>


    </Container></>
  )
}

export default Footer
