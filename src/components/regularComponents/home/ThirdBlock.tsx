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
      <Typography sx={{textAlign:"center"}} variant="h3">Välj ett alternativ...</Typography>
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
        <Grid item xs={10} sm={6} md={3} >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              minWidth: { md: '17rem' },
              maxWidth: { xs: "25rem", md: "40rem", lg: "45rem" },
              height: { md: '35rem', lg: '35rem' }
            }}
          >
            <CardMedia component={"img"} sx={{ minHeight: '14rem', height: { md: '14rem'}, maxHeight: {xs: "10rem", sm: '20rem'} }} alt="Morgan Kjellin Första mötet" src={firstCard} />
            <CardContent>
              <Typography color={"background.default"} variant="h4" fontWeight="700" padding="1rem 0">
                Första mötet
              </Typography>
              <Typography color={"background.default"} variant="h6">
                Boka möte med mig på det sätt som passar dig bäst.
              </Typography>
            </CardContent>
            <CardActions sx={{ alignSelf: "center" }}>
              <Button
                variant="contained"
                style={{ background: "#BA1D37", borderRadius: "10px", margin: "3rem" }} onClick={() => {
                  navigate('/contact')
                }}
              >
                Läs mer...
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={10} sm={6} md={3} >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              minWidth: { md: '17rem' },
              maxWidth: { xs: "25rem", md: "30rem", lg: "35rem" },
              height: { md: '35rem', lg: '35rem' } 
            }}
          >
            <CardMedia component={"img"} sx={{ minHeight: '14rem', height: { md: '14rem'} , maxHeight: {xs: "10rem", sm: '20rem'} }} alt="Morgan Kjellin Föreläsningar" src={secondCard}/>
            <CardContent>
              <Typography color={"background.default"} variant="h4" fontWeight="700" padding="1rem 0">
                Föreläsningar
              </Typography>
              <Typography variant="h6" color={"background.default"}>
                Föreläsningar om missbruk, kriser, insikter och förståelse.
              </Typography>
            </CardContent>
            <CardActions sx={{ alignSelf: "center" }}>
              <Button
                variant="contained"
                style={{ background: "#BA1D37", borderRadius: "10px", margin: "3rem" }} onClick={() => {
                  navigate('/arbeta-med-mig')
                }}
              >
                Läs mer...
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={10} sm={6} md={3} >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              minWidth: { md: '17rem' },
              maxWidth: { xs: "25rem", md: "30rem", lg: "35rem" },
              height: { md: '35rem', lg: '35rem' }
            }}
          >
            <CardMedia component={"img"} sx={{ minHeight: '14rem', height: { md: '14rem'}, maxHeight: {xs: "10rem", sm: '20rem'} }} alt="Morgan Kjellin Kurser" src={thirdCard} />
            <CardContent>
              <Typography color={"background.default"} variant="h4" fontWeight="700" padding="1rem 0">
                Kurser
              </Typography>
              <Typography color={"background.default"} variant="h6">
                Anpassade kurser för företag, organisationer eller privat.
              </Typography>
            </CardContent>
            <CardActions sx={{ alignSelf: "center" }}>
              <Button
                variant="contained"
                style={{ background: "#BA1D37", borderRadius: "10px", margin: "3rem" }} onClick={() => {
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
