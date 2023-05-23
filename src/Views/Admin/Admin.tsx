import AdminLogin from '../../components/adminComponents/login/AdminLogin'
import AdminSidebar from '../../components/adminComponents/sidebar/AdminSidebar'
import {Outlet, Link, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'


import Grid from "@mui/material/Grid";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../firebase/firebase-config'

const Admin = () => {
	const navigate = useNavigate();
	const [signedIn, setSignedIn] = useState(true);
	
  return (
    <Grid
      container
      xs={12}
      sx={{display:"flex", width:"100vw",}}
      
    >
      {!signedIn && <AdminLogin />}
      {/* <AdminSidebar /> kontrollerad import av AdminSidebar när man är inloggad */}
      {signedIn && (
        <Grid container xs={11.5} sx={{display:"flex", justifyContent:"space-between"}}   >
          <Grid item xs={3} sx={{bgcolor:"gray"}}>
            <AdminSidebar signedIn={signedIn} setSignedIn={setSignedIn} /> 
          </Grid>   
          <Grid item xs={9} sx={{display:"flex",justifyContent:"center"}}>
            <Outlet />
          </Grid>
          
          
        </Grid>
      )}
    </Grid>
  );
}

export default Admin