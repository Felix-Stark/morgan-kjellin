import { useEffect, useState } from 'react';

import { Container, Paper, Typography, Box, Grid, Link, IconButton, Button, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

type Props = {
  firebaseText: any;
  itemdata: any;
}

const DashBoard = ({firebaseText, itemdata}: Props) => {
  const [newitemdata, setNewItemData] = useState<any>("");
  useEffect(() => {
    setNewItemData(itemdata);
    
  }, [itemdata]);
  console.log("daaash",newitemdata)
  return (
    <Grid item container sx={{ display: "flex", justifyContent: "center" }}>
      
      <Grid item container xs={8} sx={{ bgcolor: "#333333", justifyContent: "center", borderRadius: "10px", marginLeft: "25px" }}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", borderBottom: "1px solid white", padding: "2rem" }}>
          <Typography variant="h3" color="white">Uppdatera text</Typography>
        </Grid>
        <Grid item container xs={10} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", textAlign: "center", marginBottom: "1vh" }}>
        </Grid>
        <Grid item container xs={10} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", bgcolor: "#333333", marginBottom: "1rem" }}>
          <Grid item xs={4} sx={{ marginRight: "1rem" }}>
            <Typography variant="h4" color="white">Titel</Typography>
            { itemdata  ?<TextField
              variant="filled"
              fullWidth
              value={itemdata.location}
              inputProps={{ style: {color: "black"}}}
              sx={{ bgcolor: "white"}}
              InputLabelProps={{
                style: {
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "bold",
                },
              }}
            /> : ''}
            
          </Grid>
          <Grid item xs={4} sx={{marginTop: "1rem"}}>
            <Typography variant="h4" color="white">Text</Typography>
            {itemdata ?<TextField
              variant="filled"
              fullWidth
              value={itemdata.content}
              multiline
              rows={6}
              inputProps={{ style: {color: "black"}}}
              sx={{ bgcolor: "white"}}
              InputLabelProps={{
                style: {
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "bold",
                },
              }}
            /> : ''}
            
          </Grid>
        </Grid>
        <Grid item container xs={10} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center",  marginBottom: "1rem" }}>
          <Grid item xs={12}>
            <Button variant="contained" sx={{ bgcolor: "red", color: "white" }}>Uppdatera</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DashBoard;