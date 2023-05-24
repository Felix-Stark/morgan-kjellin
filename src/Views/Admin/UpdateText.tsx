import { useEffect, useState } from 'react';
import { Container, Paper, Typography, Box, Grid, Link, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/firebase-config';
import TextSection from '../../components/adminComponents/updateText/TextSection';

interface TextItem {
  title: string;
  content: string;
  location: string;
}

type Props = {
  firebaseText: any;
  getTextProps: any;
}

const UpdateText = ({firebaseText, getTextProps}: Props) => {
  const navigate = useNavigate();

  const editText = () => {
    navigate('/admin/dashboard');
  };

  const [textItems, setTextItems] = useState<TextItem[]>([]);

  useEffect(() => {
    const fetchTextItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'));   // Hämtar alla dokument från collectionen 'posts' i firestore
      const fetchedTextItems = querySnapshot.docs.map((doc) => doc.data() as TextItem);
      setTextItems(fetchedTextItems);
    };

    // console.log(testText.map((item:any) => item.title));
    fetchTextItems();
  }, []);

  if (firebaseText.length > 0) {
    console.log(firebaseText.map((item: any) => item.title));
  }


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
          { firebaseText.length > 0 ? firebaseText.map((item: any, index: any) => (
            <TextSection key={index} title={item.title} location={item.location} content={item.content} getTextProps={getTextProps}/>
            
          )): ''}
          
        </Grid>
      </Grid>
    </Grid>
  )
}

export default UpdateText;