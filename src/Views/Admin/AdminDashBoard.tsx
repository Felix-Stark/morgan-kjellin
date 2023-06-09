import { useEffect, useState } from 'react';
import { Container, Paper, Typography, Box, Grid, Link, IconButton, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { db } from '../../../firebase/firebase-config';
import { FieldValue, collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

type Props = {
  itemdata: any;
  setfirebaseArray: any;
}

const DashBoard = ({itemdata, setfirebaseArray}: Props) => {

  const [ inputTitle, setInputTitle ] = useState<string>('');
  const [ inputContent, setInputContent ] = useState<String>('');
  const [ open, setOpen ] = useState<boolean>(false);


  const navigate = useNavigate();

  useEffect(() => {
    setInputTitle(itemdata.title);
    setInputContent(itemdata.content);
  }, []);

  const handleTitleInput = (e: any) => {
    setInputTitle(e.target.value);
  }

  const handleContentInput = (e: any) => {
    setInputContent(e.target.value);
  }

  const handleUpdate = () => {

    const textRef = doc(db, 'posts', `${ itemdata.id }`);

    (async () => {
        await updateDoc(textRef, {
          content: `${ inputContent }`,
          title: `${ inputTitle }`
        })
      }
    )();

    (async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'))
      const tempArray: any[] = []
      querySnapshot.forEach((doc: any) => {
          tempArray.push(doc.data())
      })

      setfirebaseArray(tempArray);
      setOpen(true);
    })();

  }

  const handleClose = () => {

    setOpen(false);
    navigate('/admin/updatetext');

  }

  return (
    <Grid item container sx={{ display: "flex", justifyContent: "center" }}>
      
      <Grid item container xs={8} sx={{ bgcolor: "#333333", justifyContent: "center", borderRadius: "10px", marginLeft: "25px" }}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", borderBottom: "1px solid white", padding: "2rem" }}>
          <Typography variant="h3" color="white">Uppdatera text</Typography>
        </Grid>
        <Grid item container xs={10} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", textAlign: "center", marginBottom: "1vh" }}>
        </Grid>
        <Container sx={{ display: "flex", flexDirection: 'column', alignItems: "center", bgcolor: "#333333", marginBottom: "1rem" }}>
          <Container sx={{ marginRight: "1rem" }}>
            <Typography variant="h4" color="white">Titel</Typography>
            { itemdata  ?<TextField
              variant="filled"
              fullWidth
              value={ inputTitle }
              onChange={ (e: any) => handleTitleInput(e) }
              inputProps={{ style: {color: "black"}}}
              sx={{ width: '25rem', bgcolor: "white"}}
              InputLabelProps={{
                style: {
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "bold",
                },
              }}
            /> : ''}
            
          </Container>
          <Container sx={{marginTop: "1rem", marginBottom: '1rem'}}>
            <Typography variant="h4" color="white">Text</Typography>
            {itemdata ?<TextField
              variant="filled"
              fullWidth
              value={ inputContent }
              onChange={ (e: any) => handleContentInput(e) }
              multiline
              rows={10}
              inputProps={{ style: {color: "black"}}}
              sx={{ bgcolor: "white"}}
              InputLabelProps={{
                style: {
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "bold",
                  maxHeight: "20rem"
                },
              }}
            /> : ''}
            
          </Container>
        </Container>
        <Grid item container xs={10} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center",  marginBottom: "1rem" }}>
          <Grid item xs={12}>
            <Button onClick={ handleUpdate } variant="contained" sx={{ bgcolor: "red", color: "white" }}>Uppdatera</Button>
          </Grid>
        </Grid>
      </Grid>

      <Dialog open={ open } onClose={ handleClose }>
        <DialogTitle>Din data har uppdaterats</DialogTitle>
        <DialogActions sx={{ display:"flex" , justifyContent:"center"}}>
          <Button onClick={ handleClose } sx={{ bgcolor: "red", color: "white" }}>Stäng</Button>
        </DialogActions>
      </Dialog>

    </Grid>
  )
}

export default DashBoard;