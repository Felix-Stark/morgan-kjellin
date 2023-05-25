import { Drawer, Divider, List, ListItem, ListItemButton, ListItemText, Button, Box } from '@mui/material';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../../firebase/firebase-config';

interface HandleSignedIn {
  signedIn: boolean;
  setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminSidebar = ({ signedIn, setSignedIn }: HandleSignedIn) => {
  const drawerWidth = 240;
  const navigate = useNavigate();

  const handleSignout = async () => {
    await signOut(auth).then(() => {
      navigate('/admin');
    });
  };

  const handleUpdateTextsClick = () => {
    navigate('/admin/updatetext');
  };

  const handleCalender = () => {
    navigate('/admin/kalender');
  };

  return (
    <Box
      sx={{height: "60vh"}}  
    >
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleUpdateTextsClick}>
            <ListItemText primary={"Uppdatera texter"} sx={{color:"white"}} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={handleCalender}>
            <ListItemText primary={"Kalender"} sx={{color:"white"}} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Button onClick={handleSignout} sx={{color:"red", paddingLeft: "1rem", paddingTop: "1rem"}}>
        Logga ut
      </Button>
    </Box>
  );
};

export default AdminSidebar;