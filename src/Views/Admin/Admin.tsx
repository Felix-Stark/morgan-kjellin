import AdminLogin from '../../components/adminComponents/login/AdminLogin'
import AdminSidebar from '../../components/adminComponents/sidebar/AdminSidebar'
import {Outlet, Link, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'


import Grid from "@mui/material/Grid";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../firebase/firebase-config'

const Admin = () => {
	const navigate = useNavigate();
	const [signedIn, setSignedIn] = useState(false);
	
  return (
    <Grid
      container
      maxWidth={"100%"}
      style={{ minHeight: "calc(100vh - 64px)" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {!signedIn && <AdminLogin />}
      {/* <AdminSidebar /> kontrollerad import av AdminSidebar när man är inloggad */}
      {signedIn && (
        <Grid container>
          <AdminSidebar signedIn={signedIn} setSignedIn={setSignedIn} />
          <Outlet />
        </Grid>
      )}
    </Grid>
  );
}

export default Admin