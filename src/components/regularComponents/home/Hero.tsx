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

	const theme = createTheme();
	const themeH2 = createTheme({
	
    typography: {
      h1: {
		marginLeft: 10,
        fontSize: "2rem",
        "@media (min-width:600px)": {
          fontSize: "3rem",
		  marginLeft: 30,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "4rem",
		  marginLeft: 50,
        },
        fontWeight: "700",
        color: "#fff",
      },
      h2: {
        marginLeft: 10,
        fontSize: "1.6rem",
        "@media (min-width:600px)": {
          fontSize: "2.3rem",
		  marginLeft: 30,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "3rem",
		  marginLeft: 50,
        },
        fontStyle: "italic",
        color: "#fff",
      },
    },
  });
	
  return (
	<Grid minWidth={'100vw'} minHeight={'100vh'} >
		<CardMedia
		component={'img'}
		image={heroImg}
		sx={{ position: 'absolute', top: 0,  left: 0, width: '100%', height: '100%', zIndex: -1, }}
		/>

		<ThemeProvider theme={themeH2}>
			<Typography variant="h1" mt={10}>
			FINN DITT RÄTTA SANNA JAG...
			</Typography>
			<Typography variant="h1" component={'h2'} >
			ÄRLIG , SANN , STARK
			</Typography>
			<Typography variant="h2" color={'#fff'} fontStyle={'italic'} mt={10}>
			Tillsammans kan vi utveckla<br/>dig till ditt fulla potential.
			</Typography>
		</ThemeProvider>

      </Grid>

  );
}

export default Hero