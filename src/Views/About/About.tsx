import { Container, Paper, Typography, Box, Grid, Link, Button } from "@mui/material";
import React, { useEffect } from "react";
import testP from '../../assets/profile-photo.jpg'
import { useNavigate } from 'react-router-dom';
import lecturePic from '../../assets/hero-morgan.jpg'
import addictPic from '../../assets/difficultsign.svg'
import upanddown from '../../assets/upponer.jpg'
import broom from '../../assets/bildkratta.jpg'
type Props = {
  firebaseArray: any;
}


export const About = ({firebaseArray}: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  


  return <Container  sx={{   width: {xs: "80%", md: "100%" },textAlign:"center" ,  paddingTop: '25px', }}>

    <Box sx={{ boxShadow: 3 , display: 'flex', marginBottom:"5vh",flexDirection:{ xs: "column-reverse", md: "row"}, justifyContent: 'space-between'}}>
      <Paper sx={{padding: "1rem", borderRadius:'0px', color:"white", bgcolor:"#342C39"}}>
        <Typography variant="h2" sx={{  marginBottom:"2vh"}}>{ firebaseArray.length > 0 ? firebaseArray[1].title : ''}</Typography>
        <Typography variant="h5" sx={{ fontSize: '1.1em', margin: "auto"}}>
        { firebaseArray.length > 0 ? firebaseArray[1].content : ''}
        </Typography>
      </Paper>
      <Box component="img"sx={{bgcolor:'gray',maxWidth: { xs: "100%", md: 400 },}} alt="bild"src={lecturePic}/>
    </Box>
    <Box sx={{boxShadow: 3 , display: 'flex', marginBottom:"5vh",  flexDirection:{ xs: "column", md: "row"}, justifyContent: 'space-between'}}>
      <Box component="img"sx={{bgcolor:'gray',maxWidth: { xs: "100%", md: 200 },}}alt="bild"src={addictPic}/>
      <Paper  sx={{padding:"1rem", borderRadius:'0px', bgcolor:"#342C39", color:"white"}}>
        <Typography variant="h2" sx={{  marginBottom:"2vh"}}>{ firebaseArray.length > 0 ? firebaseArray[3].title : ''}</Typography>
        <Typography variant="h5" sx={{ fontSize: '1.1em', margin: "auto"}}>{ firebaseArray.length > 0 ? firebaseArray[3].content : ''}
          
        </Typography>
      </Paper>
    </Box>
    <Box sx={{ boxShadow: 3 , display: 'flex', marginBottom:"5vh",flexDirection:{ xs: "column-reverse", md: "row"}, justifyContent: 'space-between'}}>
      <Paper sx={{padding: "1rem", borderRadius:'0px', color:"white", bgcolor:"#342C39"}}>
        <Typography variant="h2" sx={{  marginBottom:"2vh"}}>{ firebaseArray.length > 0 ? firebaseArray[0].title : ''}</Typography>
        <Typography variant="h5" sx={{ fontSize: '1.1em', margin: "auto", lineHeight:"1.5"}}>
        { firebaseArray.length > 0 ? firebaseArray[0].content : ''}
        </Typography>
      </Paper>
      <Box component="img"sx={{bgcolor:'gray',maxWidth: { xs: "100%", md: 200 },}} alt="bild"src={upanddown}/>
    </Box>
    <Box sx={{boxShadow: 3 , display: 'flex', marginBottom:"5vh",  flexDirection:{ xs: "column", md: "row"}, justifyContent: 'space-between'}}>
      <Box component="img"sx={{bgcolor:'gray',maxWidth: { xs: "100%", md: 200 },}}alt="bild"src={broom}/>
      <Paper  sx={{padding:"1rem", borderRadius:'0px', bgcolor:"#342C39", color:"white"}}>
        <Typography variant="h2" sx={{  marginBottom:"2vh"}}>{ firebaseArray.length > 0 ? firebaseArray[2].title : ''}</Typography>
        <Typography variant="h5" sx={{ fontSize: '1.1em', margin: "auto"}}>{ firebaseArray.length > 0 ? firebaseArray[2].content : ''}
        </Typography>
      </Paper>
    </Box>
    <Paper elevation={3} sx={{padding: "1rem", borderRadius:'0px', color:"white", bgcolor:"#342C39", marginBottom:"2.5vh"}}>
      <Typography variant="h2" sx={{  marginBottom:"1rem"}}>Vad andra sagt om Morgans föreläsningar</Typography>
       <Typography variant="h4" sx={{  marginBottom:"1rem", marginTop: "1rem", fontStyle:"italic"}}>“En föreläsning som verkligen berörde.”</Typography>
       <Typography variant="h4" sx={{  marginBottom:"1rem", marginTop: "1rem", fontStyle:"italic"}}>"Ett proffsigt bemötande."</Typography>
       <Typography variant="h4" sx={{  marginBottom:"1rem", marginTop: "1rem", fontStyle:"italic"}}>"Detta borde alla höra."</Typography>
       <Typography variant="h4" sx={{  marginBottom:"1rem", marginTop: "1rem", fontStyle:"italic"}}>"Du lyfte fram det på ett fantastiskt sätt som att jag aldrig kan skylla på någon annan, ansvaret ligger hos mig själv."</Typography>
    </Paper>
    
    <Paper elevation={3} sx={{padding: "1rem", borderRadius:'0px', color:"white", bgcolor:"#342C39", marginBottom:"2.5vh"}}>
      <Typography variant="h2" sx={{  marginBottom:"1rem"}}>{ firebaseArray.length > 0 ? firebaseArray[4].title : ''}</Typography>
      <Typography variant="h5" sx={{ fontSize: '1.1em', margin: "auto"}}>
        { firebaseArray.length > 0 ? firebaseArray[4].content : ''}
      </Typography>
      <Typography variant="h4" sx={{  marginBottom:"1rem", marginTop: "1rem", fontStyle:"italic"}}>“FÖRÄNDRING ÄR MÖJLIGT FÖR ALLA!”</Typography>
    </Paper>
    <Button variant="contained" onClick={ () => navigate('/contact') }
                  sx={{ 
                    backgroundColor: '#BA1D37',
                    width: '100%',
                    maxWidth:"20rem",
                    height: '5rem',
                    margin: '2rem 0',
                    fontWeight: 'bold',
                    '&:hover': {backgroundColor: '#BA1D60'}}}>
                    BOKA MIG FÖR EN FÖRELÄSNING!</Button>
  </Container>
};
