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

const FourthBlock = () => {
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
			justifyContent: 'center'
          }}
        >
          <Typography color={"background.default"} variant="h4" lineHeight={'5rem'}>
            Möt Morgan
          </Typography>
          <Typography color={"background.default"}>
            "Möjligheten till förändring finns inom oss alla", och det är aldrig
            för sent att ge upp, det är något som Morgan Kjellin är fullkomligt
            övertygad om.
			</Typography>
			<br/>
			<Typography color={'background.default'}>
			Med 17 år av tungt missbruk bakom sig har han själv
            bevisat hur verktygen för att vända sitt liv finns inom oss.
			Morgan har övervunnit svårigheter som de flesta av oss aldrig kan föreställa oss, från ett tungt
            narkotikamissbruk till att se sitt hem brinna ner och hitta sin
            hustru hängd.
			</Typography>
			<br/>
			<Typography color={'background.default'}>
			Trots allt detta har han lyckats vara drogfri och
            skapat en ny, frisk och framgångsrik tillvaro. Nu vill
            han inspirera andra att göra samma resa genom att dela med sig av
            sin egen historia och träna de verktyg som hjälpt honom på vägen,
            oavsett vad som händer. 
          </Typography>
          <Button
            variant="contained"
            style={{ background: "#BA1D37", borderRadius: "10px", minWidth: '60%', alignSelf: 'center', marginTop: '1rem'}}
          >
            Läs mer...
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FourthBlock;
