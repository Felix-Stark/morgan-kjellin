import heroImg from '../../../assets/hero-img.png';
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import IconButton from '@mui/material/IconButton'

const Hero = () => {
  return (
    <CardMedia
      image={heroImg}
      style={{
        minWidth: "100vh",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        
      }}
    >
      <Box width={'80%'}>
        <Typography variant="h1" fontWeight={"700"} color={"#fff"} fontSize={'4rem'} lineHeight={'8rem'} mt={8}>
          FINN DITT RÄTTA SANNA JAG...
        </Typography>
        <Typography variant="h1" component={'h2'} fontWeight={"700"} color={"#fff"} fontSize={'4rem'} lineHeight={'10rem'}>
          ÄRLIG , SANN , STARK
        </Typography>
        <Typography variant="h2" color={'#fff'} fontStyle={'italic'} fontSize={'4rem'} marginTop={20}>
          Tillsammans kan vi utveckla<br/>dig till ditt fulla potential.
        </Typography>
      </Box>
	  {/* <IconButton  style={{ position: 'absolute', bottom: 20, right: 20}}>
		<TextsmsOutlinedIcon style={{height: 50, width: 50, color: '#fff'}} />
	  </IconButton> */}
    </CardMedia>
  );
}

export default Hero