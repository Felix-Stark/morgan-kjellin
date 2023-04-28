import React from "react";
import Hero from "../../components/regularComponents/home/Hero";
import FirstBlock from "../../components/regularComponents/home/FirstBlock";
import { createTheme, ThemeProvider } from "@mui/material/styles";


export const Home = () => {
	let breakTheme = createTheme();
	let theme = createTheme({
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
	  },
	  subtitle1: {
		fontWeight: 600,
		fontSize: '1.2rem'
	  }
    },
    components: {
      MuiGrid: {
        styleOverrides: {
          item: {
            paddingLeft: "5rem",
            [breakTheme.breakpoints.down("sm")]: {
              paddingLeft: "0rem",
            },
			[breakTheme.breakpoints.up("md")]: {
				flexDirection: 'column',
			}
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
		<Hero />
		<FirstBlock />
    </ThemeProvider>
  )
};
