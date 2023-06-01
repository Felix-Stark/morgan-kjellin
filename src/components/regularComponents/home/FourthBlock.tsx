import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import portrait from "../../../assets/home-block2.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";


type Props = {
  firebaseArray: any;
}



const FourthBlock = ({firebaseArray}: Props) => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      minHeight={"100vh"}
      bgcolor={"background.paper"}
      justifyContent={"center"}
      spacing={8}

      display={"flex"}
    >
      <Grid item md={5}>
        <CardMedia
          component={"img"}
          image={portrait}
          sx={{ marginTop: "-6rem" }}
        />
      </Grid>
      <Grid
        item
        md={5}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
			      maxWidth: '80%',
			      justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography color={"background.default"} variant="h4" lineHeight={'5rem'} sx={{
            textAlign: "center",
            width: "100%",
            maxWidth: "50rem",
            margin: "0 auto",
            }}>
          { firebaseArray.length > 0 ? firebaseArray[4].title : ''}
          </Typography>
          <Typography variant="subtitle1" color={"background.default"} sx={{
              textAlign: "center",
              width: "100%",
              maxWidth: "50rem",
              margin: "0 auto",
              }}>{ firebaseArray.length > 0 ? firebaseArray[4].content : ''}
			    </Typography>
          <Button
            variant="contained"
             onClick={() => 
              {
              navigate('/about')
            }}
            sx={{ 
              backgroundColor: '#BA1D37',
              width: '12rem',
              height: '4rem',
              margin: '2rem 0',
              fontWeight: 'bold',
              '&:hover': {backgroundColor: '#BA1D60'}}}>
          
            Läs mer...
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FourthBlock;
