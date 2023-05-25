import AdminLogin from '../../components/adminComponents/login/AdminLogin'
import AdminSidebar from '../../components/adminComponents/sidebar/AdminSidebar'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Grid from '@mui/material/Grid'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../firebase/firebase-config'

const Admin = () => {
  const navigate = useNavigate()
  const [signedIn, setSignedIn] = useState(true)

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        width: '100vw',
        marginTop: '15vh',
        justifyContent: 'center',
        padding: '1rem',
        boxShadow: '4px 4px 10px gray',
      }}
    >
      {!signedIn && <AdminLogin />}
      {/* <AdminSidebar /> kontrollerad import av AdminSidebar när man är inloggad */}
      {signedIn && (
        <Grid container sx={{}}>
          <Grid item xs={3} sx={{ bgcolor: '#333333' }}>
            <AdminSidebar signedIn={signedIn} setSignedIn={setSignedIn} />
          </Grid>
          <Grid item xs={9} sx={{}}>
            <Outlet />
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default Admin