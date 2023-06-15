import { useEffect, useState } from 'react';
import { Container, Paper, Typography, Box, Grid, Link, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import TextSection from '../../components/adminComponents/updateText/TextSection';
import { ContentObject } from '../../Types/types';


type Props = {
  firebaseText: ContentObject[];
  getTextProps: any;
}

const UpdateText = ({firebaseText, getTextProps}: Props) => {


  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid container item xs={8} sx={{ bgcolor: "#333333", justifyContent: "center", borderRadius: "10px", marginLeft: "25px" }}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", borderBottom: "1px solid white", padding: "2rem" }}>
          <Typography variant="h3" color="white">Välj en text att uppdatera</Typography>
        </Grid>
        <Grid item xs={10} sx={{ display: "flex", justifyContent: "space-between", textAlign: "center", marginBottom: "1vh" }}>
          <Grid item xs={3}>
            <Typography variant="h4" color="white" sx={{ border: "1px solid white" }}>Titel </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h4" color="white" sx={{ border: "1px solid white" }}>Innehåll</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h4" color="white" sx={{ border: "1px solid white" }}>Plats</Typography>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid item xs={10}>
          { firebaseText.length > 0 ? firebaseText.map((item, index) => (
            <TextSection key={index} title={item.title} location={item.location} content={item.content} id={item.id} getTextProps={getTextProps}/>
            
          )): ''}
          
        </Grid>
      </Grid>
    </Grid>
  )
}

export default UpdateText;