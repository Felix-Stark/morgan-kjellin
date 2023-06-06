import heroImg from '../../../assets/hero-morgan.jpg';
import heroImgMobile from '../../../assets/hero-img-mobile.png'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Hero = () => {
	
  return (
    <Grid container sx={{ display: { xs: 'none', sm: 'flex'} }}>
      <CardMedia
        component={"img"}
        image={heroImg}
      />
    </Grid>
  );
}

export default Hero