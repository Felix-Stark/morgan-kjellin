import { Container, Paper, Box, Typography, Button, Dialog, DialogTitle, DialogActions } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase-config';


type Activities = {
  date: string;
  title: string;
  text: string;
  time: string;
  id: string;
}

type EditActivity = {
  title: string;
  time: string;
  text: string;
  id: string;
}

type ClickedDate = {
  currentYear: number;
  monthIndex: number;
  index: number;
}

type OutletProps = {
  activities: Activities[];
  activityProps: (currentYear: number, monthIndex: number, index: number) => void;
  clickedDate: ClickedDate;
  editActivity: EditActivity;
  setActivities: React.Dispatch<React.SetStateAction<Activities[] | undefined>>;
}


const AdminHandleActivity = () => {

  const [ hourArray, setHourArray ] = useState<number[]>([]);
  const [ minuteArray, setMinuteArray ] = useState<number[]>([]);
  const { clickedDate, editActivity, setActivities }: OutletProps = useOutletContext<OutletProps>();
  const [ hourStamp, setHourStamp ] = useState<string>('');
  const [ minuteStamp, setMinuteStamp ] = useState<string>('');
  const [ title, setTitle ] = useState<string>('');
  const [ text, setText ] = useState<string>('');
  const [ open, setOpen ] = useState<boolean>(false);
  const [ dialogText, setDialogText ] = useState<string>('');

  const navigate = useNavigate();


  useEffect(() => {

    const tempHourArray = [];
    for(let i = 0; i < 24; i++) {
      tempHourArray.push(i);
    }

    const tempMinArray = [];
    for(let i = 0; i < 12; i++) {
      tempMinArray.push(i);
    }

    setHourArray(tempHourArray);
    setMinuteArray(tempMinArray);

    setHourStamp(editActivity.time.substring(0, 2));
    setMinuteStamp(editActivity.time.substring(3, 5));
    setTitle(editActivity.title);
    setText(editActivity.text);

  }, []);

  const changeActivity = () => {

    if ( text.length != 0 && title.length != 0 && `${hourStamp}:${minuteStamp}`.length == 5 ) {

        const textRef = doc(db, 'calendar', `${ editActivity.id }`);
    
        (async () => {
    
            await updateDoc(textRef, {
              date: `${ clickedDate.currentYear }-`+`${ clickedDate.monthIndex + 1 }-`+`${ clickedDate.index }`,
              text: `${ text }`,
              time: `${hourStamp}:${minuteStamp}`,
              title: `${ title }`
            })
    
            rerenderCalendar();
          }
          )();

        setDialogText('Din aktivitet är uppdaterad');
        setOpen(true);

    } else {

      setDialogText('Vänligen fyll i alla fält');
      setOpen(true);

    }

  }

  const createActivity = () => {

    if ( text.length != 0 && title.length != 0 && `${hourStamp}:${minuteStamp}`.length == 5 ) {

      const activityId = `${Math.random() * 1000 ** 100}`;
  
      (async () => {
  
          await setDoc(doc(db, 'calendar', `${activityId}`), {
              date: `${ clickedDate.currentYear }-`+`${ clickedDate.monthIndex + 1 }-`+`${ clickedDate.index }`,
              text: `${ text }`,
              time: `${hourStamp}:${minuteStamp}`,
              title: `${ title }`,
              id: `${ activityId }`
          })
  
          rerenderCalendar()
      })()

      setDialogText('Din aktivitet är skapad');
      setOpen(true);

    } else {

      setDialogText('Vänligen fyll i alla fält');
      setOpen(true);

    }

  }

  const deleteActivity = () => {

    (async () => {

      await deleteDoc(doc(db, 'calendar', `${editActivity.id}`))
      rerenderCalendar()

    })()

    setDialogText('Din aktivitet är borttagen');
    setOpen(true);

  }

  const rerenderCalendar = () => {

    (async () => {
      const querySnapshot = await getDocs(collection(db, 'calendar'))
      const tempArray: any[] = []
      querySnapshot.forEach((doc: any) => {
          tempArray.push(doc.data())
      })

      setActivities(tempArray);
    })();

  }

  const updateTitle = (e: any) => {
    setTitle(e.target.value)
  }

  const updateText = (e: any) => {
    setText(e.target.value)
  }


  const handleHours = (event: SelectChangeEvent) => {

    setHourStamp((event.target.value));

  }

  const handleMinutes = (event: SelectChangeEvent) => {

    setMinuteStamp((event.target.value));

  }

  const handleClose = () => {

    setOpen(false);

    if ( dialogText !== 'Vänligen fyll i alla fält' ) {

      navigate('/admin/kalender');

    }

  }

    const theme = createTheme({
        components: {
          MuiInput: {
            styleOverrides: {
              root: {
                backgroundColor: "white", // Desired input background color
                "&:hover": {
                  backgroundColor: "white", // Desired input background color when hovered
                },
                "&.Mui-focused": {
                  backgroundColor: "white", // Desired input background color when focused
                },
                "&.Mui-error": {
                  backgroundColor: "white", // Desired input background color when error occurs
                },
              },
            },
          },
          MuiFilledInput: {
            styleOverrides: {
              root: {
                paddingTop: '4px',
                backgroundColor: "white", // Desired input background color
                "&:hover": {
                  backgroundColor: "white", // Desired input background color when hovered
                },
                "&.Mui-focused": {
                  backgroundColor: "white", // Desired input background color when focused
                },
                "&.Mui-error": {
                  backgroundColor: "white", // Desired input background color when error occurs
                },
              },
            },
          },
          MuiSelect: {
            styleOverrides: {
              icon: {
                color: '#FFFFFF',
              },
            },
          },
        },
      });

    return(
        <Container disableGutters style={{ maxWidth: '100vw', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <Box sx={{ backgroundColor: '#342C39', width: { md: '50rem' }, height: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>

                    <Typography variant='h1' color='#FFFFFF' marginTop='2rem'> Kalender </Typography>

                    <Box sx={{ width: '46rem', height: '.1rem', position: 'absolute', bottom: '-.5rem', zIndex: '5', backgroundColor: '#FFFFFF' }}></Box>

                </Box>
                <ThemeProvider theme={theme}>

                    <Typography variant='h4' paddingTop='3rem' paddingBottom='1rem' color='#FFFFFF' width='50rem' textAlign='center' sx={{ backgroundColor: '#342C39' }}>{ editActivity.id ? 'Redigera' : 'Skapa aktivitet' }</Typography>

                    <Box minHeight={'40rem'} sx={{ display: 'flex', position: 'relative', alignItems: 'flex-start', flexDirection: 'column', paddingLeft: '4rem', width: '50rem', backgroundColor: '#342C39' }}>
                        

                        <Typography variant='h6' color='#FFFFFF' textAlign='start'>Namn på aktivitet:</Typography>
                        <TextField variant='filled' size='small' value={ title } onChange={(e) => updateTitle(e)} sx={{ marginBottom: '1.5rem', width: '30rem', padding: '0', paddingTop: '0' }}></TextField>

                        <Typography variant='h6' color='#FFFFFF' textAlign='start'>Tid:</Typography>

                        <Box sx={{ display: 'flex', marginBottom: '1.5rem' }}>

                          <Select
                            labelId='time_label'
                            value={ hourStamp }
                            onChange={ handleHours }
                            sx={{ border: '1px solid #F6F6F6', color: '#F6F6F6', width: '5.5rem', height: '2.5rem', margin: '.5 1.5rem 0 0' }}
                            MenuProps={{
                              PaperProps: { sx: { maxHeight: '10rem' } }
                            }}
                            >
                              {
                                hourArray.length > 0 ?
                                hourArray.map((item, i) => {

                                    if (i < 10) {

                                      return <MenuItem key={i} value={`0${item}`}>{`0${item}`}</MenuItem>

                                    } else {

                                      return <MenuItem key={i} value={item}>{item}</MenuItem>

                                    }

                                  })
                                :
                                ''
                              }

                          </Select>

                          <Select
                            labelId='time_label'
                            value={ minuteStamp }
                            onChange={ handleMinutes }
                            sx={{ border: '1px solid #F6F6F6', color: '#F6F6F6', width: '5.5rem', height: '2.5rem', margin: '0 0 0 1.5rem' }}
                            MenuProps={{
                              PaperProps: { sx: { maxHeight: '10rem' } }
                            }}
                            >
                              {
                                minuteArray.length > 0 ?
                                minuteArray.map((item, i) => {
                                  if (item*5 < 10) {

                                    return <MenuItem key={i} value={`0${item*5}`}>{`0${item*5}`}</MenuItem>

                                  } else {
                                    
                                    return <MenuItem key={i} value={item*5}>{item*5}</MenuItem>

                                  }

                                })
                                :
                                ''
                              }

                          </Select>

                        </Box>


                        <Typography variant='h6' color='#FFFFFF'>Beskrivning:</Typography>
                        <TextField variant='filled' size='small' multiline rows={ 10 } value={ text } onChange={ (e) => updateText(e) } style={{ width: '40rem' }}></TextField>

                        {
                          editActivity.text.length > 0 ?
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Button variant="contained" onClick={ deleteActivity }
                            sx={{ 
                              backgroundColor: '#BA1D37',
                              width: '12rem',
                              height: '3rem',
                              margin: '4rem 0',
                              '&:hover': {backgroundColor: '#BA1D60'}}}>Ta bort</Button>
                            <Button variant="contained" onClick={ changeActivity }
                            sx={{ 
                              backgroundColor: '#BA1D37',
                              width: '12rem',
                              height: '3rem',
                              margin: '4rem 6rem 0 0',
                              '&:hover': {backgroundColor: '#BA1D60'}}}>Ändra</Button>
                          </Box>
                          :
                          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <Button variant="contained" onClick={ createActivity }
                            sx={{ 
                              backgroundColor: '#BA1D37',
                              width: '12rem',
                              height: '3rem',
                              margin: '4rem 6rem 0 0',
                              '&:hover': {backgroundColor: '#BA1D60'}}}>Skapa</Button>
                          </Box>
                        }

                    </Box>
                </ThemeProvider>

                <Dialog open={ open } onClose={ handleClose }>
                  <DialogTitle>{ dialogText }</DialogTitle>
                  <DialogActions sx={{ display:"flex" , justifyContent:"center"}}>
                    <Button onClick={ handleClose } sx={{ bgcolor: "red", color: "white" }}>Stäng</Button>
                  </DialogActions>
                </Dialog>
        </Container>
    )
}

export default AdminHandleActivity;