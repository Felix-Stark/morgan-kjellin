import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import crossRoadsImg from '../../../assets/home-crossroads.png'
import ReactPlayer from "react-player";
import video from '../../../assets/MORGAN-website-video.mp4'
import { useState } from "react";


const FirstBlock = () => {
  const [playing, setPlaying] = useState(false);


  return (
    <Grid
      container
      minHeight={"100vh"}
      justifyContent={"center"}

      spacing={8}
    >
      <Grid item md={5} height={'inherit'}>
        <ReactPlayer
          light={true}
          width={'25rem'}
          height={'40rem'}
          url={video}
          controls
          playing
          onClickPreview={() => setPlaying(true)}
        />
      </Grid>
      <Grid
        item
        md={5}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"inherit"}
      >
        <Box
          height={"50%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          padding={"1rem"}
        >
          <Typography variant="h3">Du står vid en vändpunkt</Typography>
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