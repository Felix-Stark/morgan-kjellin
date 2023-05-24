import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import crossRoadsImg from '../../../assets/home-crossroads.png'

type Props = {
  testText: string;
}


const FirstBlock = ({testText}: Props) => {


  return (
    <Grid
      container
      minHeight={"100vh"}
      justifyContent={"center"}
      style={{ overflow: "hidden" }}
      spacing={8}
    >
      <Grid item md={5} sx={{ position: "relative", maxHeight: "100vh" }}>
        <CardMedia
          component={"img"}
          image={crossRoadsImg}
          style={{ marginTop: "-2rem" }}
        />
      </Grid>
      <Grid
        item
        md={5}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={'inherit'}
      >
        <Box
          height={"50%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          padding={"1rem"}
        >
          <Typography variant="h3">{ testText }</Typography>
          <Typography variant="subtitle1">
            Du kanske inte behöver vända upp och ner på dig men ut och in är att
            rekommendera.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default FirstBlock