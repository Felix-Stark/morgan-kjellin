import { Container, Paper, Box, Typography, Button } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


type Props = {

    index: number;
    monthIndex: number;
    currentYear: number;
    found: boolean;

}

type Activities = {
    date: string;
    title: string;
    text: string;
    time: string;
}

type OutletProps = {
    activities: Activities[];
    activityProps: (currentYear: number, monthIndex: number, index: number) => void;
}

const CalendarDate = ({ index, monthIndex, currentYear, found }: Props) => {

    const [ dateColor, setDateColor ] = useState<string>();

    const navigate = useNavigate();
    const getDay = new Date().getDate();
    const getMonth = new Date().getMonth();
    const getYear = new Date().getFullYear();

    const {activityProps}: OutletProps = useOutletContext<OutletProps>();

    const gotoActivities = (currentYear: number, monthIndex: number, index: number) => {
        activityProps(currentYear, monthIndex, index);
        navigate('aktiviteter');
    }


    useEffect(() => {
        found ? setDateColor('red') : setDateColor('#FFFFFF');
    }, [found]);

    return(
        
        <Box onClick={() => gotoActivities(currentYear, monthIndex, index)} sx={{ backgroundColor: `${ dateColor }`, width: '5.5rem', height: '5.5rem', margin: '.1rem' }}>
            {
                index == getDay && getMonth == monthIndex && getYear == currentYear ? <Typography sx={{fontSize: '2rem', color: 'blue'}}>{index}</Typography> : <Typography>{index}</Typography>
            }
            {
                found ?
                <Typography>Aktiviteter</Typography>
                :
                ''
            }
        </Box>

    )
}

export default CalendarDate;