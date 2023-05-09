import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from '@mui/material/CardMedia'


const ThirdBlock = () => {

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
      <Typography variant="h3">Här kan vi starta...</Typography>
      <Grid
        container
        minHeight={"50vh"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        sx={{ flexDirection: { sm: "column", md: "row" } }}
        rowGap={5}
        marginBottom={10}
      >
        <Grid item xs={8} sm={6} md={3} xl={2}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
            }}
          >
            <CardMedia component={"img"} style={{ height: "10rem" }} />
            <CardContent>
              <Typography color={"background.default"} variant="h4">
                Bild med text
              </Typography>
              <Typography color={"background.default"}>
                Gratis 7-dagars program: Tillbaka till mig själv
              </Typography>
            </CardContent>
            <CardActions sx={{ alignSelf: "center" }}>
              <Button
                variant="contained"
                style={{ background: "#BA1D37", borderRadius: "10px" }}
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
            }}
          >
            <CardMedia component={"img"} style={{ height: "10rem" }} />
            <CardContent>
              <Typography color={"background.default"} variant="h4">
                Bild med text
              </Typography>
              <Typography color={"background.default"}>
                Gratis 7-dagars program: Tillbaka till mig själv
              </Typography>
            </CardContent>
            <CardActions sx={{ alignSelf: "center" }}>
              <Button
                variant="contained"
                style={{ background: "#BA1D37", borderRadius: "10px" }}
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
            }}
          >
            <CardMedia component={"img"} style={{ height: "10rem" }} />
            <CardContent>
              <Typography color={"background.default"} variant="h4">
                Bild med text
              </Typography>
              <Typography color={"background.default"}>
                Gratis 7-dagars program: Tillbaka till mig själv
              </Typography>
            </CardContent>
            <CardActions sx={{ alignSelf: "center" }}>
              <Button
                variant="contained"
                style={{ background: "#BA1D37", borderRadius: "10px" }}
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
