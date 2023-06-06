import heroImg from '../../../assets/hero-morgan.jpg';
import heroImgMobile from '../../../assets/hero-img-mobile.png'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import scrollArrow from '../../../assets/work-scrollArrow.svg'
import { useEffect, useRef } from 'react';


const Hero = () => {

  const heroRef: any = useRef();

  const scrollToElement = () => {
    const heroHeight = heroRef.current.offsetHeight;
    window.scrollTo({ top: heroHeight, behavior: 'smooth' })
  }
	
  return (
    <Grid container sx={{position:"relative",display: { xs: 'none', sm: 'flex'},justifyContent:"center", }}>
      <CardMedia
        ref={heroRef}
        sx={{ maxHeight: `calc(100vh - 64px)`,}}
        component={"img"}
        image={heroImg}
      />
      <Box sx={{backgroundColor:"#000000", opacity:"0.5",borderRadius:"50%",position: 'absolute', bottom: '2rem', width:"6rem", height:"6rem", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <CardMedia image={ scrollArrow } onClick={scrollToElement} style={{width: '4rem', height: '4rem'}}
          sx={{marginTop:"0.5rem", '&:hover': { cursor: 'pointer' }}}/>
      </Box>
      
    </Grid>
  );
}

export default Hero