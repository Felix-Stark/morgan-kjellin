import { Container, Paper, Box, Typography, Button } from '@mui/material';

type Props = {
    index: number;
}

const CalendarDate = ({ index }: Props) => {

    const getDay = new Date().getDate();


    return(
        <Box sx={{ backgroundColor: '#FFFFFF', width: '5.5rem', height: '5.5rem', margin: '.1rem' }}>
            {
                index == getDay ? <Typography sx={{fontSize: '2rem', color: 'blue'}}>{index}</Typography> : <Typography>{index}</Typography>
            }
        </Box>
    )
}

export default CalendarDate;