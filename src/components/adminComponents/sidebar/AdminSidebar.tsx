import { Drawer, Divider, List, ListItem, ListItemButton, ListItemText, Button } from '@mui/material';
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
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleUpdateTextsClick}>
            <ListItemText primary={'Uppdatera texter'} />
          </ListItemButton>
        </ListItem>
        
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={handleCalender}>
            <ListItemText primary={'Kalender'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Button onClick={handleSignout}>Logga ut</Button>
    </Drawer>
  );
};

export default AdminSidebar;