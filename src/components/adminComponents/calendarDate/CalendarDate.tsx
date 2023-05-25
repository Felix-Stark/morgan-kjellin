import { Container, Paper, Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {

    index: number;
    monthIndex: number;
    currentYear: number;
    found: boolean;

}

const CalendarDate = ({ index, monthIndex, currentYear, found }: Props) => {

    const [ dateColor, setDateColor ] = useState<string>();

    const navigate = useNavigate();
    const getDay = new Date().getDate();
    const getMonth = new Date().getMonth();
    const getYear = new Date().getFullYear();

    const gotoActivities = () => {
        navigate('aktiviteter');
    }

    useEffect(() => {
        found ? setDateColor('red') : setDateColor('#FFFFFF');
    }, [found]);

    return(
        
        <Box onClick={gotoActivities} sx={{ backgroundColor: `${ dateColor }`, width: '5.5rem', height: '5.5rem', margin: '.1rem' }}>
            {
                index == getDay && getMonth == monthIndex && getYear == currentYear ? <Typography sx={{fontSize: '2rem', color: 'blue'}}>{index}</Typography> : <Typography>{index}</Typography>
            }
        </Box>

    )
}

export default CalendarDate;