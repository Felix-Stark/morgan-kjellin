import { Container, Paper, Box, Typography, Button } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

type Activities = {
  date: string;
  title: string;
  text: string;
  time: string;
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
}


const AdminHandleActivity = () => {

  const [ selectedHour, setSelectedHour ] = useState<string>('');
  const [ selectedMinute, setSelectedMinute ] = useState<string>('');
  const [ hourArray, setHourArray ] = useState<number[]>([]);
  const [ minuteArray, setMinuteArray ] = useState<number[]>([]);
  const { clickedDate }: OutletProps = useOutletContext<OutletProps>();

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

  }, []);


  const handleHours = (event: SelectChangeEvent) => {

    setSelectedHour((event.target.value));

  }

  const handleMinutes = (event: SelectChangeEvent) => {

    setSelectedMinute((event.target.value));

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
                        <TextField variant='filled' size='small'></TextField>

                        <InputLabel id='time_label' sx={{ position: 'absolute', right: '9rem', top: '2rem' }}>Tid:</InputLabel>

                        <Select
                          labelId='time_label'
                          value={selectedHour}
                          onChange={ handleHours }
                          sx={{ width: '5.5rem', height: '2.5rem', margin: '1.5rem' }}
                          >
                            {
                              hourArray.length > 0 ?
                              hourArray.map((item, i) => {
                                console.log('ey')
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
                          value={selectedMinute}
                          onChange={ handleMinutes }
                          sx={{ width: '5.5rem', height: '2.5rem', margin: '1.5rem' }}
                          >
                            {
                              minuteArray.length > 0 ?
                              minuteArray.map((item, i) => {
                                if (item*5 < 10) {
                                  console.log('e')

                                  return <MenuItem key={i} value={`0${item*5}`}>{`0${item*5}`}</MenuItem>

                                } else {
                                  console.log('a')
                                  return <MenuItem key={i} value={item*5}>{item*5}</MenuItem>

                                }

                              })
                              :
                              ''
                            }

                        </Select>

                        <Typography variant='h5' color='#FFFFFF'>Beskrivning:</Typography>
                        <TextField variant='filled' size='small'></TextField>

                    </Box>
                </ThemeProvider>
        </Container>
    )
}

export default AdminHandleActivity;