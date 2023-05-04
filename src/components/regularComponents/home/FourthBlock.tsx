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
      marginTop={"3rem"}
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
          }}
        >
          <Typography color={"background.default"} variant="h4">
            Möt Morgan
          </Typography>
          <Typography color={"background.default"}>
            Kort info om Morgans liv och erfarenhet.
          </Typography>
          <Button
            variant="contained"
            style={{ background: "#BA1D37", borderRadius: "10px" }}
          >
            Läs mer...
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FourthBlock;
