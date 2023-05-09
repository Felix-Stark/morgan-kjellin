import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import portrait from '../../../assets/home-block2.png'


const SecondBlock = () => {
	const theme = useTheme();
  return (
    <Grid
      container
      minHeight={"100vh"}
      bgcolor={"background.paper"}
      justifyContent={"center"}
      spacing={8}

      display={"flex"}
    >
      <Grid
        item
        md={5}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          height={"50%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          padding={"1rem"}
        >
          <Typography color={"#fff"} variant="h3">
            Vill du ta kontroll över ditt liv och uppnå dina mål?
          </Typography>
          <Typography color={"#fff"} variant="subtitle1">
            Självförbättring och personlig utveckling är en ständigt pågående
            process som kräver engagemang och medvetenhet från oss själva.
            Oavsett vilka beroenden eller negativa vanor vi vill bryta, kan det
            vara svårt att ta itu med dem utan att först lära oss mer om oss
            själva.
          </Typography>
        </Box>
      </Grid>
      <Grid item md={5}>
        <CardMedia
          component={"img"}
          image={portrait}
          sx={{ marginTop: "-6rem" }}
        />
      </Grid>
    </Grid>
  );
}

export default SecondBlock