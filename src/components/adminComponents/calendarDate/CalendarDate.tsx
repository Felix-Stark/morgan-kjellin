import { Container, Paper, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Props = {
    index: number;
}

const CalendarDate = ({ index }: Props) => {

    const navigate = useNavigate();
    const getDay = new Date().getDate();

    const gotoActivities = () => {
        navigate('aktiviteter');
    }

    return(
        <Box onClick={gotoActivities} sx={{ backgroundColor: '#FFFFFF', width: '5.5rem', height: '5.5rem', margin: '.1rem' }}>
            {
                index == getDay ? <Typography sx={{fontSize: '2rem', color: 'blue'}}>{index}</Typography> : <Typography>{index}</Typography>
            }
        </Box>
    )
}

export default CalendarDate;