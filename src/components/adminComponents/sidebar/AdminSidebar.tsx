import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from "@mui/material/Typography";
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebase/firebase-config';
import { useNavigate } from 'react-router-dom'
import { SetStateAction } from 'react';

interface HandleSignedIn {
  signedIn: boolean;
  setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminSidebar = ({signedIn, setSignedIn }: HandleSignedIn) => {
  const drawerWidth = 240;
  const navigate = useNavigate();

  const handleSignout = async () => {
    await signOut(auth)
    .then(() => {
      navigate('/admin')
    })
  }

  return (
    <Box
      
    >
      <Button onClick={handleSignout}>
        Logga ut
      </Button>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Uppdatera texter"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Uppdatera bilder"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Kalender"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
}

export default AdminSidebar