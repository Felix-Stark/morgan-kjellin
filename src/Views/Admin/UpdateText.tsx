import React from 'react'
import { Container, Paper, Typography, Box, Grid, Link, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';



const  UpdateText=() => {
  return (
    <Grid container  sx={{display:"flex", justifyContent:"center"}}>
      <Grid xs={3} sx={{bgcolor:"#332341"}}>
        <Typography variant="h3" color="white" sx={{textAlign:"center"}}>Menu</Typography>
      </Grid>
      <Grid container  xs={8} sx={{bgcolor:"#333333", justifyContent:"center"}}>
        <Grid item xs={12} sx={{display:"flex", justifyContent:"center", borderBottom:"1px solid white", padding:"2rem"}}>
          <Typography variant="h3" color="white">Välj en text att uppdatera</Typography>
        </Grid>
        <Grid xs={10} sx={{display:"flex", justifyContent:"space-between",textAlign:"center", marginBottom:"1vh"}}>
          <Grid item xs={3}>
            <Typography variant="h4" color="white"  sx={{border:"1px solid white"}}>Titel </Typography>  
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h4" color="white" sx={{border:"1px solid white"}}>Innehåll</Typography>  
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h4" color="white" sx={{border:"1px solid white"}}>Plats</Typography>  
          </Grid>
          <Grid item xs={3}>
             
          </Grid>
        </Grid>
        <Grid xs={10} sx={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center" ,bgcolor:"gray", marginBottom:"1rem"}}>
          <Grid item xs={3}>
            <Typography  variant="body1" color="white">Relationer</Typography>  
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" color="white">Lorem ipsum dolor sit amet magna aliqua.</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" color="white">Arbeta med mig</Typography>
          </Grid>
          <Grid item xs={3}>
            <IconButton >
              <EditIcon fontSize="large" sx={{color:'white'}}/>
            </IconButton>
          </Grid>
        </Grid>
        <Grid xs={10} sx={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center" ,bgcolor:"gray", marginBottom:"1rem"}}>
          <Grid item xs={3}>
            <Typography  variant="body1" color="white">Relationer</Typography>  
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" color="white">Lorem ipsum dolor sit amet magna aliqua.</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" color="white">Arbeta med mig</Typography>
          </Grid>
          <Grid item xs={3}>
            <IconButton >
              <EditIcon fontSize="large" sx={{color:'white'}}/>
            </IconButton>  
          </Grid>
        </Grid>
        <Grid xs={10} sx={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center" ,bgcolor:"gray", marginBottom:"1rem"}}>
          <Grid item xs={3}>
            <Typography  variant="body1" color="white">Relationer</Typography>  
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" color="white">Lorem ipsum dolor sit amet magna aliqua.</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" color="white">Arbeta med mig</Typography>
          </Grid>
          <Grid item xs={3}>
            <IconButton >
              <EditIcon fontSize="large" sx={{color:'white'}}/>
            </IconButton>  
          </Grid>
        </Grid>   
      </Grid>
      
        
    </Grid>
  )
}

export default UpdateText
