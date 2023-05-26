import { Grid, IconButton, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';


import React from 'react'

interface Props {
    title: string;
    content: string;
    location: string;
    id: string;
    getTextProps: any;
  }


function TextSection({title,content,location, id, getTextProps}: Props) {
    const navigate = useNavigate();


    const editText = (title: string,content: string,location: string, id: string) => {

        getTextProps(title,content,location, id)
        navigate('/admin/dashboard');
        
    };
  return (
    <div>
        
        <Grid  sx={{ display: "flex", justifyContent: "center", flexDirection:"row" ,alignItems: "center", textAlign: "center", bgcolor: "gray", marginBottom: "1rem" }}>
            <Grid item xs={3}>
            <Typography variant="body1" color="white">{title.substring(0,50) }</Typography>
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body1" color="white">{content.substring(0,50) + "..." }</Typography>
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body1" color="white">{location}</Typography>
            </Grid>
            <Grid item xs={3}>
            <IconButton onClick={() =>editText(title,content,location,id)}>
                <EditIcon fontSize="large" sx={{ color: 'white' }} />
            </IconButton>
            </Grid>
        </Grid>
          
    </div>
  )
}

export default TextSection
