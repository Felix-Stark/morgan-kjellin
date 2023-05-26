import { Container, Paper, Box, Typography, Button } from '@mui/material';
import CalendarDate from '../../components/adminComponents/calendarDate/CalendarDate';
import { useState, useEffect } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import CardMedia from '@mui/material/CardMedia';
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';


const AdminCalendar = () => {

    const [ currentDate, setCurrentDate ] = useState<any>(new Date());
    const [ currentYear, setCurrentYear ] = useState<number>( currentDate.getFullYear() );
    const [ monthIndex, setMonthIndex ] = useState<number>( currentDate.getMonth() );
    const [ currentMonth, setCurrentMonth ] = useState<string>( currentDate.toLocaleString('default', { month: 'long' }) );
    const [ selectedYear, setSelectedYear ] = useState<number>( currentDate.getFullYear() );
    const [ currentDays, setCurrentDays ] = useState<any>( new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0).getDate() );
    const [ dayArray, setDayArray ] = useState<number[]>([]);

    const activities = [
        { date: '2022-11-11', title: 'Föreläsning', text: 'Rensa Krabba' }, 
        { date: '2023-8-8', title: 'Te-party', text: 'odla saker' },
        { date: '2023-2-24', title: 'spela spel', text: 'vi ska spela saker' }];

    useEffect(() => {

        const days: number[] = [];
        for (let i=0; i < currentDays; i++) {
            days.push( i + 1 );
        }
        setDayArray(days);

    }, [currentDays]);

    useEffect(() => {

        setCurrentDate(new Date(selectedYear, monthIndex, currentDate.getDate()));
        setCurrentDays(new Date(selectedYear, currentDate.getMonth()+1, 0).getDate());

    }, [selectedYear]);
    
    const handleYears = (event: SelectChangeEvent) => {

        setSelectedYear(Number(event.target.value));

    }

    const backMonth = () => {

        if (monthIndex != 0) {

            currentDate.setMonth(monthIndex - 1);
            setMonthIndex(currentDate.getMonth());
            setCurrentMonth(currentDate.toLocaleString('default', { month: 'long' }));
            setCurrentDays(new Date(currentDate.getFullYear(), monthIndex, 0).getDate());

        } 

    }

    const nextMonth = () => {

        if (monthIndex != 11) {

            currentDate.setMonth(monthIndex + 1);
            setMonthIndex(currentDate.getMonth());
            setCurrentMonth(currentDate.toLocaleString('default', { month: 'long' }));
            setCurrentDays(new Date(currentDate.getFullYear(), monthIndex+2, 0).getDate());

        }

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
                        <MenuItem value={currentYear + 1}>{currentYear + 1}</MenuItem>
                        <MenuItem value={currentYear}>{currentYear}</MenuItem>
                        <MenuItem value={currentYear - 1}>{currentYear - 1}</MenuItem>

                </Select>

                <Box sx={{ width: '80%', height: '.1rem', position: 'absolute', bottom: '0', backgroundColor: '#FFFFFF' }}></Box>

            </Box>

            <Box height={'5rem'} sx={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', width: '50rem', marginLeft: '2rem', backgroundColor: 'grey' }}>

                <TrendingFlatRoundedIcon onClick={ backMonth } sx={{ position: 'absolute', width: '5rem', backgroundColor: 'grey', color: '#FFFFFF', fontSize: '3rem', left: '10%', rotate: '180deg' }}></TrendingFlatRoundedIcon>
                <Typography variant='h2' color='#FFFFFF' zIndex='1'> { currentMonth.toUpperCase() } </Typography>
                <TrendingFlatRoundedIcon onClick={ nextMonth } sx={{ position: 'absolute', width: '5rem', backgroundColor: 'grey', color: '#FFFFFF', fontSize: '3rem', right: '10%'}}></TrendingFlatRoundedIcon>

            </Box>

            <Box sx={{ backgroundColor: 'grey', width: { md: '50rem' }, height: '40rem', display: 'flex', flexWrap: 'wrap', margin: '0 2rem 2rem 2rem', paddingTop: '1rem' }}>
                {
                    dayArray.map((date, i) => {

                        const tempFoundArray: string[] = [];
                        const tempTitleArray: string[] = [];

                        activities.forEach((activity) => {

                            if (activity.date == `${ selectedYear }-`+`${ monthIndex + 1 }-`+`${ date }`) {
                                tempFoundArray.push(activity.date);
                                tempTitleArray.push(activity.title);
                            }

                        });

                        if (tempFoundArray.includes(`${ selectedYear }-`+`${ monthIndex + 1 }-`+`${ date }`)) {

                            const found = true;
                            return <CalendarDate key={i} index={i + 1} monthIndex={monthIndex} currentYear={currentDate.getFullYear()} found={found} tempTitleArray={tempTitleArray}/>

                        } else {

                            const found = false;
                            return <CalendarDate key={i} index={i + 1} monthIndex={monthIndex} currentYear={currentDate.getFullYear()} found={found} tempTitleArray={tempTitleArray}/>

                        }

                    })
                }
            </Box>
        </Container>
    )
}

export default AdminCalendar;