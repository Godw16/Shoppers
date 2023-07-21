import { CardMedia, Card, CardActions, Button, Typography } from '@mui/material'
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import React from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

export default function pcard({item,cart,setCart}) {
  
  return (
    <div>
      <br/><br/>
      <br/>
      <Card >
        <CardMedia> <img src={item.thumbnail} alt=""  height={180} /></CardMedia>
        <Typography>{item.title}</Typography>
        <Typography display={'flex'} alignItems={'center'} textAlign={'center'} ><AttachMoneyRoundedIcon style={{fontSize:'21px'}}></AttachMoneyRoundedIcon>{item.price}</Typography>
        <Typography display={'flex'} alignItems={'center'} textAlign={'center'}><StarRateRoundedIcon style={{fontSize:'21px'}}/>{item.rating}</Typography>
      <CardActions>
        {cart.includes(item) ? (
          <Button size="small" onClick={()=>{
            setCart(cart.filter(c=>c.id!==item.id));
          }
          
          } >Remove from Cart</Button>

        ) : (
          <Button size="small" onClick={()=>{
            setCart([...cart,item]);
          }
          
          } >Add to Cart</Button>

        )}
        
           
        
        <Button size="small">View More</Button>
      </CardActions>
      </Card>
      
    </div>
  )
}
