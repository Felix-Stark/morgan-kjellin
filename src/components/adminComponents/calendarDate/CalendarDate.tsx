import { Container, Paper, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Props = {
    index: number;
    monthIndex: number;
    currentYear: number;
}

const CalendarDate = ({ index, monthIndex, currentYear }: Props) => {

    const navigate = useNavigate();
    const getDay = new Date().getDate();
    const getMonth = new Date().getMonth();
    const getYear = new Date().getFullYear();

    const activities = [{ date: '2022-11-11', title: 'Föreläsning', text: 'Rensa Krabba' }, { date: '2023-08-08', title: 'Te-party', text: 'odla saker' }];

    const gotoActivities = () => {
        navigate('aktiviteter');
    }

    return(
        <Box onClick={gotoActivities} sx={{ backgroundColor: '#FFFFFF', width: '5.5rem', height: '5.5rem', margin: '.1rem' }}>
            {
                index == getDay && getMonth == monthIndex && getYear == currentYear ? <Typography sx={{fontSize: '2rem', color: 'blue'}}>{index}</Typography> : <Typography>{index}</Typography>
            }
        </Box>
    )
}

export default CalendarDate;