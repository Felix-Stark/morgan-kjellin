import React, { Children } from "react";
import Hero from "../../components/regularComponents/home/Hero";
import FirstBlock from "../../components/regularComponents/home/FirstBlock";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from '@mui/material/Grid'
import SecondBlock from "../../components/regularComponents/home/SecondBlock";
import ThirdBlock from "../../components/regularComponents/home/ThirdBlock";
import FourthBlock from "../../components/regularComponents/home/FourthBlock";
import { Button, CardMedia } from "@mui/material";
import scrollArrow from '../../assets/work-scrollArrow.svg';

type Props = {
  firebaseArray: any;
}




export const Home = ({firebaseArray}: Props) => {

  const scrollToTop = () => {
    if (window.scrollY > 100) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

	let breakTheme = createTheme();
	let theme = createTheme({
    palette: {
      background: {
        default: '#F6F6F6',
        paper: "#342C39",
      },
    },
    typography: {
      h1: {
        fontSize: "2rem",
        "@media (min-width:600px)": {
          fontSize: "3rem",
        },
        [breakTheme.breakpoints.up("md")]: {
          fontSize: "4rem",
        },
        fontWeight: "700",
        color: "#fff",
      },
      h2: {
        fontSize: "1.6rem",
        "@media (min-width:600px)": {
          fontSize: "2.3rem",
        },
        [breakTheme.breakpoints.up("md")]: {
          fontSize: "3rem",
        },
        fontStyle: "italic",
        color: "#fff",
      },
      h3: {
        fontWeight: 700,
		margin: '0rem 1rem'
      },
      subtitle1: {
        fontWeight: 600,
        fontSize: "1.2rem",
		margin: '1.5rem 1rem 3rem 1rem'
      },
    },
    components: {
      
    },
  });
  return (
    <ThemeProvider theme={theme}>
		<Grid rowGap={'4rem'} style={{ background: 'background.default' }} display={'flex'} flexDirection={'column'}>
			<Button variant="contained" onClick={ scrollToTop } 
           sx={{ zIndex: '1', width: {xs: '4rem', sm: '4rem', md: '5rem'}, height: {xs: '4rem', sm: '4rem', md: '5rem'}, borderRadius: '50%', backgroundColor: '#BA1D37', position: 'fixed',
           margin: '5rem', bottom: '-2rem', right: '-2rem', '&:hover': {backgroundColor: '#BA1D60'} }}>

            <CardMedia image={ scrollArrow } style={{ position: 'absolute', transform: 'rotate(180deg)' }}
             sx={{ top: { xs: 'calc(25% - 2px)', sm: 'calc(25% - 2px)', md: 'calc(25% - 2.5px)'}, left: { xs: 'calc(25% - 2px)', sm: 'calc(25% - .5px)', md: 'calc(25%)'},
            width: {xs: '2rem', sm: '2rem', md: '2.5rem'}, height: {xs: '2rem', sm: '2rem', md: '2.5rem'} } } >
            </CardMedia>

          </Button>
      <Hero />
			<FirstBlock firebaseArray={firebaseArray}/>
			<SecondBlock firebaseArray={firebaseArray}/>
			<ThirdBlock />
			<FourthBlock firebaseArray={firebaseArray}/>
		</Grid>
    </ThemeProvider>
  )
};
