import { Container, Paper, Typography, Box, Grid, Link, Button } from "@mui/material";
import React, { useEffect } from "react";
import testP from '../../assets/profile-photo.jpg'
import { useNavigate } from 'react-router-dom';
import lecturePic from '../../assets/hero-morgan.jpg'
import addictPic from '../../assets/difficultsign.svg'

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
      <Paper sx={{padding: "1rem", borderRadius:'0px', color:"white", bgcolor:"#161616"}}>
        <Typography variant="h4" sx={{  marginBottom:"2vh"}}>{ firebaseArray.length > 0 ? firebaseArray[0].title : ''}</Typography>
        <Typography variant="h6" sx={{ fontSize: '1em', margin: "auto"}}>
        { firebaseArray.length > 0 ? firebaseArray[0].content : ''}
        </Typography>
      </Paper>
      <Box component="img"sx={{bgcolor:'gray',maxWidth: { xs: "100%", md: 400 },}} alt="bild"src={lecturePic}/>
    </Box>
    <Box sx={{boxShadow: 3 , display: 'flex', marginBottom:"5vh",  flexDirection:{ xs: "column", md: "row"}, justifyContent: 'space-between'}}>
      <Box component="img"sx={{bgcolor:'gray',maxWidth: { xs: "100%", md: 200 },}}alt="bild"src={addictPic}/>
      <Paper  sx={{padding:"1rem", borderRadius:'0px', bgcolor:"#161616", color:"white"}}>
        <Typography variant="h4" sx={{  marginBottom:"2vh"}}>{ firebaseArray.length > 0 ? firebaseArray[1].title : ''}</Typography>
        <Typography variant="h6" sx={{ fontSize: '1em', margin: "auto"}}>{ firebaseArray.length > 0 ? firebaseArray[1].content : ''}
          
        </Typography>
      </Paper>
    </Box>
    <Paper elevation={3} sx={{padding: "1rem", borderRadius:'0px', color:"white", bgcolor:"#161616", marginBottom:"2.5vh"}}>
      <Typography variant="h4" sx={{  marginBottom:"1rem"}}>{ firebaseArray.length > 0 ? firebaseArray[2].title : ''}</Typography>
      <Typography variant="h6" sx={{ fontSize: '1em', margin: "auto"}}>
      { firebaseArray.length > 0 ? firebaseArray[2].content : ''}
      </Typography>
       <Typography variant="h6" sx={{  marginBottom:"1rem", marginTop: "1rem"}}>“FÖRÄNDRING ÄR MÖJLIGT FÖR ALLA!”</Typography>
    </Paper>
    {/* <Typography variant="body1" color="initial"></Typography>  */}
    <Button variant="contained" onClick={ () => navigate('/contact') }
                  sx={{ 
                    backgroundColor: '#BA1D37',
                    width: '20rem',
                    height: '5rem',
                    margin: '2rem 0',
                    fontWeight: 'bold',
                    '&:hover': {backgroundColor: '#BA1D60'}}}>
                    BOKA MIG FÖR EN FÖRELÄSNING!</Button>
  </Container>
};
