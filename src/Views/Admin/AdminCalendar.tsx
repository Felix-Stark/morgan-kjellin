import { Container, Paper, Box, Typography, Button } from '@mui/material';
import CalendarDate from '../../components/adminComponents/calendarDate/CalendarDate';
import { useState, useEffect, ContextType } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useOutletContext } from 'react-router-dom';
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';

type Activities = {
    date: string;
    title: string;
    text: string;
    time: string;
    id: string;
}

type OutletProps = {
    activities: Activities[];
    activityProps: (currentYear: number, monthIndex: number, index: number) => void;
}

const AdminCalendar = () => {

    const [ currentDate, setCurrentDate ] = useState<any>(new Date());
    const [ currentYear, setCurrentYear ] = useState<number>( currentDate.getFullYear() );
    const [ monthIndex, setMonthIndex ] = useState<number>( currentDate.getMonth() );
    const [ currentMonth, setCurrentMonth ] = useState<string>( currentDate.toLocaleString('default', { month: 'long' }) );
    const [ selectedYear, setSelectedYear ] = useState<number>( currentDate.getFullYear() );
    const [ currentDays, setCurrentDays ] = useState<any>( new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0).getDate() );
    const [ dayArray, setDayArray ] = useState<number[]>([]);

    const {activities}: OutletProps = useOutletContext<OutletProps>();


    useEffect(() => {

        const days: number[] = [];
        for (let i=0; i < currentDays; i++) {
            days.push( i + 1 );
        }
        setDayArray(days);

    }, [currentDays]);


    useEffect(() => {

        currentDate.setMonth(monthIndex);
        setCurrentDate(new Date(selectedYear, monthIndex - 1, currentDate.getDate()));
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
            setCurrentDays(new Date(currentDate.getFullYear(), monthIndex + 2, 0).getDate());

        }

    }


    return(
        <Container disableGutters style={{ maxWidth: '100vw', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <Box sx={{ backgroundColor: '#342C39', width: { md: '50rem' }, height: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>

                <Typography variant='h1' color='#FFFFFF' marginTop='2rem'> Kalender </Typography>
                <InputLabel id='year_label' sx={{ position: 'absolute', right: '8.5rem', top: '3.5rem' }}>År</InputLabel>

                <Select
                    labelId='year_label'
                    value={`${selectedYear}`}
                    onChange={ handleYears }
                    sx={{ position: 'absolute', right: '.5rem', top: '1rem', zIndex: '2', width: '5.5rem', height: '2.5rem', margin: '1.5rem' }}
                    >
                        <MenuItem value={currentYear + 1}>{currentYear + 1}</MenuItem>
                        <MenuItem value={currentYear}>{currentYear}</MenuItem>
                        <MenuItem value={currentYear - 1}>{currentYear - 1}</MenuItem>

                </Select>

                <Box sx={{ width: '46rem', height: '.1rem', position: 'absolute', bottom: '-.5rem', zIndex: '5', backgroundColor: '#FFFFFF' }}></Box>

            </Box>

            <Box height={'5rem'} sx={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', width: '50rem', backgroundColor: '#342C39', paddingTop: '3rem' }}>

                <TrendingFlatRoundedIcon onClick={ backMonth } sx={{ position: 'absolute', width: '5rem', backgroundColor: '#342C39', color: '#FFFFFF', fontSize: '4rem', left: '1rem', rotate: '180deg', '&:hover': { cursor: 'pointer'} }}></TrendingFlatRoundedIcon>
                <Typography variant='h2' color='#FFFFFF' zIndex='1'> { currentMonth.toUpperCase() } </Typography>
                <TrendingFlatRoundedIcon onClick={ nextMonth } sx={{ position: 'absolute', width: '5rem', backgroundColor: '#342C39', color: '#FFFFFF', fontSize: '4rem', right: '1rem', '&:hover': { cursor: 'pointer'}}}></TrendingFlatRoundedIcon>

            </Box>
            <Box sx={{ backgroundColor: '#342C39', width: { md: '50rem' }, minHeight: '40rem', display: 'flex', justifyContent: 'center' }}>

                <Box sx={{ backgroundColor: '#342C39', width: { md: '47.2rem' }, height: '30rem', display: 'flex', flexWrap: 'wrap', paddingTop: '3rem' }}>
                    { activities ?
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
                                return <CalendarDate key={i} index={i + 1} monthIndex={monthIndex} currentYear={currentDate.getFullYear()} found={found} />

                            } else {

                                const found = false;
                                return <CalendarDate key={i} index={i + 1} monthIndex={monthIndex} currentYear={currentDate.getFullYear()} found={found} />

                            }

                        })
                        :
                        ''
                    }
                </Box>

            </Box>
        </Container>
    )
}

export default AdminCalendar;