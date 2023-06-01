import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from '@mui/material/CardMedia'
import { useNavigate } from 'react-router-dom';
import firstCard from '../../../assets/handshake.svg'
import secondCard from '../../../assets/lecture.svg'
import thirdCard from '../../../assets/beachhandsout.svg'


const ThirdBlock = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      bgcolor={"background.default"}
      minHeight={"100vh"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      rowGap={6}
    >
      <Typography variant="h3">Välj ett alternativ...</Typography>
      <Grid
        container
        minHeight={"50vh"}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        sx={{ flexDirection: { sm: "column" , md: "row" } }}
        rowGap={5}
        marginBottom={10}
      >
        <Grid item xs={8} sm={6} md={3} xl={2}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              maxWidth: { xs: "30rem", sm:"35rem ", md: "40rem", lg: "45rem" },
            }}
          >
            <CardMedia component={"img"} sx={{ maxHeight: {xs: "10rem", sm: '20rem'} }} src={firstCard} />
            <CardContent>
              <Typography color={"background.default"} variant="h4">
                Första kontakt
              </Typography>
              <Typography color={"background.default"}>
                Online möte med mig via Zoom , Teams eller telefon
              </Typography>
            </CardContent>
            <CardActions sx={{ alignSelf: "center" }}>
              <Button
                variant="contained"
                style={{ background: "#BA1D37", borderRadius: "10px", margin: "1rem" }} onClick={() => {
                  navigate('/contact')
                }}
              >
                Läs mer...
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8} sm={6} md={3} xl={2}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              maxWidth: { xs: "25rem", md: "30rem", lg: "35rem" },  
            }}
          >
            <CardMedia component={"img"} sx={{ maxHeight: {xs: "10rem", sm: '20rem'} }} src={secondCard}/>
            <CardContent>
              <Typography color={"background.default"} variant="h4">
                Föreläsningar
              </Typography>
              <Typography color={"background.default"}>
                Föreläsningar om stress, utmattning, återhämtning, livet
              </Typography>
            </CardContent>
            <CardActions sx={{ alignSelf: "center" }}>
              <Button
                variant="contained"
                style={{ background: "#BA1D37", borderRadius: "10px", margin: "1rem" }} onClick={() => {
                  navigate('/arbeta-med-mig')
                }}
              >
                Läs mer...
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8} sm={6} md={3} xl={2}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              maxWidth: { xs: "25rem", md: "30rem", lg: "35rem" },
            }}
          >
            <CardMedia component={"img"} sx={{ maxHeight: {xs: "10rem", sm: '20rem'} }} src={thirdCard} />
            <CardContent>
              <Typography color={"background.default"} variant="h4">
                Kurser
              </Typography>
              <Typography color={"background.default"}>
                Anpassade kurser för företag och organisationer
              </Typography>
            </CardContent>
            <CardActions sx={{ alignSelf: "center" }}>
              <Button
                variant="contained"
                style={{ background: "#BA1D37", borderRadius: "10px", margin: "1rem" }} onClick={() => {
                  navigate('/arbeta-med-mig')
                }}
              >
                Läs mer...
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ThirdBlock;
