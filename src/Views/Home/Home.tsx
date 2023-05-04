import React, { Children } from "react";
import Hero from "../../components/regularComponents/home/Hero";
import FirstBlock from "../../components/regularComponents/home/FirstBlock";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from '@mui/material/Grid'
import SecondBlock from "../../components/regularComponents/home/SecondBlock";
import ThirdBlock from "../../components/regularComponents/home/ThirdBlock";
import FourthBlock from "../../components/regularComponents/home/FourthBlock";

export const Home = () => {
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
		margin: '1.5rem 1rem 3rem 1rem',
		[breakTheme.breakpoints.up('md')]: {
			lineHeight: '3rem',
		}
      },
    },
    components: {
      
    },
  });
  return (
    <ThemeProvider theme={theme}>
		<Grid rowGap={'4rem'} style={{ background: 'background.default' }} display={'flex'} flexDirection={'column'}>
			<Hero />
			<FirstBlock />
			<SecondBlock />
			<ThirdBlock />
			<FourthBlock />
		</Grid>
    </ThemeProvider>
  )
};
