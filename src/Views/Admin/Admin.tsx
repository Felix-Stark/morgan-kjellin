import AdminLogin from '../../components/adminComponents/login/AdminLogin'
import AdminSidebar from '../../components/adminComponents/sidebar/AdminSidebar'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Grid from '@mui/material/Grid'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../firebase/firebase-config'

type ClickedDate = {
  currentYear: number;
  monthIndex: number;
  index: number;
}

type EditActivity = {
  title: string;
  time: string;
  text: string;
}

const Admin = () => {
  const navigate = useNavigate()
  const [signedIn, setSignedIn] = useState(true)
  const [ clickedDate, setClickedDate ] = useState<ClickedDate>();
  const [ editActivity, setEditActivity ] = useState<EditActivity>();

  const activities = [
    { date: '2022-11-11', title: 'Föreläsning', text: 'Rensa Krabba', time: '10:00' }, 
    { date: '2023-8-8', title: 'Te-party', text: 'odla saker', time: '09:30' },
    { date: '2023-2-24', title: 'spela spel', text: 'vi ska spela saker', time: '14:00' },
    { date: '2023-2-24', title: 'karate', text: 'jackie chan', time: '13:30' },
    { date: '2023-5-12', title: 'äta', text: 'mat', time: '12:00' }];

    const activityProps = (currentYear: number, monthIndex: number, index: number) => {
      setClickedDate({ currentYear: currentYear, monthIndex: monthIndex, index: index })
    }

    const editActivityProps = (activityTitle: string, activityTime: string, activityText: string) => {
      setEditActivity({ title: activityTitle, time: activityTime, text: activityText });
    }


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
            <Outlet context={{activities, activityProps, clickedDate, editActivityProps, editActivity}}/>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default Admin