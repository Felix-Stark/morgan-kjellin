import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import crossRoadsImg from '../../../assets/home-crossroads.png'
import ReactPlayer from "react-player";
import video from '../../../assets/MORGAN-website-video.mp4'
import snapShot from '../../../assets/morgansnapshot.png'
import { useState } from "react";

type Props = {
  firebaseArray: any;
}


const FirstBlock = ({firebaseArray}: Props) => {


  return (
    <Grid container minHeight={"100vh"} justifyContent={"center"} alignItems={'center'} spacing={8}>
      <Grid item xs={10} sm={8} md={5}>
          <ReactPlayer
            light={snapShot}
            width={"100%"}
            height={"80vh"}
            url={video}
            controls
            playing
            style={{ backgroundColor: "#161616", marginBottom: '1.5rem',marginTop: '1.5rem' }}
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
          <Typography variant="h3">
            {firebaseArray.length > 0 ? firebaseArray[3].title : ""}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: {xs: '1rem'}}}>
            {firebaseArray.length > 0 ? firebaseArray[3].content : ""}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default FirstBlock