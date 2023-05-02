import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import crossRoadsImg from '../../../assets/home-crossroads.png'




const FirstBlock = () => {


  return (
    <Grid container minHeight={"100vh"} justifyContent={"center"} style={{ overflow: 'hidden'}} spacing={8} >
      <Grid item  md={5} sx={{ position: 'relative' }}>
        <CardMedia component={"img"} image={crossRoadsImg} style={{ marginTop: '-2rem'}} />
      </Grid>
      <Grid item md={5} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box height={'50%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} padding={'1rem'}>
			<Typography variant='h3'>
				Världen är vid en Vändpunkt
			</Typography>
			<Typography variant='subtitle1'>
				Vi ser oftare och oftare att saker vi gjort tidigare inte fungerat.
				Om världen ska ändra får du sluta agera som du inte är av betydelse...
			</Typography>
		</Box>
      </Grid>
    </Grid>
  );
}

export default FirstBlock