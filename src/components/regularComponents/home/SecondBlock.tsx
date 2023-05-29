import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import portrait from '../../../assets/home-block2.png'

type Props = {
  firebaseArray: any;
}

const SecondBlock = ({firebaseArray}: Props) => {
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
          { firebaseArray.length > 0 ? firebaseArray[5].title : ''}
          </Typography>
          <Typography color={"#fff"} variant="subtitle1">{ firebaseArray.length > 0 ? firebaseArray[5].content : ''}
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