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
      marginTop={"3rem"}
	  display={'flex'}
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
            Världen är vid en Vändpunkt
          </Typography>
          <Typography color={"#fff"} variant="subtitle1">
            Vi ser oftare och oftare att saker vi gjort tidigare inte fungerat.
            Om världen ska ändra får du sluta agera som du inte är av
            betydelse...
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        md={5}

      >
        <CardMedia component={"img"} image={portrait} sx={{ marginTop: '-6rem'}} />
      </Grid>
    </Grid>
  );
}

export default SecondBlock