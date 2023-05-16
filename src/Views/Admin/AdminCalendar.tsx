import { Container, Paper, Box, Typography, Button } from '@mui/material';
import CalendarDate from '../../components/adminComponents/calendarDate/CalendarDate';
import { useState, useEffect } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import CardMedia from '@mui/material/CardMedia';
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';

const AdminCalendar = () => {

    //köra new Date()
    //plocka ut vilket år och vilken månad det är, sätta i states vid sidladdning
    //detta för att default när man hamnar i kalender ska vara nuvarande månad och år.
    //statet sätts initialt till nuvarande månad och ändras vid piltrycken enligt calendarMonths, behövs jämför state=obj
    // loopa då ut så många dagar som objektet innehåller - index + 1 blir dagens nummer.
    //på¨detta sätt kan år och månader gå, fast default kommer alltid vara rätt år och månad när man går in på kalendern.

    useEffect(() => {
        const getDate = new Date();
        setCurrentYear(getDate.getFullYear());
        setCurrentMonth(getDate.toLocaleString('default', { month: 'long' }));
    }, []);

    const [ currentYear, setCurrentYear ] = useState<number>( new Date().getFullYear());
    const [ currentMonth, setCurrentMonth ] = useState<string>( new Date().toLocaleString('default', { month: 'long' }) );
    const [ selectedYear, setSelectedYear ] = useState<number>(currentYear);

    const calendarMonths = [
        {
            month: 'januari',
            days: 31
        },
        {
            month: 'februari',
            days: 28
        },
        {
            month: 'mars',
            days: 31
        },
        {
            month: 'april',
            days: 30
        },
        {
            month: 'maj',
            days: 31
        },
        {
            month: 'juni',
            days: 30
        },
        {
            month: 'juli',
            days: 31
        },
        {
            month: 'augusti',
            days: 31
        },
        {
            month: 'september',
            days: 30
        },
        {
            month: 'oktober',
            days: 31
        },
        {
            month: 'november',
            days: 30
        },
        {
            month: 'december',
            days: 31
        }
    ]

    const handleYears = (event: SelectChangeEvent) => {
        setSelectedYear(Number(event.target.value));
    }

    return(
        <Container disableGutters style={{ maxWidth: '100vw', width: '100%' }}>

            <Box sx={{ backgroundColor: 'grey', width: { md: '50rem' }, height: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', marginLeft: '2rem' }}>

                <Typography variant='h1' color='#FFFFFF' margin='1rem'> Kalender </Typography>
                <InputLabel id='year_label' sx={{ position: 'absolute', right: '9rem', top: '2rem' }}>År</InputLabel>

                <Select
                    labelId='year_label'
                    value={`${selectedYear}`}
                    onChange={ handleYears }
                    sx={{ position: 'absolute', right: '1rem', zIndex: '2', width: '5.5rem', height: '2.5rem', margin: '1.5rem' }}
                    >
                        <MenuItem value={currentYear}>{currentYear}</MenuItem>
                        <MenuItem value={currentYear - 1}>{currentYear - 1}</MenuItem>
                        <MenuItem value={currentYear - 2}>{currentYear - 2}</MenuItem>
                        <MenuItem value={currentYear - 3}>{currentYear - 3}</MenuItem>
                        <MenuItem value={currentYear - 4}>{currentYear - 4}</MenuItem>

                </Select>

                <Box sx={{ width: '80%', height: '.1rem', position: 'absolute', bottom: '0', backgroundColor: '#FFFFFF' }}></Box>

            </Box>

            <Box height={'5rem'} sx={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', width: '50rem', marginLeft: '2rem', backgroundColor: 'grey' }}>

                <TrendingFlatRoundedIcon sx={{ position: 'absolute', width: '5rem', backgroundColor: 'grey', color: '#FFFFFF', fontSize: '3rem', left: '10%', rotate: '180deg' }}></TrendingFlatRoundedIcon>
                <Typography variant='h2' color='#FFFFFF' zIndex='1'> { currentMonth.toUpperCase() } </Typography>
                <TrendingFlatRoundedIcon sx={{ position: 'absolute', width: '5rem', backgroundColor: 'grey', color: '#FFFFFF', fontSize: '3rem', right: '10%'}}></TrendingFlatRoundedIcon>

            </Box>

            <Box sx={{ backgroundColor: 'grey', width: { md: '50rem' }, height: '40rem', display: 'flex', flexWrap: 'wrap', margin: '0 2rem 2rem 2rem', paddingTop: '1rem' }}>
                {
                    calendarMonths.map((date) => {

                        if (date.month == currentMonth) {

                            const tempArray: JSX.Element[] = [];

                            for(let i=0; i < date.days; i++) {
                                tempArray.push(<CalendarDate key={i} index={i + 1} />)
                            }

                            return tempArray;
                        }
                    })
                }
            </Box>
        </Container>
    )
}

export default AdminCalendar;