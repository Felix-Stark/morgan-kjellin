import { Container, Paper, Box, Typography, Button } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase-config';

type Activities = {
  date: string;
  title: string;
  text: string;
  time: string;
}

type EditActivity = {
  title: string;
  time: string;
  text: string;
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
}


const AdminHandleActivity = () => {

  const [ hourArray, setHourArray ] = useState<number[]>([]);
  const [ minuteArray, setMinuteArray ] = useState<number[]>([]);
  const { clickedDate, editActivity }: OutletProps = useOutletContext<OutletProps>();
  const [ hourStamp, setHourStamp ] = useState<string>('');
  const [ minuteStamp, setMinuteStamp ] = useState<string>('');
  const [ title, setTitle ] = useState<string>('');
  const [ text, setText ] = useState<string>('');

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
    const textRef = doc(db, 'calendar', `${ editActivity.title }`);

    (
      async () => {
        await updateDoc(textRef, {
          date: `${ clickedDate.currentYear }-`+`${ clickedDate.monthIndex + 1 }-`+`${ clickedDate.index }`,
          title: `${ text }`,
          text: `${ title }`,
          time: `${hourStamp}:${minuteStamp}`
        })
      }
    )();
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
                height: '2.5rem',
                padding: 0,
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
        },
      });

    return(
        <Container disableGutters style={{ maxWidth: '100vw', width: '100%' }}>

                <Box sx={{ backgroundColor: 'grey', width: { md: '50rem' }, height: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', marginLeft: '2rem' }}>

                    <Typography variant='h1' color='#FFFFFF' margin='1rem'> Kalender </Typography>

                    <Box sx={{ width: '80%', height: '.1rem', position: 'absolute', bottom: '0', backgroundColor: '#FFFFFF' }}></Box>

                </Box>
                <ThemeProvider theme={theme}>
                    <Box height={'20rem'} sx={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '50rem', marginLeft: '2rem', backgroundColor: 'grey' }}>
                        
                        <Typography variant='h4' marginTop='2rem' color='#FFFFFF'>{`${ clickedDate.currentYear }-`+`${ clickedDate.monthIndex + 1 }-`+`${ clickedDate.index }`}</Typography>

                        <Typography variant='h5' color='#FFFFFF' textAlign='start'>Namn på aktivitet:</Typography>
                        <TextField variant='filled' size='small' value={ title } onChange={(e) => updateTitle(e)}></TextField>

                        <Typography variant='h5' color='#FFFFFF' textAlign='start'>Tid:</Typography>

                        <Box sx={{ display: 'flex' }}>

                          <Select
                            labelId='time_label'
                            value={ hourStamp }
                            onChange={ handleHours }
                            sx={{ width: '5.5rem', height: '2.5rem', margin: '1.5rem' }}
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
                            sx={{ width: '5.5rem', height: '2.5rem', margin: '1.5rem' }}
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


                        <Typography variant='h5' color='#FFFFFF'>Beskrivning:</Typography>
                        <TextField variant='filled' size='small' value={ text } onChange={ (e) => updateText(e) }></TextField>

                        {
                          editActivity.text.length > 0 ?
                          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                            <Button>Ta bort</Button>
                            <Button onClick={ changeActivity }>Ändra</Button>
                          </Box>
                          :
                          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                            <Button>Skapa</Button>
                          </Box>
                        }

                    </Box>
                </ThemeProvider>
        </Container>
    )
}

export default AdminHandleActivity;