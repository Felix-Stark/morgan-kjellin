import AdminLogin from '../../components/adminComponents/login/AdminLogin'
import AdminSidebar from '../../components/adminComponents/sidebar/AdminSidebar'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Grid from '@mui/material/Grid'
import { Auth, onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../../../firebase/firebase-config'
import { collection, getDocs } from 'firebase/firestore'

type Activities = {
  date: string;
  title: string;
  text: string;
  time: string;
  id: string;
}

type ClickedDate = {
  currentYear: number;
  monthIndex: number;
  index: number;
}

type EditActivity = {
  title: string;
  time: string;
  text: string;
  id: string;
}

const Admin = () => {
  const navigate = useNavigate()
  const [signedIn, setSignedIn] = useState<boolean>(false)
  const [ clickedDate, setClickedDate ] = useState<ClickedDate>();
  const [ editActivity, setEditActivity ] = useState<EditActivity>();
  const [ activities, setActivities ] = useState<Activities[]>();
 
  
  useEffect(() => {
    const user = auth.currentUser;
    console.log('user i admin: ', user)
    if ( user ) {
      setSignedIn(true)
    } else {
      setSignedIn(false)
    }

    (async () => {
      const querySnapshot = await getDocs(collection(db, 'calendar'))
      const tempArray: any[] = []
      querySnapshot.forEach((doc: any) => {
          tempArray.push(doc.data())
      })

      setActivities(tempArray);
    })();

  }, []);




    const activityProps = (currentYear: number, monthIndex: number, index: number) => {
      setClickedDate({ currentYear: currentYear, monthIndex: monthIndex, index: index })
    }

    const editActivityProps = (activityTitle: string, activityTime: string, activityText: string, activityId: string) => {
      setEditActivity({ title: activityTitle, time: activityTime, text: activityText, id: activityId });
    }


  return (
    <Grid
      container
      sx={{
        display: 'flex',
        width: '100%',
        marginTop: '15vh',
        justifyContent: 'center',
        padding: '1rem',
        boxShadow: '4px 4px 10px gray',
      }}
    >
      {!signedIn && <AdminLogin setSignedIn={setSignedIn}/>}

      {signedIn && (
        <Grid container sx={{}}>
          <Grid item xs={3} sx={{ bgcolor: '#333333' }}>
            <AdminSidebar signedIn={signedIn} setSignedIn={setSignedIn} />
          </Grid>
          <Grid item xs={9} sx={{}}>
            <Outlet context={{activities, activityProps, clickedDate, editActivityProps, editActivity, setActivities}}/>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default Admin