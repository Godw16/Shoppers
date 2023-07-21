
import { useEffect, useState } from "react";
import React from "react";
import { Container, Grid, } from "@mui/material";
import Card from "../components/pcard"

// cart,setCart
export default function Product(cart,setCart) {
  // const [cart , setCart] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(cart);
  return (
    <><br />
    <Container sx={{ display: "flex", justifyContent: "space-between" }}>
      <Grid container>
        {data.map((item, index) => (
          <Grid item key={index} xs={6} md={3}>
            
            <Card item={item} cart={cart} setCart={setCart}  />
          
          </Grid>
        ))}
      </Grid>
    </Container></>
    
  );
}
    

