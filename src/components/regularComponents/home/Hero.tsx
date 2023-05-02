import heroImg from '../../../assets/hero-img.png';
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

	<Grid style={{minHeight: 'calc(100vh - 64px)'}}>
		<CardMedia
		component={'img'}
		image={heroImg}
		sx={{ position: 'absolute', top: 0,  left: 0, width: '100%', height: '100%', zIndex: -1, }}
		/>

			<Typography variant="h1">
			FINN DITT RÄTTA SANNA JAG...
			</Typography>
			<Typography variant="h1" component={'h2'} >
			ÄRLIG , SANN , STARK
			</Typography>
			<Typography variant="h2" color={'#fff'} fontStyle={'italic'} mt={10}>
			Tillsammans kan vi utveckla<br/>dig till ditt fulla potential.
			</Typography>

      </Grid>


  );
}

export default Hero