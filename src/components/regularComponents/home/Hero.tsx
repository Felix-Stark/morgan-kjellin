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

	let imagePosition = {
		components: {
			MuiCardMedia: {

			}
		}
	}
	
  return (
    <Grid container style={{ minHeight: "calc(100vh - 64px)" }}>
      <CardMedia
        component={"img"}
        image={heroImg}
        sx={{
          position: "absolute",
          top: '58px',
          left: 0,
          minHeight: {xs: '80%'},
          zIndex: -1,
        }}
      />
      <Grid
        item
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Typography
          variant="h1"
          color={"#342C39"}
          sx={{ margin: { xs: "1rem", md: "3rem" }, maxWidth: {md: '60%'} }}
        >
          Möjligheten till förändring finns inom oss alla
        </Typography>

        {/* <Typography
          variant="h2"
          fontStyle={"italic"}
          color={"#342C39"}
          sx={{ margin: { xs: "1rem", md: "3rem" }, maxWidth: "50%" }}
        >
          Med 17 år av tungt missbruk bakom sig har han själv bevisat hur
          verktygen för att vända sitt liv finns inom oss.
        </Typography> */}
      </Grid>
    </Grid>
  );
}

export default Hero