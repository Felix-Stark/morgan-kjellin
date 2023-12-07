import heroImg from '../../../assets/hero-morgan.jpg';
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import scrollArrow from '../../../assets/work-scrollArrow.svg'
import { useRef } from 'react';


const Hero = () => {

  const heroRef: any = useRef();

  const scrollToElement = () => {
    const heroHeight = heroRef.current.offsetHeight;
    window.scrollTo({ top: heroHeight, behavior: 'smooth' })
  }
	
  return (
    <Grid container sx={{position:"relative",display: {  sm: 'flex'},justifyContent:"center", }}>
      <CardMedia
        ref={heroRef}
        sx={{ maxHeight: `calc(100vh - 64px)`,}}
        component={"img"}
        alt = "Morgan Kjellin Föreläsningar"
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